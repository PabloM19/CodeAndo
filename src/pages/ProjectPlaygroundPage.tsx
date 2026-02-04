import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PlaygroundEditor } from "@/components/PlaygroundEditor";
import { PlaygroundPreview } from "@/components/PlaygroundPreview";
import { ChallengeList } from "@/components/ChallengeList";
import { getProjectBySlug, getPrevNextProject } from "@/content/projectUtils";
import { ArrowLeft, ArrowRight, RotateCcw, Share2, Menu, BookOpen, Clipboard, Sparkles, Download } from "lucide-react";
import { loadProjectProgress, saveProjectProgress, getProjectProgressPercentage } from "@/playground/projectStorage";
import { getShareDataFromURL, createShareURL } from "@/playground/share";
import { evaluateAllChallenges } from "@/playground/checks";
import type { ProjectProgress } from "@/types/projects";
import { useDebounce } from "@/hooks/useDebounce";
import { toast } from "sonner";
import { copyToClipboard } from "@/utils/clipboard";
import { loadTeacherMode, saveTeacherMode } from "@/utils/teacherMode";
import { exportProjectZip } from "@/utils/exportZip";

const PREVIEW_WIDTH_KEY = "codeando:previewWidth";

type ViewportWidth = 360 | 768 | 1024 | "full";

function loadPreviewWidth(): ViewportWidth {
  try {
    const saved = localStorage.getItem(PREVIEW_WIDTH_KEY);
    if (!saved) return "full";
    if (saved === "full") return "full";
    const num = parseInt(saved, 10);
    if ([360, 768, 1024].includes(num)) return num as ViewportWidth;
    return "full";
  } catch {
    return "full";
  }
}

function savePreviewWidth(width: ViewportWidth): void {
  try {
    localStorage.setItem(PREVIEW_WIDTH_KEY, String(width));
  } catch (error) {
    console.error("Error saving preview width:", error);
  }
}

export function ProjectPlaygroundPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, setSearchParams] = useSearchParams();
  const project = getProjectBySlug(slug || "");
  const { prev, next } = getPrevNextProject(slug || "");

  const [html, setHTML] = useState(project?.starter.html || "");
  const [css, setCSS] = useState(project?.starter.css || "");
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [manualCompletedChallenges, setManualCompletedChallenges] = useState<string[]>([]);
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState<ViewportWidth>("full");
  const [teacherMode, setTeacherMode] = useState(false);
  
  // Estados para el flujo de solución
  const [showSolutionConfirmOpen, setShowSolutionConfirmOpen] = useState(false);
  const [solutionDialogOpen, setSolutionDialogOpen] = useState(false);
  const [applySolutionConfirmOpen, setApplySolutionConfirmOpen] = useState(false);

  // Cargar viewportWidth y teacherMode desde localStorage
  useEffect(() => {
    setViewportWidth(loadPreviewWidth());
    setTeacherMode(loadTeacherMode());
  }, []);

  // Debounce para autosave
  const debouncedHTML = useDebounce(html, 500);
  const debouncedCSS = useDebounce(css, 500);

  // Cargar desde share URL o localStorage
  useEffect(() => {
    if (!project) return;

    // Primero intentar desde URL share
    const shareData = getShareDataFromURL();
    if (shareData) {
      setHTML(shareData.html);
      setCSS(shareData.css);
      // Limpiar URL
      setSearchParams({});
      return;
    }

    // Luego desde localStorage
    const saved = loadProjectProgress(project.slug);
    if (saved) {
      setHTML(saved.html);
      setCSS(saved.css);
      setCompletedChallenges(saved.completedChallenges || []);
      setManualCompletedChallenges(saved.manualCompletedChallenges || []);
    }
  }, [project, setSearchParams]);

  // Autosave
  useEffect(() => {
    if (!project) return;
    const newCompleted = evaluateAllChallenges(project.challenges, debouncedHTML, debouncedCSS);
    setCompletedChallenges(newCompleted);
    
    const progress: ProjectProgress = {
      html: debouncedHTML,
      css: debouncedCSS,
      completedChallenges: newCompleted,
      manualCompletedChallenges,
      timestamp: Date.now(),
    };
    saveProjectProgress(project.slug, progress);
  }, [debouncedHTML, debouncedCSS, project, manualCompletedChallenges]);

  const handleReset = () => {
    if (!project) return;
    setHTML(project.starter.html);
    setCSS(project.starter.css);
    setCompletedChallenges([]);
    setManualCompletedChallenges([]);
    setResetDialogOpen(false);
    toast.success("Proyecto reseteado");
  };

  const handleShare = async () => {
    if (!project) return;
    const shareURL = createShareURL(window.location.href.split("?")[0], { html, css });
    await copyToClipboard(shareURL, "Link copiado al portapapeles");
  };

  const handleCopyHTML = () => {
    copyToClipboard(html, "HTML copiado");
  };

  const handleCopyCSS = () => {
    copyToClipboard(css, "CSS copiado");
  };

  const handleCopySolutionHTML = () => {
    if (!project?.solution?.html) return;
    copyToClipboard(project.solution.html, "Solución HTML copiada");
  };

  const handleCopySolutionCSS = () => {
    if (!project?.solution?.css) return;
    copyToClipboard(project.solution.css, "Solución CSS copiada");
  };

  const handleApplySolution = () => {
    if (!project?.solution) return;
    setHTML(project.solution.html);
    setCSS(project.solution.css);
    setApplySolutionConfirmOpen(false);
    setSolutionDialogOpen(false);
    toast.success("Solución aplicada");
  };

  const handleViewportWidthChange = (value: string) => {
    const newWidth = value === "full" ? "full" : (parseInt(value, 10) as ViewportWidth);
    setViewportWidth(newWidth);
    savePreviewWidth(newWidth);
  };

  const handleTeacherModeChange = (enabled: boolean) => {
    setTeacherMode(enabled);
    saveTeacherMode(enabled);
  };

  const handleExport = async () => {
    if (!project) return;
    try {
      await exportProjectZip({
        projectTitle: project.title,
        slug: project.slug,
        html,
        css,
      });
      toast.success("ZIP descargado");
    } catch (error) {
      toast.error("No se pudo exportar");
    }
  };

  const handleToggleManualComplete = (challengeId: string) => {
    const newManual = [...manualCompletedChallenges];
    const index = newManual.indexOf(challengeId);
    if (index > -1) {
      newManual.splice(index, 1);
    } else {
      newManual.push(challengeId);
    }
    setManualCompletedChallenges(newManual);
  };


  const hasSolution = project?.solution?.html || project?.solution?.css;

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
        <Link to="/projects">
          <Button>Volver a proyectos</Button>
        </Link>
      </div>
    );
  }

  // Calcular retos completados incluyendo overrides manuales
  const allCompletedChallenges = new Set([
    ...completedChallenges,
    ...manualCompletedChallenges,
  ]);

  const progressPercentage = getProjectProgressPercentage(
    Array.from(allCompletedChallenges),
    project.challenges.length
  );

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col">
      {/* Barra superior sticky */}
      <div className="sticky top-[73px] z-40 bg-white border-b border-neutral-200 px-4 py-3">
        <div className="container mx-auto space-y-2">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="hidden sm:block">
            <ol className="flex items-center gap-2 text-xs text-neutral-500">
              <li>
                <Link
                  to="/projects"
                  className="hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
                >
                  Proyectos
                </Link>
              </li>
              <li>/</li>
              <li>
                <span>Proyecto {project.order}</span>
              </li>
              <li>/</li>
              <li>
                <span className="text-neutral-900">Playground</span>
              </li>
            </ol>
          </nav>

          {/* Controles principales */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" size="sm">
                <Link to={`/project/${project.slug}/brief`}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Ver Brief
                </Link>
              </Button>
              {/* Navegación prev/next - solo en md+ */}
              <div className="hidden md:flex items-center gap-2">
                {prev ? (
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/project/${prev.slug}/play`}>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled>
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                )}
                {next ? (
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/project/${next.slug}/play`}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-1 justify-end">
              {/* Modo profesor - solo en sm+ */}
              <div className="hidden sm:flex items-center gap-2">
                <Label htmlFor="teacher-mode" className="text-sm text-neutral-500 whitespace-nowrap cursor-pointer">
                  Modo profesor
                </Label>
                <Switch
                  id="teacher-mode"
                  checked={teacherMode}
                  onCheckedChange={handleTeacherModeChange}
                />
              </div>
              {/* Selector de ancho del preview */}
              <div className="hidden sm:flex items-center gap-2">
                <label htmlFor="viewport-select" className="text-sm text-neutral-500 whitespace-nowrap">
                  Ancho:
                </label>
                <Select value={String(viewportWidth)} onValueChange={handleViewportWidthChange}>
                  <SelectTrigger id="viewport-select" className="w-[120px] h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="360">Mobile (360px)</SelectItem>
                    <SelectItem value="768">Tablet (768px)</SelectItem>
                    <SelectItem value="1024">Desktop (1024px)</SelectItem>
                    <SelectItem value="full">Full (100%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Progreso - solo visible en sm+ */}
              <div className="hidden sm:flex items-center gap-3 flex-1 max-w-xs">
                <div className="flex items-center gap-2 text-sm text-neutral-600 min-w-fit">
                  <span>{Array.from(allCompletedChallenges).length}/{project.challenges.length}</span>
                  <span className="text-neutral-500">retos</span>
                </div>
                <Progress value={progressPercentage} className="flex-1" />
                <span className="text-sm text-neutral-500 min-w-fit">
                  {progressPercentage}%
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Botones copiar */}
                <Button variant="outline" size="sm" onClick={handleCopyHTML} title="Copiar HTML">
                  <Clipboard className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">HTML</span>
                </Button>
                <Button variant="outline" size="sm" onClick={handleCopyCSS} title="Copiar CSS">
                  <Clipboard className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">CSS</span>
                </Button>
                <AlertDialog open={resetDialogOpen} onOpenChange={setResetDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Resetear ejercicio?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Volverás al starter de la lección. Esto reemplaza tu HTML/CSS actual.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel asChild>
                        <Button variant="outline">Cancelar</Button>
                      </AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Button variant="secondary" onClick={handleReset}>
                          Resetear
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">Exportar</span>
                </Button>
                {/* Botón Solución */}
                {teacherMode ? (
                  // Modo profesor: abrir directo sin confirmación
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={!hasSolution}
                    onClick={() => setSolutionDialogOpen(true)}
                    title={!hasSolution ? "Esta lección aún no tiene solución" : "Ver solución"}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    <span className="hidden lg:inline">Solución</span>
                  </Button>
                ) : (
                  // Modo normal: pedir confirmación
                  <AlertDialog open={showSolutionConfirmOpen} onOpenChange={setShowSolutionConfirmOpen}>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={!hasSolution}
                        title={!hasSolution ? "Esta lección aún no tiene solución" : "Ver solución"}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="hidden lg:inline">Solución</span>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Ver la solución?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Te recomendamos intentar completar los retos antes. ¿Quieres verla igualmente?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel asChild>
                          <Button variant="outline">Cancelar</Button>
                        </AlertDialogCancel>
                        <AlertDialogAction asChild>
                          <Button
                            variant="secondary"
                            onClick={() => {
                              setShowSolutionConfirmOpen(false);
                              setSolutionDialogOpen(true);
                            }}
                          >
                            Ver solución
                          </Button>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
                {/* Sheet trigger para móvil */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="md:hidden">
                      <Menu className="w-4 h-4 mr-2" />
                      Retos
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle>Retos</SheetTitle>
                    </SheetHeader>
                    {/* Modo profesor en móvil */}
                    <div className="mt-4 mb-4 flex items-center justify-between gap-2 sm:hidden">
                      <Label htmlFor="teacher-mode-mobile" className="text-sm text-neutral-500">
                        Modo profesor
                      </Label>
                      <Switch
                        id="teacher-mode-mobile"
                        checked={teacherMode}
                        onCheckedChange={handleTeacherModeChange}
                      />
                    </div>
                    {/* Selector de ancho en móvil */}
                    <div className="mt-4 mb-4 flex items-center gap-2 sm:hidden">
                      <label htmlFor="viewport-select-mobile" className="text-sm text-neutral-500 whitespace-nowrap">
                        Ancho:
                      </label>
                      <Select value={String(viewportWidth)} onValueChange={handleViewportWidthChange}>
                        <SelectTrigger id="viewport-select-mobile" className="w-full h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="360">Mobile (360px)</SelectItem>
                          <SelectItem value="768">Tablet (768px)</SelectItem>
                          <SelectItem value="1024">Desktop (1024px)</SelectItem>
                          <SelectItem value="full">Full (100%)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Navegación prev/next en móvil */}
                    <div className="mb-4 flex items-center gap-2 md:hidden">
                      {prev ? (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link to={`/project/${prev.slug}/play`}>
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Anterior
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled className="flex-1">
                          <ArrowLeft className="w-4 h-4 mr-2" />
                          Anterior
                        </Button>
                      )}
                      {next ? (
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link to={`/project/${next.slug}/play`}>
                            Siguiente
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" disabled className="flex-1">
                          Siguiente
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                    <div className="mt-6">
                      <ChallengeList
                        challenges={project.challenges}
                        html={html}
                        css={css}
                        manualCompletedChallenges={manualCompletedChallenges}
                        onToggleManualComplete={handleToggleManualComplete}
                      />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog de solución */}
      <Dialog open={solutionDialogOpen} onOpenChange={setSolutionDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Solución — {project.title}</DialogTitle>
            <DialogDescription>
              Úsala para comparar y aprender, no para copiar sin entender.
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="html" className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="html">HTML</TabsTrigger>
                <TabsTrigger value="css">CSS</TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <AlertDialog open={applySolutionConfirmOpen} onOpenChange={setApplySolutionConfirmOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="secondary" size="sm">
                      Aplicar al editor
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Aplicar solución?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esto reemplazará tu HTML y CSS actuales.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel asChild>
                        <Button variant="outline">Cancelar</Button>
                      </AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Button variant="secondary" onClick={handleApplySolution}>
                          Aplicar
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
            
            <TabsContent value="html" className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-neutral-500">Código HTML</span>
                <Button variant="outline" size="sm" onClick={handleCopySolutionHTML}>
                  <Clipboard className="w-4 h-4 mr-2" />
                  Copiar HTML
                </Button>
              </div>
              <ScrollArea className="flex-1 border border-neutral-200 rounded-[16px] bg-neutral-50">
                <pre className="p-4 text-sm font-mono text-neutral-900 whitespace-pre-wrap">
                  {project.solution?.html || "No hay solución HTML disponible"}
                </pre>
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="css" className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-neutral-500">Código CSS</span>
                <Button variant="outline" size="sm" onClick={handleCopySolutionCSS}>
                  <Clipboard className="w-4 h-4 mr-2" />
                  Copiar CSS
                </Button>
              </div>
              <ScrollArea className="flex-1 border border-neutral-200 rounded-[16px] bg-neutral-50">
                <pre className="p-4 text-sm font-mono text-neutral-900 whitespace-pre-wrap">
                  {project.solution?.css || "No hay solución CSS disponible"}
                </pre>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Contenido principal */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
          {/* Editor */}
          <div className="lg:col-span-1 h-full min-h-[300px]">
            <PlaygroundEditor
              html={html}
              css={css}
              onHTMLChange={setHTML}
              onCSSChange={setCSS}
            />
          </div>

          {/* Preview */}
          <div className="lg:col-span-1 h-full min-h-[300px]">
            <PlaygroundPreview html={html} css={css} viewportWidth={viewportWidth} />
          </div>

          {/* Sidebar de retos (desktop) */}
          <div className="hidden lg:block lg:col-span-1 h-full overflow-y-auto">
            <div className="sticky top-4">
              <ChallengeList
                challenges={project.challenges}
                html={html}
                css={css}
                manualCompletedChallenges={manualCompletedChallenges}
                onToggleManualComplete={handleToggleManualComplete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

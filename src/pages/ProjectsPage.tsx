import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { getProjectSummary, getNextRecommendedProject, getLastTouchedProject } from "@/playground/projectProgressSummary";
import { Clock, BookOpen, CheckCircle2, Play, ArrowRight, Search } from "lucide-react";

export function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  // Obtener tags únicos
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Obtener proyecto recomendado y último tocado
  const nextRecommended = useMemo(() => getNextRecommendedProject(projects), []);
  const lastTouched = useMemo(() => getLastTouchedProject(projects), []);

  // Filtrar proyectos
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.size === 0 ||
        project.tags.some((tag) => selectedTags.has(tag));

      return matchesSearch && matchesTags;
    }).sort((a, b) => a.order - b.order);
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    const newSelected = new Set(selectedTags);
    if (newSelected.has(tag)) {
      newSelected.delete(tag);
    } else {
      newSelected.add(tag);
    }
    setSelectedTags(newSelected);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Proyectos</h1>
        <p className="text-lg text-neutral-500">
          Construye proyectos reales aplicando lo aprendido en las lecciones.
        </p>
      </div>

      {/* Header con búsqueda, filtros y bloque Continuar */}
      <div className="mb-8 space-y-6">
        {/* Búsqueda */}
        <Card className="border-neutral-200 rounded-[22px]">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Buscar proyecto…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Filtros por tags */}
        <Card className="border-neutral-200 rounded-[22px]">
          <CardHeader>
            <CardTitle className="text-lg">Filtrar por tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => {
                const isSelected = selectedTags.has(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-[12px] text-sm font-medium transition-colors ${
                      isSelected
                        ? "bg-accent-pink text-neutral-900 border border-accent-pink"
                        : "bg-white text-neutral-600 border border-neutral-200 hover:bg-accent-yellow"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Bloque Continuar */}
        {lastTouched ? (
          <Card className="border-accent-peach bg-accent-yellow/30 rounded-[22px]">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                Continuar donde lo dejaste
              </CardTitle>
              <CardDescription className="text-base">
                {lastTouched.title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="secondary" className="flex-1">
                  <Link to={`/project/${lastTouched.slug}/play`}>
                    <Play className="w-4 h-4 mr-2" />
                    Playground
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to={`/project/${lastTouched.slug}/brief`}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Brief
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-neutral-200 rounded-[22px]">
            <CardHeader>
              <CardTitle className="text-xl">Empieza por el Proyecto 1</CardTitle>
              <CardDescription>
                Comienza tu primer proyecto desde el principio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" size="lg">
                <Link to="/project/01-landing-personal/brief">
                  Empezar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Lista de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const summary = getProjectSummary(project);
          const isCompleted = summary.percentage === 100;
          const isRecommended = nextRecommended?.slug === project.slug && !isCompleted;

          return (
            <Card key={project.slug} className="hover:shadow-md transition-shadow border-neutral-200 rounded-[22px]">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Proyecto {project.order}</Badge>
                    {isRecommended && (
                      <Badge variant="outline" className="border-accent-green text-accent-green">
                        Siguiente
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-neutral-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{project.durationMin} min</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Progreso */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-600">
                      {summary.completedCount} / {summary.totalCount} retos
                    </span>
                    {isCompleted && (
                      <Badge variant="outline" className="border-accent-turquoise text-accent-turquoise">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Completado
                      </Badge>
                    )}
                  </div>
                  <Progress value={summary.percentage} />
                </div>

                {/* Botones */}
                <div className="flex gap-2">
                  <Link
                    to={`/project/${project.slug}/brief`}
                    className="flex-1"
                  >
                    <div className="flex items-center justify-center gap-2 px-4 py-2 border border-neutral-200 rounded-[16px] hover:bg-neutral-50 transition-colors text-sm">
                      <BookOpen className="w-4 h-4" />
                      Brief
                    </div>
                  </Link>
                  <Link
                    to={`/project/${project.slug}/play`}
                    className="flex-1"
                  >
                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-accent-green text-neutral-900 rounded-[16px] hover:opacity-90 transition-colors text-sm font-medium">
                      Playground
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mensaje si no hay resultados */}
      {filteredProjects.length === 0 && (
        <Card className="border-neutral-200 rounded-[22px]">
          <CardContent className="pt-6 text-center text-neutral-500">
            No se encontraron proyectos con los filtros seleccionados.
          </CardContent>
        </Card>
      )}
    </div>
  );
}

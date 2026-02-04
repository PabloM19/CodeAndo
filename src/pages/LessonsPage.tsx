import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { lessons } from "@/content/lessons";
import { getLessonSummary, getNextRecommendedLesson, getLastTouchedLesson } from "@/playground/progressSummary";
import { getAllLessonStats, getStreakDays, formatRelativeTime } from "@/playground/stats";
import { Clock, BookOpen, CheckCircle2, Play, ArrowRight, Search, Trophy, Flame, Target, Calendar } from "lucide-react";

type SortMode = "normal" | "recommended";

export function LessonsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [sortMode, setSortMode] = useState<SortMode>("normal");

  // Obtener tags únicos
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    lessons.forEach((lesson) => {
      lesson.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  // Obtener lección recomendada y última tocada
  const nextRecommended = useMemo(() => getNextRecommendedLesson(lessons), []);
  const lastTouched = useMemo(() => getLastTouchedLesson(lessons), []);

  // Obtener estadísticas
  const stats = useMemo(() => getAllLessonStats(lessons), []);
  const streak = useMemo(() => getStreakDays(lessons), []);

  // Filtrar y ordenar lecciones
  const filteredAndSortedLessons = useMemo(() => {
    let filtered = lessons.filter((lesson) => {
      // Filtro por texto (título)
      const matchesSearch =
        searchQuery === "" ||
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro por tags (OR: si no hay tags seleccionados, mostrar todas; si hay, mostrar las que tienen al menos uno)
      const matchesTags =
        selectedTags.size === 0 ||
        lesson.tags.some((tag) => selectedTags.has(tag));

      return matchesSearch && matchesTags;
    });

    // Ordenar
    if (sortMode === "recommended") {
      // Primero las no completadas, luego las completadas (manteniendo order dentro de cada grupo)
      filtered.sort((a, b) => {
        const summaryA = getLessonSummary(a);
        const summaryB = getLessonSummary(b);
        const isCompletedA = summaryA.percentage === 100;
        const isCompletedB = summaryB.percentage === 100;

        if (isCompletedA !== isCompletedB) {
          return isCompletedA ? 1 : -1; // No completadas primero
        }

        return a.order - b.order; // Mantener order dentro de cada grupo
      });
    } else {
      // Orden normal por order
      filtered.sort((a, b) => a.order - b.order);
    }

    return filtered;
  }, [searchQuery, selectedTags, sortMode]);

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
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Lecciones</h1>
        <p className="text-lg text-neutral-500">
          Aprende HTML y CSS paso a paso con teoría y práctica.
        </p>
      </div>

      {/* Header con búsqueda, filtros y bloque Continuar */}
      <div className="mb-8 space-y-6">
        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-neutral-200 rounded-[22px]">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-pink/30 rounded-[12px]">
                  <Trophy className="w-5 h-5 text-accent-pink" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-neutral-500 mb-1">Completadas</p>
                  <p className="text-lg font-semibold text-neutral-900">
                    {stats.completedLessons} / {stats.totalLessons}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 rounded-[22px]">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-peach/30 rounded-[12px]">
                  <Target className="w-5 h-5 text-accent-peach" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-neutral-500 mb-1">En progreso</p>
                  <p className="text-lg font-semibold text-neutral-900">
                    {stats.inProgressLessons}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 rounded-[22px]">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-green/30 rounded-[12px]">
                  <CheckCircle2 className="w-5 h-5 text-accent-green" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-neutral-500 mb-1">Retos</p>
                  <p className="text-lg font-semibold text-neutral-900">
                    {stats.totalChallengesCompleted} / {stats.totalChallenges}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 rounded-[22px]">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-yellow/30 rounded-[12px]">
                  <Flame className="w-5 h-5 text-accent-yellow" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-neutral-500 mb-1">Racha</p>
                  <p className="text-lg font-semibold text-neutral-900">
                    {streak} día{streak !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Última actividad */}
        {stats.lastActivityTimestamp && (
          <Card className="border-neutral-200 rounded-[22px]">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-turquoise/30 rounded-[12px]">
                  <Calendar className="w-5 h-5 text-accent-turquoise" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Última actividad</p>
                  <p className="text-base font-medium text-neutral-900">
                    {formatRelativeTime(stats.lastActivityTimestamp)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Búsqueda y orden */}
        <Card className="border-neutral-200 rounded-[22px]">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Búsqueda */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Buscar lección…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              {/* Toggle orden */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-500 whitespace-nowrap">Orden:</span>
                <div className="flex border border-neutral-200 rounded-[16px] overflow-hidden">
                  <button
                    onClick={() => setSortMode("normal")}
                    className={`px-4 py-2 text-sm transition-colors ${
                      sortMode === "normal"
                        ? "bg-accent-green text-neutral-900 font-medium"
                        : "bg-white text-neutral-600 hover:bg-accent-peach"
                    }`}
                  >
                    Normal
                  </button>
                  <button
                    onClick={() => setSortMode("recommended")}
                    className={`px-4 py-2 text-sm transition-colors border-l border-neutral-200 ${
                      sortMode === "recommended"
                        ? "bg-accent-green text-neutral-900 font-medium"
                        : "bg-white text-neutral-600 hover:bg-accent-peach"
                    }`}
                  >
                    Recomendado
                  </button>
                </div>
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
                  <Link to={`/lesson/${lastTouched.slug}/play`}>
                    <Play className="w-4 h-4 mr-2" />
                    Playground
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to={`/lesson/${lastTouched.slug}/theory`}>
                    <BookOpen className="w-4 h-4 mr-2" />
                    Teoría
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-neutral-200 rounded-[22px]">
            <CardHeader>
              <CardTitle className="text-xl">Empieza por la Lección 1</CardTitle>
              <CardDescription>
                Comienza tu aprendizaje desde el principio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="secondary" size="lg">
                <Link to="/lesson/01-html-base/play">
                  Empezar
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Lista de lecciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedLessons.map((lesson) => {
          const summary = getLessonSummary(lesson);
          const isCompleted = summary.percentage === 100;
          const isRecommended = nextRecommended?.slug === lesson.slug && !isCompleted;

          return (
            <Card key={lesson.slug} className="hover:shadow-md transition-shadow border-neutral-200 rounded-[22px]">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Lección {lesson.order}</Badge>
                    {isRecommended && (
                      <Badge variant="outline" className="border-accent-green text-accent-green">
                        Siguiente
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-neutral-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.durationMin} min</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{lesson.title}</CardTitle>
                <CardDescription className="mt-2">
                  <div className="flex flex-wrap gap-2">
                    {lesson.tags.map((tag) => (
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
                        Completada
                      </Badge>
                    )}
                  </div>
                  <Progress value={summary.percentage} />
                </div>

                {/* Botones */}
                <div className="flex gap-2">
                  <Link
                    to={`/lesson/${lesson.slug}/theory`}
                    className="flex-1"
                  >
                    <div className="flex items-center justify-center gap-2 px-4 py-2 border border-neutral-200 rounded-[16px] hover:bg-neutral-50 transition-colors text-sm">
                      <BookOpen className="w-4 h-4" />
                      Teoría
                    </div>
                  </Link>
                  <Link
                    to={`/lesson/${lesson.slug}/play`}
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
      {filteredAndSortedLessons.length === 0 && (
        <Card className="border-neutral-200 rounded-[22px]">
          <CardContent className="pt-6 text-center text-neutral-500">
            No se encontraron lecciones con los filtros seleccionados.
          </CardContent>
        </Card>
      )}
    </div>
  );
}

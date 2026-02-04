import type { Lesson } from "@/types/content";
import { lessons } from "./lessons";

/**
 * Obtiene una lección por su slug
 */
export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.slug === slug);
}

/**
 * Obtiene la lección anterior y siguiente basándose en el orden
 */
export function getPrevNext(slug: string): {
  prev?: Lesson;
  next?: Lesson;
} {
  const currentLesson = getLessonBySlug(slug);
  if (!currentLesson) {
    return {};
  }

  const sortedLessons = [...lessons].sort((a, b) => a.order - b.order);
  const currentIndex = sortedLessons.findIndex(
    (l) => l.slug === currentLesson.slug
  );

  return {
    prev: currentIndex > 0 ? sortedLessons[currentIndex - 1] : undefined,
    next:
      currentIndex < sortedLessons.length - 1
        ? sortedLessons[currentIndex + 1]
        : undefined,
  };
}

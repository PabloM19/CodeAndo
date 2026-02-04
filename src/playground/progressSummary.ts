import type { Lesson } from "@/types/content";
import { loadProgress } from "./storage";
import { getProgressPercentage } from "./storage";

export interface LessonSummary {
  completedCount: number;
  totalCount: number;
  percentage: number;
  lastUpdated?: number;
}

/**
 * Obtiene el resumen de progreso de una lección
 */
export function getLessonSummary(lesson: Lesson): LessonSummary {
  const progress = loadProgress(lesson.slug);
  const totalCount = lesson.challenges.length;

  if (!progress || !progress.completedChallenges) {
    return {
      completedCount: 0,
      totalCount,
      percentage: 0,
    };
  }

  const completedCount = progress.completedChallenges.length;
  const percentage = getProgressPercentage(progress.completedChallenges, totalCount);

  return {
    completedCount,
    totalCount,
    percentage,
    lastUpdated: progress.timestamp,
  };
}

/**
 * Obtiene la siguiente lección recomendada (primera no completada por orden)
 */
export function getNextRecommendedLesson(lessons: Lesson[]): Lesson | null {
  const sortedLessons = [...lessons].sort((a, b) => a.order - b.order);
  
  for (const lesson of sortedLessons) {
    const summary = getLessonSummary(lesson);
    if (summary.percentage < 100) {
      return lesson;
    }
  }

  // Si todas están completadas, retornar la primera
  return sortedLessons.length > 0 ? sortedLessons[0] : null;
}

/**
 * Obtiene la última lección tocada (con timestamp más reciente)
 */
export function getLastTouchedLesson(lessons: Lesson[]): Lesson | null {
  let lastLesson: Lesson | null = null;
  let latestTimestamp = 0;

  for (const lesson of lessons) {
    const progress = loadProgress(lesson.slug);
    if (progress?.timestamp && progress.timestamp > latestTimestamp) {
      latestTimestamp = progress.timestamp;
      lastLesson = lesson;
    }
  }

  return lastLesson;
}

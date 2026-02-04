import type { Lesson } from "@/types/content";
import { getLessonSummary } from "./progressSummary";

export interface AllLessonStats {
  totalLessons: number;
  completedLessons: number;
  inProgressLessons: number;
  notStartedLessons: number;
  totalChallengesCompleted: number;
  totalChallenges: number;
  lastActivityTimestamp: number | null;
}

/**
 * Obtiene estadísticas agregadas de todas las lecciones
 */
export function getAllLessonStats(lessons: Lesson[]): AllLessonStats {
  let completedLessons = 0;
  let inProgressLessons = 0;
  let notStartedLessons = 0;
  let totalChallengesCompleted = 0;
  let totalChallenges = 0;
  let lastActivityTimestamp: number | null = null;

  for (const lesson of lessons) {
    const summary = getLessonSummary(lesson);
    
    totalChallenges += summary.totalCount;
    totalChallengesCompleted += summary.completedCount;

    if (summary.percentage === 100) {
      completedLessons++;
    } else if (summary.percentage > 0) {
      inProgressLessons++;
    } else {
      notStartedLessons++;
    }

    if (summary.lastUpdated) {
      if (!lastActivityTimestamp || summary.lastUpdated > lastActivityTimestamp) {
        lastActivityTimestamp = summary.lastUpdated;
      }
    }
  }

  return {
    totalLessons: lessons.length,
    completedLessons,
    inProgressLessons,
    notStartedLessons,
    totalChallengesCompleted,
    totalChallenges,
    lastActivityTimestamp,
  };
}

/**
 * Calcula la racha de días consecutivos con actividad
 */
export function getStreakDays(lessons: Lesson[]): number {
  // Obtener todos los días con actividad (YYYY-MM-DD)
  const activeDays = new Set<string>();

  for (const lesson of lessons) {
    const progress = getLessonSummary(lesson);
    if (progress.lastUpdated) {
      const date = new Date(progress.lastUpdated);
      const dayKey = date.toISOString().split("T")[0]; // YYYY-MM-DD
      activeDays.add(dayKey);
    }
  }

  if (activeDays.size === 0) {
    return 0;
  }

  // Ordenar días de más reciente a más antiguo
  const sortedDays = Array.from(activeDays).sort().reverse();

  // Obtener fecha de hoy y ayer en formato YYYY-MM-DD
  const today = new Date();
  const todayKey = today.toISOString().split("T")[0];
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().split("T")[0];

  // Si hoy no hay actividad, empezar desde ayer
  let currentDay = sortedDays.includes(todayKey) ? todayKey : yesterdayKey;
  let streak = 0;
  let checkDate = new Date(currentDay);

  // Contar días consecutivos hacia atrás
  while (true) {
    const checkKey = checkDate.toISOString().split("T")[0];
    
    if (sortedDays.includes(checkKey)) {
      streak++;
      // Ir al día anterior
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      // Si no hay actividad en este día, la racha se rompe
      break;
    }
  }

  return streak;
}

/**
 * Formatea un timestamp relativo a "Hoy", "Ayer", "Hace N días"
 */
export function formatRelativeTime(timestamp: number | null): string {
  if (!timestamp) {
    return "Nunca";
  }

  const now = new Date();
  const date = new Date(timestamp);
  
  // Normalizar a medianoche para comparar días
  const nowMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dateMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  const diffMs = nowMidnight.getTime() - dateMidnight.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Hoy";
  } else if (diffDays === 1) {
    return "Ayer";
  } else if (diffDays < 7) {
    return `Hace ${diffDays} días`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `Hace ${weeks} semana${weeks > 1 ? "s" : ""}`;
  } else {
    const months = Math.floor(diffDays / 30);
    return `Hace ${months} mes${months > 1 ? "es" : ""}`;
  }
}

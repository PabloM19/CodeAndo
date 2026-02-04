import { loadProgress } from "./storage";
import { getProgressPercentage } from "./storage";

export interface ProgressSummary {
  completed: number;
  total: number;
  percentage: number;
}

/**
 * Obtiene el resumen de progreso de una lección desde localStorage
 */
export function getLessonProgressSummary(
  slug: string,
  totalChallenges: number
): ProgressSummary {
  const saved = loadProgress(slug);
  
  if (!saved || !saved.completedChallenges) {
    return {
      completed: 0,
      total: totalChallenges,
      percentage: 0,
    };
  }

  const completed = saved.completedChallenges.length;
  const percentage = getProgressPercentage(saved.completedChallenges, totalChallenges);

  return {
    completed,
    total: totalChallenges,
    percentage,
  };
}

import type { Project } from "@/types/projects";
import { loadProjectProgress } from "./projectStorage";
import { getProjectProgressPercentage } from "./projectStorage";

export interface ProjectSummary {
  completedCount: number;
  totalCount: number;
  percentage: number;
  lastUpdated?: number;
}

/**
 * Obtiene el resumen de progreso de un proyecto
 */
export function getProjectSummary(project: Project): ProjectSummary {
  const progress = loadProjectProgress(project.slug);
  const totalCount = project.challenges.length;

  if (!progress || !progress.completedChallenges) {
    return {
      completedCount: 0,
      totalCount,
      percentage: 0,
    };
  }

  const completedCount = progress.completedChallenges.length;
  const percentage = getProjectProgressPercentage(progress.completedChallenges, totalCount);

  return {
    completedCount,
    totalCount,
    percentage,
    lastUpdated: progress.timestamp,
  };
}

/**
 * Obtiene el siguiente proyecto recomendado (primera no completado por orden)
 */
export function getNextRecommendedProject(projects: Project[]): Project | null {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
  
  for (const project of sortedProjects) {
    const summary = getProjectSummary(project);
    if (summary.percentage < 100) {
      return project;
    }
  }

  // Si todos están completados, retornar el primero
  return sortedProjects.length > 0 ? sortedProjects[0] : null;
}

/**
 * Obtiene el último proyecto tocado (con timestamp más reciente)
 */
export function getLastTouchedProject(projects: Project[]): Project | null {
  let lastProject: Project | null = null;
  let latestTimestamp = 0;

  for (const project of projects) {
    const progress = loadProjectProgress(project.slug);
    if (progress?.timestamp && progress.timestamp > latestTimestamp) {
      latestTimestamp = progress.timestamp;
      lastProject = project;
    }
  }

  return lastProject;
}

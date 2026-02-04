import type { ProjectProgress } from "@/types/projects";

const STORAGE_PREFIX = "codeando:project:";

export function getProjectStorageKey(slug: string): string {
  return `${STORAGE_PREFIX}${slug}`;
}

export function loadProjectProgress(slug: string): ProjectProgress | null {
  try {
    const key = getProjectStorageKey(slug);
    const stored = localStorage.getItem(key);
    if (!stored) return null;
    return JSON.parse(stored) as ProjectProgress;
  } catch {
    return null;
  }
}

export function saveProjectProgress(slug: string, progress: ProjectProgress): void {
  try {
    const key = getProjectStorageKey(slug);
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (error) {
    console.error("Error saving project progress:", error);
  }
}

export function getProjectProgressPercentage(
  completedChallenges: string[],
  totalChallenges: number
): number {
  if (totalChallenges === 0) return 100;
  return Math.round((completedChallenges.length / totalChallenges) * 100);
}

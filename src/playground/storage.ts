import type { LessonProgress } from "@/types/content";

const STORAGE_PREFIX = "codeando:";

export function getStorageKey(slug: string): string {
  return `${STORAGE_PREFIX}${slug}`;
}

export function loadProgress(slug: string): LessonProgress | null {
  try {
    const key = getStorageKey(slug);
    const stored = localStorage.getItem(key);
    if (!stored) return null;
    return JSON.parse(stored) as LessonProgress;
  } catch {
    return null;
  }
}

export function saveProgress(slug: string, progress: LessonProgress): void {
  try {
    const key = getStorageKey(slug);
    localStorage.setItem(key, JSON.stringify(progress));
  } catch (error) {
    console.error("Error saving progress:", error);
  }
}

export function getProgressPercentage(
  completedChallenges: string[],
  totalChallenges: number
): number {
  if (totalChallenges === 0) return 100;
  return Math.round((completedChallenges.length / totalChallenges) * 100);
}

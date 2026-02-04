const TEACHER_MODE_KEY = "codeando:teacherMode";

/**
 * Carga el estado de modo profesor desde localStorage
 */
export function loadTeacherMode(): boolean {
  try {
    const saved = localStorage.getItem(TEACHER_MODE_KEY);
    return saved === "true";
  } catch {
    return false;
  }
}

/**
 * Guarda el estado de modo profesor en localStorage
 */
export function saveTeacherMode(enabled: boolean): void {
  try {
    localStorage.setItem(TEACHER_MODE_KEY, String(enabled));
  } catch (error) {
    console.error("Error saving teacher mode:", error);
  }
}

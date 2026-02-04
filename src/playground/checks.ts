import type { Challenge } from "@/types/content";

/**
 * Evalúa si un reto está completado
 */
export function evaluateChallenge(
  challenge: Challenge,
  html: string,
  css: string
): boolean {
  return challenge.checks.every((check) => {
    const content = check.type.startsWith("html_") ? html : css;
    
    switch (check.type) {
      case "html_includes":
      case "css_includes":
        return content.includes(check.value);
      
      case "html_regex":
      case "css_regex":
        try {
          const regex = new RegExp(check.value, "i");
          return regex.test(content);
        } catch {
          // Si el regex es inválido, falla
          return false;
        }
      
      default:
        return false;
    }
  });
}

/**
 * Evalúa todos los retos y retorna los IDs completados
 */
export function evaluateAllChallenges(
  challenges: Challenge[],
  html: string,
  css: string
): string[] {
  return challenges
    .filter((challenge) => evaluateChallenge(challenge, html, css))
    .map((challenge) => challenge.id);
}

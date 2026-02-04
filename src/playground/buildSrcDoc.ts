import { sanitizeHTML } from "./sanitize";

/**
 * Construye el srcdoc del iframe con HTML y CSS sanitizados
 */
export function buildSrcDoc(html: string, css: string): string {
  const sanitizedHTML = sanitizeHTML(html);
  const sanitizedCSS = css.replace(/<script/gi, ""); // Prevenir script injection en CSS
  
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: system-ui, sans-serif;
      padding: 1rem;
    }
    ${sanitizedCSS}
  </style>
</head>
<body>
  ${sanitizedHTML}
</body>
</html>`;
}

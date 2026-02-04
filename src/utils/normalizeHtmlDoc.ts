/**
 * Normaliza HTML para asegurar que sea un documento completo
 */
export function ensureHtmlDocument(html: string, lessonTitle: string): string {
  const lowerHtml = html.toLowerCase().trim();
  
  // Si ya tiene estructura completa (doctype, html, head, body)
  if (
    lowerHtml.includes("<!doctype") &&
    lowerHtml.includes("<html") &&
    lowerHtml.includes("<head") &&
    lowerHtml.includes("<body")
  ) {
    return html;
  }

  // Si tiene html/head/body pero falta doctype
  if (lowerHtml.includes("<html") && lowerHtml.includes("<head") && lowerHtml.includes("<body")) {
    return `<!DOCTYPE html>\n${html}`;
  }

  // Si solo tiene body, añadir estructura
  if (lowerHtml.includes("<body")) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${lessonTitle}</title>
  <link rel="stylesheet" href="styles.css" />
</head>
${html}
</html>`;
  }

  // Contenido suelto: envolver completamente
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${lessonTitle}</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
${html}
</body>
</html>`;
}

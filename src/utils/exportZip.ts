import JSZip from "jszip";
import { saveAs } from "file-saver";
import { ensureHtmlDocument } from "./normalizeHtmlDoc";

interface ExportLessonZipParams {
  lessonTitle: string;
  slug: string;
  html: string;
  css: string;
}

/**
 * Exporta una lección como ZIP con index.html, styles.css y README.txt
 */
export async function exportLessonZip({
  lessonTitle,
  slug,
  html,
  css,
}: ExportLessonZipParams): Promise<void> {
  try {
    const zip = new JSZip();

    // Normalizar HTML
    const normalizedHtml = ensureHtmlDocument(html, lessonTitle);

    // Añadir archivos al ZIP
    zip.file("index.html", normalizedHtml);
    zip.file("styles.css", css || "");
    zip.file(
      "README.txt",
      `Generado por CodeAndo con Helena
Lección: ${lessonTitle}
Fecha: ${new Date().toISOString()}
`
    );

    // Generar blob y descargar
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `codeando-${slug}.zip`);
  } catch (error) {
    console.error("Error exporting ZIP:", error);
    throw error;
  }
}

/**
 * Exporta un proyecto como ZIP con index.html, styles.css y README.txt
 */
export async function exportProjectZip({
  projectTitle,
  slug,
  html,
  css,
}: {
  projectTitle: string;
  slug: string;
  html: string;
  css: string;
}): Promise<void> {
  try {
    const zip = new JSZip();

    // Normalizar HTML
    const normalizedHtml = ensureHtmlDocument(html, projectTitle);

    // Añadir archivos al ZIP
    zip.file("index.html", normalizedHtml);
    zip.file("styles.css", css || "");
    zip.file(
      "README.txt",
      `Generado por CodeAndo con Helena
Proyecto: ${projectTitle}
Fecha: ${new Date().toISOString()}
`
    );

    // Generar blob y descargar
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `codeando-project-${slug}.zip`);
  } catch (error) {
    console.error("Error exporting project ZIP:", error);
    throw error;
  }
}

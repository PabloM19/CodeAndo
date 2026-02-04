import LZString from "lz-string";

export interface ShareData {
  html: string;
  css: string;
}

/**
 * Comprime y serializa datos para compartir por URL
 */
export function encodeShareData(data: ShareData): string {
  const json = JSON.stringify(data);
  return LZString.compressToEncodedURIComponent(json);
}

/**
 * Descomprime y deserializa datos de URL
 */
export function decodeShareData(encoded: string): ShareData | null {
  try {
    const json = LZString.decompressFromEncodedURIComponent(encoded);
    if (!json) return null;
    return JSON.parse(json) as ShareData;
  } catch {
    return null;
  }
}

/**
 * Obtiene datos compartidos de la URL
 */
export function getShareDataFromURL(): ShareData | null {
  const params = new URLSearchParams(window.location.search);
  const shareParam = params.get("s");
  if (!shareParam) return null;
  return decodeShareData(shareParam);
}

/**
 * Crea URL con datos compartidos
 */
export function createShareURL(baseURL: string, data: ShareData): string {
  const encoded = encodeShareData(data);
  return `${baseURL}?s=${encoded}`;
}

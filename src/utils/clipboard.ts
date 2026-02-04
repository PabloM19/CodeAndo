import { toast } from "sonner";

/**
 * Copia texto al portapapeles con manejo de errores y feedback toast
 */
export async function copyToClipboard(text: string, successMessage: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(successMessage);
    return true;
  } catch (error) {
    // Fallback para navegadores antiguos
    try {
      const input = document.createElement("input");
      input.value = text;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      toast.success(successMessage);
      return true;
    } catch (fallbackError) {
      toast.error("No se pudo copiar al portapapeles");
      return false;
    }
  }
}

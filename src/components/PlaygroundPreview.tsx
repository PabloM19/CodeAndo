import { useEffect, useRef } from "react";
import { buildSrcDoc } from "@/playground/buildSrcDoc";
import { Badge } from "@/components/ui/badge";

interface PlaygroundPreviewProps {
  html: string;
  css: string;
  viewportWidth: number | "full";
}

export function PlaygroundPreview({ html, css, viewportWidth }: PlaygroundPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;
    const srcDoc = buildSrcDoc(html, css);
    iframeRef.current.srcdoc = srcDoc;
  }, [html, css]);

  const getWidthLabel = () => {
    if (viewportWidth === "full") return "Full";
    if (viewportWidth === 360) return "Mobile";
    if (viewportWidth === 768) return "Tablet";
    if (viewportWidth === 1024) return "Desktop";
    return `${viewportWidth}px`;
  };

  const containerStyle =
    viewportWidth === "full"
      ? { width: "100%" }
      : {
          width: `${viewportWidth}px`,
          maxWidth: "100%",
        };

  return (
    <div className="h-full flex flex-col">
      {/* Badge con el modo actual - solo si no es full */}
      {viewportWidth !== "full" && (
        <div className="flex justify-center pb-2">
          <Badge variant="outline" className="text-xs">
            {getWidthLabel()} ({viewportWidth}px)
          </Badge>
        </div>
      )}
      {/* Contenedor del iframe */}
      <div className="flex-1 flex items-center justify-center overflow-auto">
        <div
          style={containerStyle}
          className={`border border-neutral-200 rounded-[22px] overflow-hidden bg-white shadow-sm transition-all ${
            viewportWidth !== "full" ? "mx-auto" : "w-full h-full"
          }`}
        >
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0"
            style={{ minHeight: viewportWidth === "full" ? "100%" : "400px" }}
            sandbox="allow-same-origin"
            title="Preview"
          />
        </div>
      </div>
    </div>
  );
}

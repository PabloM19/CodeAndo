import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PlaygroundEditorProps {
  html: string;
  css: string;
  onHTMLChange: (html: string) => void;
  onCSSChange: (css: string) => void;
}

export function PlaygroundEditor({
  html,
  css,
  onHTMLChange,
  onCSSChange,
}: PlaygroundEditorProps) {
  return (
    <div className="h-full flex flex-col">
      <Tabs defaultValue="html" className="flex-1 flex flex-col">
        <TabsList className="w-full">
          <TabsTrigger value="html" className="flex-1">
            HTML
          </TabsTrigger>
          <TabsTrigger value="css" className="flex-1">
            CSS
          </TabsTrigger>
        </TabsList>
        <TabsContent value="html" className="flex-1 mt-2">
          <textarea
            value={html}
            onChange={(e) => onHTMLChange(e.target.value)}
            className="w-full h-full p-4 font-mono text-sm border border-neutral-200 rounded-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
            placeholder="Escribe tu HTML aquí..."
            spellCheck={false}
          />
        </TabsContent>
        <TabsContent value="css" className="flex-1 mt-2">
          <textarea
            value={css}
            onChange={(e) => onCSSChange(e.target.value)}
            className="w-full h-full p-4 font-mono text-sm border border-neutral-200 rounded-[16px] resize-none focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2"
            placeholder="Escribe tu CSS aquí..."
            spellCheck={false}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Prose } from "@/components/Prose";
import { getLessonBySlug, getPrevNext } from "@/content/lessonUtils";
import { Play, ArrowLeft, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export function TheoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const lesson = getLessonBySlug(slug || "");
  const { prev, next } = getPrevNext(slug || "");

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Lección no encontrada</h1>
        <Link to="/lessons">
          <Button>Volver a lecciones</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-neutral-500">
          <li>
            <Link
              to="/lessons"
              className="hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 rounded-sm"
            >
              Lecciones
            </Link>
          </li>
          <li>/</li>
          <li>
            <span>Lección {lesson.order}</span>
          </li>
          <li>/</li>
          <li>
            <span className="text-neutral-900">Teoría</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-4">
          <Badge variant="secondary" className="mb-3">
            Lección {lesson.order}
          </Badge>
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">{lesson.title}</h1>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{lesson.durationMin} minutos</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {lesson.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Checklist */}
      {lesson.checklist.length > 0 && (
        <Card className="mb-8 border-neutral-200">
          <CardHeader>
            <CardTitle className="text-lg">Lo que aprenderás</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {lesson.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Teoría */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <Prose>
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1>{children}</h1>,
                h2: ({ children }) => <h2>{children}</h2>,
                h3: ({ children }) => <h3>{children}</h3>,
                h4: ({ children }) => <h4>{children}</h4>,
                p: ({ children }) => <p>{children}</p>,
                code: ({ children, className }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code>{children}</code>
                  ) : (
                    <pre>
                      <code>{children}</code>
                    </pre>
                  );
                },
                ul: ({ children }) => <ul>{children}</ul>,
                ol: ({ children }) => <ol>{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                a: ({ children, href }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
                strong: ({ children }) => <strong>{children}</strong>,
                em: ({ children }) => <em>{children}</em>,
              }}
            >
              {lesson.theoryMd}
            </ReactMarkdown>
          </Prose>
        </CardContent>
      </Card>

      {/* CTA y Navegación */}
      <div className="space-y-6">
        {/* CTA Principal */}
        <div className="flex justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link to={`/lesson/${lesson.slug}/play`}>
              <Play className="w-4 h-4 mr-2" />
              Abrir Playground
            </Link>
          </Button>
        </div>

        {/* Navegación Prev/Next */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          {prev ? (
            <Button asChild variant="outline">
              <Link to={`/lesson/${prev.slug}/theory`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </Link>
            </Button>
          ) : (
            <div />
          )}
          
          {next ? (
            <Button asChild variant="outline">
              <Link to={`/lesson/${next.slug}/theory`}>
                Siguiente
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

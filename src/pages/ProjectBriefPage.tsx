import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Prose } from "@/components/Prose";
import { getProjectBySlug, getPrevNextProject } from "@/content/projectUtils";
import { Play, ArrowLeft, ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export function ProjectBriefPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");
  const { prev, next } = getPrevNextProject(slug || "");

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
        <Link to="/projects">
          <Button>Volver a proyectos</Button>
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
              to="/projects"
              className="hover:text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
            >
              Proyectos
            </Link>
          </li>
          <li>/</li>
          <li>
            <span>Proyecto {project.order}</span>
          </li>
          <li>/</li>
          <li>
            <span className="text-neutral-900">Brief</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-4">
          <Badge variant="secondary" className="mb-3">
            Proyecto {project.order}
          </Badge>
          <h1 className="text-4xl font-bold text-neutral-900 mb-3">{project.title}</h1>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{project.durationMin} minutos</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Checklist */}
      {project.checklist.length > 0 && (
        <Card className="mb-8 border-neutral-200">
          <CardHeader>
            <CardTitle className="text-lg">Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.checklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Acceptance Criteria */}
      {project.acceptance.length > 0 && (
        <Card className="mb-8 border-neutral-200">
          <CardHeader>
            <CardTitle className="text-lg">Criterios de Aceptación</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {project.acceptance.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-neutral-700">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Brief */}
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
              {project.briefMd}
            </ReactMarkdown>
          </Prose>
        </CardContent>
      </Card>

      {/* CTA y Navegación */}
      <div className="space-y-6">
        {/* CTA Principal */}
        <div className="flex justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link to={`/project/${project.slug}/play`}>
              <Play className="w-4 h-4 mr-2" />
              Abrir Playground
            </Link>
          </Button>
        </div>

        {/* Navegación Prev/Next */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-neutral-200">
          {prev ? (
            <Button asChild variant="outline">
              <Link to={`/project/${prev.slug}/brief`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </Link>
            </Button>
          ) : (
            <div />
          )}
          
          {next ? (
            <Button asChild variant="outline">
              <Link to={`/project/${next.slug}/brief`}>
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

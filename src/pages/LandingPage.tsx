import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { landingContent } from "@/content/landing";
import { getLastTouchedLesson } from "@/playground/progressSummary";
import { getAllLessonStats, getStreakDays } from "@/playground/stats";
import { BookOpen, Play, ArrowRight, Flame, CheckCircle2 } from "lucide-react";
import { useMemo } from "react";
import { lessons } from "@/content/lessons";

export function LandingPage() {
  const lastTouched = useMemo(() => getLastTouchedLesson(lessons), []);
  const stats = useMemo(() => getAllLessonStats(lessons), []);
  const streak = useMemo(() => getStreakDays(lessons), []);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111] mb-4">
          {landingContent.heroTitle}
        </h1>
        <p className="text-xl text-[#6b7280] max-w-2xl mx-auto mb-8">
          {landingContent.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="secondary">
            <Link to="/lessons">{landingContent.ctaPrimary}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/lessons">{landingContent.ctaSecondary}</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landingContent.features.map((feature, idx) => (
            <Card key={idx} className="border-neutral-200 rounded-[22px]">
              <CardHeader>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-[#111] mb-8 text-center">
          Cómo funciona
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {landingContent.howItWorksSteps.map((step, idx) => (
            <Card key={idx} className="border-neutral-200 rounded-[22px]">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-neutral-900 font-bold ${
                    idx % 5 === 0 ? 'bg-accent-pink' :
                    idx % 5 === 1 ? 'bg-accent-peach' :
                    idx % 5 === 2 ? 'bg-accent-yellow' :
                    idx % 5 === 3 ? 'bg-accent-green' :
                    'bg-accent-turquoise'
                  }`}>
                    {idx + 1}
                  </div>
                </div>
                <CardTitle className="text-lg">{step}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Continuar */}
      {lastTouched && (
        <section className="mb-24">
          <Card className="border-accent-peach bg-accent-yellow/30 rounded-[22px]">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">
                Continúa donde lo dejaste
              </CardTitle>
              <CardDescription className="text-base">
                {lastTouched.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="secondary" size="lg" className="flex-1">
                  <Link to={`/lesson/${lastTouched.slug}/play`}>
                    <Play className="w-5 h-5 mr-2" />
                    Playground
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to={`/lesson/${lastTouched.slug}/theory`}>
                    <BookOpen className="w-5 h-5 mr-2" />
                    Teoría
                  </Link>
                </Button>
              </div>
              
              {/* Mini stats */}
              {(streak > 0 || stats.totalChallengesCompleted > 0) && (
                <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-200">
                  {streak > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-accent-peach/30 rounded-[8px]">
                        <Flame className="w-4 h-4 text-accent-peach" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">Racha</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {streak} día{streak !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  )}
                  {stats.totalChallengesCompleted > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-accent-turquoise/30 rounded-[8px]">
                        <CheckCircle2 className="w-4 h-4 text-accent-turquoise" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500">Retos completados</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {stats.totalChallengesCompleted} / {stats.totalChallenges}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      )}

      {/* Final CTA */}
      <section className="text-center">
        <Card className="bg-accent-yellow/20 border-accent-green rounded-[22px]">
          <CardHeader>
            <CardTitle className="text-2xl mb-2">
              {landingContent.finalCtaTitle}
            </CardTitle>
            <CardDescription className="text-base">
              {landingContent.finalCtaSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {lastTouched ? (
              <Button asChild size="lg" variant="secondary">
                <Link to="/lessons">{landingContent.finalCtaButton}</Link>
              </Button>
            ) : (
              <Button asChild size="lg" variant="secondary">
                <Link to="/lesson/01-html-base/play">
                  Empezar por Lección 1
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

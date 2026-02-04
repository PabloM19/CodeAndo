import { useState } from "react";
import type { Challenge } from "@/types/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, HelpCircle, ChevronDown, ChevronUp, Eye, Check } from "lucide-react";
import { evaluateChallenge, evaluateAllChallenges } from "@/playground/checks";
import { getProgressPercentage } from "@/playground/storage";
import { loadTeacherMode } from "@/utils/teacherMode";

interface ChallengeListProps {
  challenges: Challenge[];
  html: string;
  css: string;
  manualCompletedChallenges?: string[];
  onToggleManualComplete?: (challengeId: string) => void;
}

export function ChallengeList({
  challenges,
  html,
  css,
  manualCompletedChallenges = [],
  onToggleManualComplete,
}: ChallengeListProps) {
  const [expandedHints, setExpandedHints] = useState<Set<string>>(new Set());
  const [expandedChecks, setExpandedChecks] = useState<Set<string>>(new Set());
  const teacherMode = loadTeacherMode();

  const toggleHint = (id: string) => {
    const newExpanded = new Set(expandedHints);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedHints(newExpanded);
  };

  const toggleChecks = (id: string) => {
    const newExpanded = new Set(expandedChecks);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedChecks(newExpanded);
  };

  // Evaluar retos y combinar con overrides manuales
  const evaluatedChallenges = evaluateAllChallenges(challenges, html, css);
  const allCompleted = new Set([
    ...evaluatedChallenges,
    ...manualCompletedChallenges,
  ]);
  const completedChallenges = Array.from(allCompleted);
  const completedCount = completedChallenges.length;
  const percentage = getProgressPercentage(completedChallenges, challenges.length);

  return (
    <div className="space-y-4">
      {/* Header con progreso */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">Retos</h2>
          <Badge variant="default">
            {completedCount} / {challenges.length}
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <span>{percentage}%</span>
          <Progress value={percentage} className="flex-1" />
        </div>
      </div>

      {/* Lista de retos */}
      <div className="space-y-3">
        {challenges.map((challenge) => {
          const isEvaluated = evaluateChallenge(challenge, html, css);
          const isManuallyCompleted = manualCompletedChallenges.includes(challenge.id);
          const isCompleted = isEvaluated || isManuallyCompleted;
          const isHintExpanded = expandedHints.has(challenge.id);
          const isChecksExpanded = expandedChecks.has(challenge.id);

          return (
            <Card key={challenge.id} className={isCompleted ? "border-accent-green" : ""}>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-accent-green" />
                    ) : (
                      <Circle className="w-5 h-5 text-neutral-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-sm font-medium">
                      {challenge.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-2">
                {/* Botón ver pista */}
                <button
                  onClick={() => toggleHint(challenge.id)}
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors w-full"
                >
                  <HelpCircle className="w-4 h-4" />
                  <span>Ver pista</span>
                  {isHintExpanded ? (
                    <ChevronUp className="w-4 h-4 ml-auto" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  )}
                </button>
                {isHintExpanded && (
                  <div className="pt-2 border-t border-neutral-200">
                    <p className="text-sm text-neutral-500">{challenge.hint}</p>
                  </div>
                )}

                {/* Modo profesor: Ver checks */}
                {teacherMode && (
                  <>
                    <button
                      onClick={() => toggleChecks(challenge.id)}
                      className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors w-full"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver checks</span>
                      {isChecksExpanded ? (
                        <ChevronUp className="w-4 h-4 ml-auto" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-auto" />
                      )}
                    </button>
                    {isChecksExpanded && (
                      <div className="pt-2 border-t border-neutral-200">
                        <div className="space-y-2">
                          {challenge.checks.map((check, idx) => (
                            <div
                              key={idx}
                              className="text-xs font-mono bg-neutral-50 p-2 rounded-[12px] border border-neutral-200"
                            >
                              <div className="text-neutral-600 mb-1">
                                Tipo: <span className="font-semibold">{check.type}</span>
                              </div>
                              <div className="text-neutral-900 break-all">
                                {check.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Botón marcar como hecho */}
                    {onToggleManualComplete && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onToggleManualComplete(challenge.id)}
                        className="w-full mt-2"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        {isManuallyCompleted ? "Desmarcar como hecho" : "Marcar como hecho"}
                      </Button>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

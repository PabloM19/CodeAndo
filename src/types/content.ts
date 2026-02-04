export interface Challenge {
  id: string;
  title: string;
  hint: string;
  checks: {
    type: 'html_includes' | 'css_includes' | 'html_regex' | 'css_regex';
    value: string;
  }[];
}

export interface Lesson {
  slug: string;
  title: string;
  order: number;
  durationMin: number;
  tags: string[];
  theoryMd: string;
  checklist: string[];
  challenges: Challenge[];
  starter: {
    html: string;
    css: string;
  };
  solution: {
    html: string;
    css: string;
  };
}

export interface LessonProgress {
  html: string;
  css: string;
  completedChallenges: string[];
  manualCompletedChallenges?: string[]; // Overrides manuales en modo profesor
  timestamp: number;
}

export interface ProjectChallenge {
  id: string;
  title: string;
  hint: string;
  checks: {
    type: 'html_includes' | 'css_includes' | 'html_regex' | 'css_regex';
    value: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  order: number;
  durationMin: number;
  tags: string[];
  briefMd: string;
  checklist: string[];
  acceptance: string[];
  challenges: ProjectChallenge[];
  starter: {
    html: string;
    css: string;
  };
  solution: {
    html: string;
    css: string;
  };
}

export interface ProjectProgress {
  html: string;
  css: string;
  completedChallenges: string[];
  manualCompletedChallenges?: string[]; // Overrides manuales en modo profesor
  timestamp: number;
}

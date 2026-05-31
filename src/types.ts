export interface Milestone {
  id: string;
  year: string;
  title: string;
  eraId: string;
  description: string;
  details?: string;
  impactScore: number; // 1 to 5 stars for visual highlighting
  tags: string[];
  imagePrompt?: string; // Descriptive prompt for design/visuals
}

export interface Era {
  id: string;
  title: string;
  timeRange: string;
  description: string;
  accentColor: string; // Tailwind class border/text modifier prefix
  bgGradient: string;  // Tailwind gradient styling
}

export interface Pioneer {
  id: string;
  name: string;
  period: string;
  title: string;
  biography: string;
  keyContributions: string[];
  famousQuote?: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  eraContext: string;
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  pageRange: string;
  description: string;
  scholars: string[];
  coreKeywords: string[];
  lectureHighlights: string[];
  googleFormColor?: string;
}

export interface Scholar {
  id: string;
  name: string;
  enName: string;
  period?: string;
  majorTheory: string;
  coreConcepts: string[];
  relatedChapters: number[];
  description: string;
  quoteOrSignature?: string;
}

export interface Question {
  id: string;
  chapterId: number;
  scholarId?: string;
  topic: string;
  questionText: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  examSource: string; // e.g., '112年教育部教師資格考試'
  handoutRef: string; // e.g., '講義第4章 p.35-36'
  difficulty?: '基礎' | '中等' | '進階';
}

export interface QuizSubmission {
  chapterId: number;
  timestamp: number;
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  score: number;
  totalQuestions: number;
  percentage: number;
}

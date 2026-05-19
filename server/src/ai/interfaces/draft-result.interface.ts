export interface DraftResult {
  channel: 'newsletter' | 'linkedin' | 'twitter' | 'internal';
  titulo: string;
  summary: string;
  imagePrompt?: string;
}

export interface GeneratedDraft {
  title: string;
  summary: string;
}

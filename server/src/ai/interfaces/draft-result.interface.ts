export interface DraftResult {
  channel: 'newsletter' | 'linkedin' | 'twitter' | 'internal';
  summary: string;
  imagePrompt?: string;
}

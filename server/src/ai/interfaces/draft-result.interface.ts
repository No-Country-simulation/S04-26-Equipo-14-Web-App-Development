/*export interface DraftResult {
  channel: 'newsletter' | 'linkedin' | 'twitter' | 'internal';
  titulo: string;
  summary: string;
  imagePrompt?: string;
}

export interface GeneratedDraft {
  title: string;
  summary: string;
}
*/
export interface DraftResult {
  channel: 'newsletter' | 'linkedin' | 'twitter' | 'internal';
  titulo: string;
  summary: string;
  imagePrompt?: string;
  sourceCommunity?: 'stackoverflow' | 'linkedin';
}

export interface GeneratedDraft {
  title: string;
  summary: string;
}

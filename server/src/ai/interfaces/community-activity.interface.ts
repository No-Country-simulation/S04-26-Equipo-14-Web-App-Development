import { JsonValue } from '@prisma/client/runtime/library';

export interface CommunityActivity {
  id: string;
  title?: string;
  content: string;
  answers?: JsonValue | null;
  comments?: JsonValue | null;
  tags?: string[];
  authorName: string;
  sourceCommunity: string;
  likes: number;
  relevanceScore: number;
  postDate: Date;
}

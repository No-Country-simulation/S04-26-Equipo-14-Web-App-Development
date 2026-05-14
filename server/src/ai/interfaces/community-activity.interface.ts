export interface CommunityActivity {
  id: string;
  title?: string;
  content: string;
  authorName: string;
  sourceCommunity: string;
  likes: number;
  commentsCount: number;
  relevanceScore: number;
  createdAt: Date;
}

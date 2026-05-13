export interface CommunityActivity {
  id: string;
  title?: string;
  content: string;
  answers?: any[];
  comments?: any[];
  tags?: string[];
  authorName: string;
  sourceCommunity: string;
  likes: number;
  commentsCount: number;
  relevanceScore: number;
  post_date: Date;
}

import { CommunityActivity } from '../../ai/interfaces/community-activity.interface';

export class StackoverflowMapper {
  static toCommunityActivity(raw: any): CommunityActivity {
    const views = raw.view_count ?? 0;
    const votes = raw.score ?? 0;
    const answers = raw.answer_count ?? 0;

    // Ranking híbrido simple
    const relevanceScore = votes * 3 + answers * 5 + Math.min(views / 100, 50);

    return {
      id: String(raw.question_id),
      title: raw.title,
      content: raw.body_markdown ?? raw.body ?? raw.title,
      authorName: raw.owner?.display_name ?? 'Unknown',
      sourceCommunity: 'stackoverflow',
      likes: votes,
      commentsCount: answers,
      relevanceScore,
      createdAt: new Date(raw.creation_date * 1000),
    };
  }
}

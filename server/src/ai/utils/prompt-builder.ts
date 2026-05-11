import { CommunityActivity } from '../interfaces/community-activity.interface';
import { AiAnalysisResult } from '../interfaces/ai-analysis-result.interface';

export class PromptBuilder {
  static buildPostsContext(posts: CommunityActivity[]): string {
    return posts
      .map(
        (post) => `
ID: ${post.id}
Author: ${post.authorName}
Source: ${post.sourceCommunity}
Likes: ${post.likes}
Comments: ${post.commentsCount}
Relevance Score: ${post.relevanceScore}

Content:
${post.content}
`,
      )
      .join('\n----------------------\n');
  }

  static buildAnalysisContext(analysis: AiAnalysisResult): string {
    return `
Title: ${analysis.title}

Summary:
${analysis.summary}

Key Topics:
${analysis.keyTopics.join(', ')}

Highlights:
${analysis.highlights.join('\n- ')}
`;
  }
}

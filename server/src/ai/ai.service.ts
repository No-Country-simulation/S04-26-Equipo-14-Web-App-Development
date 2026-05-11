import { Injectable } from '@nestjs/common';

import { GroqProvider } from './provaiders/groq.provider';

import { CommunityActivity } from './interfaces/community-activity.interface';
import { AiAnalysisResult } from './interfaces/ai-analysis-result.interface';
import { DraftResult } from './interfaces/draft-result.interface';

import { PromptBuilder } from './utils/prompt-builder';

import { ANALYZE_POSTS_PROMPT } from './prompts/analyze-posts.prompt';
import { GENERATE_NEWSLETTER_PROMPT } from './prompts/generate-newsletter.prompt';
import { GENERATE_LINKEDIN_PROMPT } from './prompts/generate-linkedin.prompt';
import { GENERATE_TWITTER_PROMPT } from './prompts/generate-twitter.prompt';

@Injectable()
export class AiService {
  constructor(private readonly groqProvider: GroqProvider) {}

  async analyzePosts(posts: CommunityActivity[]): Promise<AiAnalysisResult> {
    const userPrompt = PromptBuilder.buildPostsContext(posts);

    return this.groqProvider.generateStructuredOutput<AiAnalysisResult>(
      ANALYZE_POSTS_PROMPT,
      userPrompt,
    );
  }

  async generateDrafts(analysis: AiAnalysisResult): Promise<DraftResult[]> {
    const context = PromptBuilder.buildAnalysisContext(analysis);

    const newsletter = await this.groqProvider.generateText(
      GENERATE_NEWSLETTER_PROMPT,
      context,
    );

    const linkedin = await this.groqProvider.generateText(
      GENERATE_LINKEDIN_PROMPT,
      context,
    );

    const twitter = await this.groqProvider.generateText(
      GENERATE_TWITTER_PROMPT,
      context,
    );

    return [
      {
        channel: 'newsletter',
        summary: newsletter,
      },
      {
        channel: 'linkedin',
        summary: linkedin,
      },
      {
        channel: 'twitter',
        summary: twitter,
      },
    ];
  }

  async analyzeAndGenerate(posts: CommunityActivity[]): Promise<{
    analysis: AiAnalysisResult;
    drafts: DraftResult[];
  }> {
    const analysis = await this.analyzePosts(posts);
    const drafts = await this.generateDrafts(analysis);

    return {
      analysis,
      drafts,
    };
  }
}

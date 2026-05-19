import { Injectable } from '@nestjs/common';

import { GroqProvider } from './provaiders/groq.provider';

import { CommunityActivity } from './interfaces/community-activity.interface';
import { AiAnalysisResult } from './interfaces/ai-analysis-result.interface';
import { DraftResult, GeneratedDraft } from './interfaces/draft-result.interface';

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

    const newsletter =
      await this.groqProvider.generateStructuredOutput<GeneratedDraft>(
        GENERATE_NEWSLETTER_PROMPT,
        context,
      );

    const linkedin =
      await this.groqProvider.generateStructuredOutput<GeneratedDraft>(
        GENERATE_LINKEDIN_PROMPT,
        context,
      );

    const twitter =
      await this.groqProvider.generateStructuredOutput<GeneratedDraft>(
        GENERATE_TWITTER_PROMPT,
        context,
      );

    return [
      {
        channel: 'newsletter',
        titulo: newsletter.title,
        summary: newsletter.summary,
      },
      {
        channel: 'linkedin',
        titulo: linkedin.title,
        summary: linkedin.summary,
      },
      {
        channel: 'twitter',
        titulo: twitter.title,
        summary: twitter.summary,
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
  async rewriteDraft(content: string, instruction: string): Promise<string> {
    const systemPrompt = `
You are an expert technical content editor.

Rewrite the provided content according to the editor instruction.

Preserve the main ideas and improve the text as requested.
Return only the rewritten content.
`;

    const userPrompt = `
EDITOR INSTRUCTION:
${instruction}

ORIGINAL CONTENT:
${content}
`;

    return this.groqProvider.generateText(systemPrompt, userPrompt);
  }
}

import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { LlmProvider } from './llm-provider.interface';

@Injectable()
export class OpenAiProvider implements LlmProvider {
  private readonly client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateStructuredOutput<T>(
    systemPrompt: string,
    userPrompt: string,
  ): Promise<T> {
    const response = await this.client.chat.completions.create({
      model: 'gpt-5-mini',
      response_format: { type: 'json_object' },
      temperature: 0.3,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    });

    const content = response.choices[0]?.message?.content ?? '{}';
    return JSON.parse(content) as T;
  }

  async generateText(
    systemPrompt: string,
    userPrompt: string,
  ): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: 'gpt-5-mini',
      temperature: 0.5,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    });

    return response.choices[0]?.message?.content ?? '';
  }
}

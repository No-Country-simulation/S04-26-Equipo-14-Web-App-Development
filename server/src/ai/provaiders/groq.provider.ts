import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { LlmProvider } from './llm-provider.interface';

@Injectable()
export class GroqProvider implements LlmProvider {
  private readonly client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: 'https://api.groq.com/openai/v1',
    });
  }

  async generateStructuredOutput<T>(
    systemPrompt: string,
    userPrompt: string,
  ): Promise<T> {
    const response = await this.client.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      temperature: 0.3,
      response_format: {
        type: 'json_object',
      },
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userPrompt,
        },
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
      model: 'llama-3.3-70b-versatile',
      temperature: 0.5,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: userPrompt,
        },
      ],
    });

    return response.choices[0]?.message?.content ?? '';
  }
}

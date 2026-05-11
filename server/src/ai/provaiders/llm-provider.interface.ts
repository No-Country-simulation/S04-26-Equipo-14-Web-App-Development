export interface LlmProvider {
  generateStructuredOutput<T>(
    systemPrompt: string,
    userPrompt: string,
  ): Promise<T>;
}

import { Injectable, Logger } from '@nestjs/common';
import { StackoverflowService } from '../integrations/stackoverflow/stackoverflow.service';
import { AiService } from '../ai/ai.service';
import { DraftsService } from '../drafts/drafts.service';
import { PipelineRunsService } from '../pipeline/pipeline-runs.service';

@Injectable()
export class PipelineService {
  private readonly logger = new Logger(PipelineService.name);

  constructor(
    private readonly stackoverflowService: StackoverflowService,
    private readonly aiService: AiService,
    private readonly draftsService: DraftsService,
    private readonly pipelineRunsService: PipelineRunsService,
  ) {}

  async executeWeeklyPipeline(): Promise<void> {
    this.logger.log('Starting weekly content pipeline...');

    // 1. Obtener posts relevantes de Stack Overflow
    const posts = await this.stackoverflowService.fetchWeeklyTopPosts();
    this.logger.log(`Posts fetched: ${posts.length}`);

    if (!posts.length) {
      this.logger.warn('No posts found. Pipeline aborted.');
      return;
    }

    // 2. Crear registro de ejecución del pipeline
    const weekLabel = this.getCurrentWeekLabel();

    const pipelineRun =
      await this.pipelineRunsService.createPendingRun(weekLabel);

    try {
      // 3. Analizar posts y generar drafts
      const { analysis, drafts } =
        await this.aiService.analyzeAndGenerate(posts);

      this.logger.log(`Analysis generated: ${analysis.title}`);

      // 4. Guardar drafts en base de datos
      await this.draftsService.saveDrafts(pipelineRun.id, drafts);

      // 5. Marcar ejecución como completada
      await this.pipelineRunsService.markAsCompleted(pipelineRun.id, 'groq');

      this.logger.log('Weekly pipeline completed successfully.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';

      // 6. Marcar ejecución como fallida
      await this.pipelineRunsService.markAsFailed(pipelineRun.id, message);

      this.logger.error('Pipeline execution failed.', message);
      throw error;
    }
  }

  private getCurrentWeekLabel(): string {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, '0');
    const day = String(now.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { StackoverflowService } from '../integrations/stackoverflow/stackoverflow.service';
import { AiService } from '../ai/ai.service';
import { DraftsService } from '../drafts/drafts.service';
import { PipelineRunsService } from '../pipeline/pipeline-runs.service';
import { PostsService } from 'src/posts/posts.service';
import { LinkedinService } from '../integrations/linkedin/linkedin.service';

@Injectable()
export class PipelineService {
  private readonly logger = new Logger(PipelineService.name);

  constructor(
    private readonly stackoverflowService: StackoverflowService,
    private readonly linkedinService: LinkedinService,
    private readonly aiService: AiService,
    private readonly draftsService: DraftsService,
    private readonly pipelineRunsService: PipelineRunsService,
    private readonly postsService: PostsService,
  ) {}

  async executeWeeklyPipeline(): Promise<void> {
    this.logger.log('Starting weekly content pipeline...');

    // 1. Obtener posts de Stack Overflow
    let stackoverflowPosts =
      await this.stackoverflowService.fetchWeeklyTopPosts();

    // Guardar y recalcular relevancia
    await this.postsService.savePosts(stackoverflowPosts);

    // Recuperar los 5 posts más relevantes
    stackoverflowPosts = await this.postsService.getTopPosts(5);

    // 2. Obtener posts de LinkedIn
    const linkedinPosts = await this.linkedinService.fetchWeeklyTopPosts();

    this.logger.log(
      `Posts fetched: ${stackoverflowPosts.length} from Stack Overflow, ${linkedinPosts.length} from LinkedIn`,
    );

    // Validar que al menos exista contenido en alguna fuente
    if (!stackoverflowPosts.length && !linkedinPosts.length) {
      this.logger.warn('No posts found. Pipeline aborted.');
      return;
    }

    // 3. Crear registro de ejecución del pipeline
    const weekLabel = this.getCurrentWeekLabel();

    const pipelineRun =
      await this.pipelineRunsService.createPendingRun(weekLabel);

    try {
      // ==========================================================
      // PROCESAR STACK OVERFLOW
      // ==========================================================
      if (stackoverflowPosts.length) {
        this.logger.log('Generating drafts from Stack Overflow posts...');

        const { analysis, drafts } =
          await this.aiService.analyzeAndGenerate(stackoverflowPosts);

        this.logger.log(`Stack Overflow analysis generated: ${analysis.title}`);

        // Agregar sourceCommunity a cada draft
        const draftsWithSource = drafts.map((draft) => ({
          ...draft,
          sourceCommunity: 'stackoverflow' as const,
        }));

        // Guardar drafts
        await this.draftsService.saveDrafts(pipelineRun.id, draftsWithSource);

        this.logger.log(
          `Saved ${draftsWithSource.length} Stack Overflow drafts.`,
        );
      }

      // ==========================================================
      // PROCESAR LINKEDIN
      // ==========================================================
      if (linkedinPosts.length) {
        this.logger.log('Generating drafts from LinkedIn posts...');

        const { analysis, drafts } =
          await this.aiService.analyzeAndGenerate(linkedinPosts);

        this.logger.log(`LinkedIn analysis generated: ${analysis.title}`);

        // Agregar sourceCommunity a cada draft
        const draftsWithSource = drafts.map((draft) => ({
          ...draft,
          sourceCommunity: 'linkedin' as const,
        }));

        // Guardar drafts
        await this.draftsService.saveDrafts(pipelineRun.id, draftsWithSource);

        this.logger.log(`Saved ${draftsWithSource.length} LinkedIn drafts.`);
      }

      // 4. Marcar ejecución como completada
      await this.pipelineRunsService.markAsCompleted(pipelineRun.id, 'groq');

      this.logger.log('Weekly pipeline completed successfully.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';

      // 5. Marcar ejecución como fallida
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

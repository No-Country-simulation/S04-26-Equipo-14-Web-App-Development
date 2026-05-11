import { Injectable } from '@nestjs/common';
import { StackoverflowService } from '../integrations/stackoverflow/stackoverflow.service';
import { AiService } from '../ai/ai.service';
import { DraftsService } from '../drafts/drafts.service';

@Injectable()
export class PipelineService {
  constructor(
    private readonly stackoverflowService: StackoverflowService,
    private readonly aiService: AiService,
    private readonly draftsService: DraftsService,
  ) {}
  /*
  async executeWeeklyPipeline(): Promise<void> {
    const posts = await this.stackoverflowService.fetchWeeklyTopPosts();

    const { analysis, drafts } = await this.aiService.analyzeAndGenerate(posts);

    console.log('Analysis generated:', analysis.title);

    // TODO: crear pipeline_run y obtener id real
    const pipelineRunId = 'pending-pipeline-run-id';

    await this.draftsService.saveDrafts(pipelineRunId, drafts);
  }*/
  async executeWeeklyPipeline(): Promise<void> {
    const posts = await this.stackoverflowService.fetchWeeklyTopPosts();

    console.log('Posts obtenidos:', posts.length);
    console.log(JSON.stringify(posts, null, 2));

    // Detenemos la ejecución para probar únicamente la integración
    return;
  }
}

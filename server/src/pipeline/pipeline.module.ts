import { Module } from '@nestjs/common';
import { PipelineService } from './pipeline.service';
import { StackoverflowModule } from '../integrations/stackoverflow/stackoverflow.module';
import { AiModule } from '../ai/ai.module';
import { DraftsModule } from '../drafts/drafts.module';
import { PipelineRunsService } from './pipeline-runs.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [StackoverflowModule, AiModule, DraftsModule, PrismaModule],
  providers: [PipelineService, PipelineRunsService],
  exports: [PipelineService, PipelineRunsService],
})
export class PipelineModule {}

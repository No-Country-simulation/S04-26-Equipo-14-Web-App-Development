import { Module } from '@nestjs/common';
import { PipelineService } from './pipeline.service';
import { PipelineProcessor } from './pipeline.processor';
import { AiModule } from '../ai/ai.module';
import { DraftsModule } from '../drafts/drafts.module';
import { StackoverflowModule } from '../integrations/stackoverflow/stackoverflow.module';

@Module({
  imports: [AiModule, DraftsModule, StackoverflowModule],
  providers: [PipelineService, PipelineProcessor],
  exports: [PipelineService],
})
export class PipelineModule {}

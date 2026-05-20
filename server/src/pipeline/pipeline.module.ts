import { Module } from '@nestjs/common';
import { PipelineService } from './pipeline.service';
import { StackoverflowModule } from '../integrations/stackoverflow/stackoverflow.module';
import { AiModule } from '../ai/ai.module';
import { DraftsModule } from '../drafts/drafts.module';
import { PipelineRunsService } from './pipeline-runs.service';
import { PrismaModule } from '../prisma/prisma.module';
import { LinkedinModule } from '../integrations/linkedin/linkedin.module';
import { PostsModule } from 'src/posts/posts.module';
import { PipelineController } from './pipeline.controller';

@Module({
  imports: [
    StackoverflowModule,
    AiModule,
    DraftsModule,
    PrismaModule,
    LinkedinModule,
    PostsModule,
  ],
  providers: [PipelineService, PipelineRunsService],
  exports: [PipelineService, PipelineRunsService],
  controllers: [PipelineController],
})
export class PipelineModule {}

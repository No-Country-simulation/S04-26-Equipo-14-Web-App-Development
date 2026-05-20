import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AiModule } from './ai/ai.module';
import { DraftsModule } from './drafts/drafts.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { PostsModule } from './posts/posts.module';
import { LinkedinModule } from './integrations/linkedin/linkedin.module';

@Module({
  imports: [
    PrismaModule,
    AiModule,
    DraftsModule,
    PipelineModule,
    SchedulerModule,
    PostsModule,
    LinkedinModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AiModule } from './ai/ai.module';
import { DraftsModule } from './drafts/drafts.module';
import { PipelineModule } from './pipeline/pipeline.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [
    PrismaModule,
    AiModule,
    DraftsModule,
    PipelineModule,
    SchedulerModule,
  ],
})
export class AppModule {}

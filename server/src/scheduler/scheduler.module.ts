import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { WeeklyDigestCron } from './weekly-digest.cron';
import { PipelineModule } from '../pipeline/pipeline.module';

@Module({
  imports: [ScheduleModule.forRoot(), PipelineModule],
  providers: [WeeklyDigestCron],
})
export class SchedulerModule {}

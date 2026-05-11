import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PipelineService } from '../pipeline/pipeline.service';

@Injectable()
export class WeeklyDigestCron {
  constructor(private readonly pipelineService: PipelineService) {}

  @Cron('0 23 * * 5')
  async handleCron(): Promise<void> {
    await this.pipelineService.executeWeeklyPipeline();
  }
}

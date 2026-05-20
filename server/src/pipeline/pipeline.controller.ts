import { Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { PipelineService } from './pipeline.service';

@Controller('pipeline')
export class PipelineController {
  constructor(private readonly pipelineService: PipelineService) {}

  @Post('run')
  async runPipeline() {
    try {
      await this.pipelineService.executeWeeklyPipeline();

      return {
        success: true,
        message: 'Pipeline executed successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException({
        success: false,
        message: 'Pipeline execution failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
}

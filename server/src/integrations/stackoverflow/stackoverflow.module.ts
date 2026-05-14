import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StackoverflowService } from './stackoverflow.service';

@Module({
  imports: [HttpModule],
  providers: [StackoverflowService],
  exports: [StackoverflowService],
})
export class StackoverflowModule {}

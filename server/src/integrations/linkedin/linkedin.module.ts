import { Module } from '@nestjs/common';
import { LinkedinService } from './linkedin.service';
import { LinkedinMapper } from './linkedin.mapper';

@Module({
  providers: [LinkedinService, LinkedinMapper],
  exports: [LinkedinService],
})
export class LinkedinModule {}

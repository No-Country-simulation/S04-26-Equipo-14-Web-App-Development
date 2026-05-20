import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { LinkedinService } from './linkedin.service';
import { LinkedinMapper } from './linkedin.mapper';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [LinkedinService, LinkedinMapper],
  exports: [LinkedinService],
})
export class LinkedinModule {}

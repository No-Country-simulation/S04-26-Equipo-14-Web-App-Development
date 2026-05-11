import { Module } from '@nestjs/common';

import { AiService } from './ai.service';
import { GroqProvider } from './provaiders/groq.provider';

@Module({
  providers: [AiService, GroqProvider],
  exports: [AiService],
})
export class AiModule {}

import { Module } from '@nestjs/common';
import { DraftsService } from './drafts.service';
import { PrismaModule } from '../prisma/prisma.module';
import { DraftsController } from './drafts.controller';

@Module({
  imports: [PrismaModule],
  providers: [DraftsService],
  exports: [DraftsService],
  controllers: [DraftsController],
})
export class DraftsModule {}

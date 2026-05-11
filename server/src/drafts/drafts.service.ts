import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DraftResult } from '../ai/interfaces/draft-result.interface';

@Injectable()
export class DraftsService {
  constructor(private readonly prisma: PrismaService) {}

  async saveDrafts(
    pipelineRunId: string,
    drafts: DraftResult[],
  ): Promise<void> {
    for (const draft of drafts) {
      // TODO: buscar channel_id por nombre y persistir el draft
      console.log(
        `Saving ${draft.channel} draft for pipeline ${pipelineRunId}`,
      );
    }
  }
}

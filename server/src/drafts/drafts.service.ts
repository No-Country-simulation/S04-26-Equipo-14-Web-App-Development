import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DraftResult } from '../ai/interfaces/draft-result.interface';
import { ChannelTypes } from '@prisma/client';
import { UpdateDraftDto } from './dto/update-draft.dto';

@Injectable()
export class DraftsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDraftsByChannel(channel: ChannelTypes) {
    const channelId = await this.getChannelIdByName(channel);

    const draft = await this.prisma.draft.findMany({
      where: {
        channelId: channelId,
      },
    });
    return draft;
  }

  async getLastDrafts() {
    return this.prisma.draft.findMany();
  }

  async updateDraft(id: string, updateDraftDto: UpdateDraftDto) {
    try {
      const existingDraft = await this.prisma.draft.findUnique({
        where: { id },
      });

      if (!existingDraft) {
        throw new NotFoundException(`Draft with id ${id} not found`);
      }

      const updatedDraft = await this.prisma.draft.update({
        where: { id },
        data: {
          ...updateDraftDto,
          reviewedAt: new Date(),
          publishedAt:
            updateDraftDto.status === 'published' ? new Date() : null,
        },
      });

      return updatedDraft;
    } catch (error) {
      Logger.error(error);
      if (error instanceof NotFoundException) {
        throw error;
      }

      throw new InternalServerErrorException('Error updating draft');
    }
  }

  async saveDrafts(
    pipelineRunId: string,
    drafts: DraftResult[],
  ): Promise<void> {
    await this.prisma.draft.deleteMany();
    const channelNames = [...new Set(drafts.map((d) => d.channel))];
    const channels = await this.prisma.channel.findMany({
      where: {
        name: {
          in: channelNames,
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    const channelMap = new Map(
      channels.map((channel) => [channel.name, channel.id]),
    );

    const data = drafts.map((draft) => {
      const channelId = channelMap.get(draft.channel) || '';

      if (!channelId) {
        throw new Error(`Channel not found: ${draft.channel}`);
      }

      console.log(
        `Saving ${draft.channel} draft for pipeline ${pipelineRunId}`,
      );

      return {
        pipelineRunId,
        channelId,
        summary: draft.summary,
        title: draft.titulo,
      };
    });

    await this.prisma.draft.createMany({
      data,
    });
  }

  async getChannelIdByName(channelName: ChannelTypes): Promise<string> {
    const channelDb = await this.prisma.channel.findMany({
      where: {
        name: channelName,
      },
    });

    if (channelDb.length == 0) {
      throw new Error(`Channel with name ${channelName} not found`);
    }
    return channelDb[0].id;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DraftResult } from '../ai/interfaces/draft-result.interface';

@Injectable()
export class DraftsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Guarda los drafts generados por la IA.
   *
   * Por cada draft:
   * 1. Busca el canal correspondiente (newsletter, linkedin, twitter)
   * 2. Crea un registro en la tabla Draft
   * 3. Crea un registro en ContentDraft para permitir revisiones y reformulaciones con IA
   */
  async saveDrafts(
    pipelineRunId: string,
    drafts: DraftResult[],
  ): Promise<void> {
    for (const draft of drafts) {
      // Buscar el canal por nombre
      const channel = await this.prisma.channel.findFirst({
        where: {
          name: draft.channel as any,
        },
      });

      // Validar que el canal exista en la base de datos
      if (!channel) {
        throw new Error(`Channel not found: ${draft.channel}`);
      }

      // Crear registro principal en la tabla Draft
      const createdDraft = await this.prisma.draft.create({
        data: {
          pipelineRunId,
          channelId: channel.id,
          summary: draft.summary,
          status: 'pending',
        },
      });

      // Crear registro complementario para soportar revisiones con IA
      await this.prisma.contentDraft.create({
        data: {
          channel: draft.channel,
          title: `${draft.channel} draft`,
          content: draft.summary,
          status: 'PENDING_REVIEW',
          aiPrompt: 'Generated automatically by weekly pipeline',
          aiModel: 'groq',
        },
      });

      console.log(
        `Draft created successfully: ${createdDraft.id} (${draft.channel})`,
      );
    }
  }

  /**
   * Obtiene todos los drafts asociados a una ejecución del pipeline.
   */
  async findByPipelineRun(pipelineRunId: string) {
    return this.prisma.draft.findMany({
      where: {
        pipelineRunId,
      },
      include: {
        channel: true,
        editor: true,
        pipelineRun: true,
      },
      orderBy: {
        channel: {
          name: 'asc',
        },
      },
    });
  }

  /**
   * Obtiene un draft por su ID.
   */
  async findById(id: string) {
    return this.prisma.draft.findUnique({
      where: {
        id,
      },
      include: {
        channel: true,
        editor: true,
        pipelineRun: true,
      },
    });
  }

  /**
   * Aprueba un draft.
   */
  async approveDraft(draftId: string, editorId: string, editorNotes?: string) {
    return this.prisma.draft.update({
      where: {
        id: draftId,
      },
      data: {
        status: 'approved',
        editorId,
        editorNotes,
        reviewedAt: new Date(),
      },
    });
  }

  /**
   * Rechaza un draft.
   */
  async rejectDraft(draftId: string, editorId: string, editorNotes?: string) {
    return this.prisma.draft.update({
      where: {
        id: draftId,
      },
      data: {
        status: 'rejected',
        editorId,
        editorNotes,
        reviewedAt: new Date(),
      },
    });
  }

  /**
   * Marca un draft como publicado.
   */
  async markAsPublished(draftId: string) {
    return this.prisma.draft.update({
      where: {
        id: draftId,
      },
      data: {
        status: 'published',
        publishedAt: new Date(),
      },
    });
  }

  /**
   * Obtiene todos los ContentDraft con su historial de revisiones.
   */
  async findAllContentDrafts() {
    return this.prisma.contentDraft.findMany({
      include: {
        revisions: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  /**
   * Obtiene un ContentDraft por su ID con todas sus revisiones.
   */
  async findContentDraftById(id: string) {
    return this.prisma.contentDraft.findUnique({
      where: {
        id,
      },
      include: {
        revisions: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
  }
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePublicationDto } from './dto/create-publications.dto';
import { DraftStatus } from '@prisma/client';

@Injectable()
export class PublicationsService {
  constructor(private prisma: PrismaService) {}
  //Solo crea la publicacion en la BD, no hace la publicacion en LinkedIn o Twitter, eso se haria en el controller
  async createPublication(createPublicationDto: CreatePublicationDto) {
    const { draftId, channelId, pipelineRunId, publishedById, result, method } =
      createPublicationDto;

    const publication = await this.prisma.publication.create({
      data: {
        draftId,
        channelId,
        pipelineRunId,
        publishedById,
        method,
        result,
        publishedAt: new Date(),
      },
      include: {
        draft: true,
        channel: true,
        publishedBy: true,
      },
    });

    return publication;
  }
  //este metodo se encarga de publicar el draft en LinkedIn o Twitter, dependiendo del channelId
  async publishDraft(
    idDraft: string,
    createPublicationDto: CreatePublicationDto,
  ) {
    const draft = await this.prisma.draft.findUnique({
      where: {
        id: idDraft,
      },
    });

    if (!draft) {
      throw new NotFoundException('Draft no encontrado');
    }

    if (draft.status === DraftStatus.published) {
      throw new BadRequestException('El draft ya ha sido publicado');
    }

    let publication = await this.prisma.publication.findUnique({
      where: {
        draftId: idDraft,
      },
    });

    if (publication) {
      throw new BadRequestException('El draft ya tiene una publicación asociada');
    }

    // Publicar en LinkedIn/API externa
    // const channelName = await this.prisma.channel.findUnique({
    //   where: {
    //     id: createPublicationDto.channelId,
    //   },
    // });
    // if (channelName === 'linkedin') {
    // Aquí iría la lógica para publicar en LinkedIn usando su API
    // Por ejemplo:
    // const publishResult = await this.linkedinProvider.publish({
    //   content: draft.summary,
    // });

    publication = await this.prisma.publication.create({
      data: {
        draftId: idDraft,
        channelId: draft.channelId,
        pipelineRunId: draft.pipelineRunId,
        publishedById: draft.editorId,
        method: createPublicationDto.method,
        result: createPublicationDto.result,
        publishedAt: new Date(),
      },
      include: {
        draft: true,
        channel: true,
        publishedBy: true,
      },
    });

    await this.prisma.draft.update({
      where: { id: idDraft },
      data: {
        status: DraftStatus.published,
      },
    });

    return publication;
  }

  async getPublication(draftId: string) {
    return this.prisma.publication.findUnique({
      where: {
        draftId,
      },
      include: {
        draft: true,
        channel: true,
        publishedBy: true,
      },
    });
  }
}

import { Controller, Param, ParseUUIDPipe, Post, Body, Get } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDto } from './dto/create-publications.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private publicationsService: PublicationsService) {}

  @Post()
  async createPublication(@Body() createPublicationDto: CreatePublicationDto) {
    return this.publicationsService.createPublication(createPublicationDto);
  }

  @Post(':draftId/publish')
  async publishDraft(
    @Param('draftId', ParseUUIDPipe) draftId: string,
    @Body() createPublicationDto: CreatePublicationDto,
  ) {
    return this.publicationsService.publishDraft(draftId, createPublicationDto);
  }

  @Get(':draftId')
  async getPublication(@Param('draftId', ParseUUIDPipe) draftId: string) {
    return this.publicationsService.getPublication(draftId);
  }
}

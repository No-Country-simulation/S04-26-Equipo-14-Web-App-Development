import {
  BadRequestException,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Body,
} from '@nestjs/common';
import { DraftsService } from './drafts.service';
import { ChannelTypes } from '@prisma/client';
import { UpdateDraftDto } from './dto/update-draft.dto';

@Controller('drafts')
export class DraftsController {
  constructor(private readonly draftsService: DraftsService) {}

  @Get('')
  getDrafts() {
    const drafts = this.draftsService.getLastDrafts();

    return drafts;
  }

  @Get(':channel')
  getDraftsByChannel(@Param('channel') channel: ChannelTypes) {
    if (!Object.values(ChannelTypes).includes(channel)) {
      throw new BadRequestException(`Invalid channel name: ${channel}`);
    }

    return this.draftsService.getDraftsByChannel(channel);
  }

  @Patch(':id')
  async updateDraft(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDraftDto: UpdateDraftDto,
  ) {
    console.log(updateDraftDto);
    return this.draftsService.updateDraft(id, updateDraftDto);
  }

  // @Post('save')
  // async saveDrafts() {
  //   const pipelineRunId = '580efeed-1711-4abb-a241-c737b7b14004'; // Reemplaza esto con el ID real de la ejecución del pipeline
  //   const drafts = [
  //     {
  //       channel: ChannelTypes.twitter,
  //       summary: 'Draft summary for Twitter',
  //     },
  //     {
  //       channel: ChannelTypes.linkedin,
  //       summary: 'Draft summary for LinkedIn',
  //     },
  //   ];
  //   await this.draftsService.saveDrafts(pipelineRunId, drafts);
  //   return { message: 'Drafts saved successfully' };
  // }
}

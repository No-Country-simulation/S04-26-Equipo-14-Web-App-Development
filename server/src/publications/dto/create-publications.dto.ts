import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PublicationResult, PublicationMethod } from '@prisma/client';

export class CreatePublicationDto {
  @IsOptional()
  @IsString()
  draftId!: string;

  @IsString()
  channelId!: string;

  @IsString()
  pipelineRunId!: string;

  @IsOptional()
  @IsString()
  publishedById!: string;

  @IsEnum(PublicationResult)
  result: PublicationResult = PublicationResult.pending;

  @IsEnum(PublicationMethod)
  method: PublicationMethod = PublicationMethod.export;
}

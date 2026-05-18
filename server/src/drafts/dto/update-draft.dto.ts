import { DraftStatus } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateDraftDto {
  @IsOptional()
  @IsString()
  summary?: string;

  @IsOptional()
  @IsEnum(DraftStatus)
  status?: DraftStatus;

  @IsOptional()
  @IsString()
  channelId?: string;

  @IsOptional()
  @IsString()
  img?: string | null;

  @IsOptional()
  @IsString()
  editorId?: string | null;

  @IsOptional()
  @IsNumber()
  views?: number;

  @IsOptional()
  @IsString()
  editorNotes?: string | null;
}

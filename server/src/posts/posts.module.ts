import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { StackoverflowModule } from 'src/integrations/stackoverflow/stackoverflow.module';

@Module({
  imports: [StackoverflowModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}

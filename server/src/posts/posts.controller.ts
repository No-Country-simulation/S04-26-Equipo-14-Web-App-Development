import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { StackoverflowService } from '../integrations/stackoverflow/stackoverflow.service';

@Controller('posts')
export class PostsController {
  constructor(
    private postService: PostsService,
    private stackoverflowService: StackoverflowService,
  ) {}

  @Get('scrapped')
  getPostsScrapped() {
    return this.postService.getPostsScrapped();
  }

  @Get('top/:cantidad')
  getPostsSelections(@Param('cantidad', ParseIntPipe) cantidad: number) {
    const posts = this.postService.getTopPosts(cantidad);
    return posts;
  }

  @Post('save')
  async savePost() {
    const postsSceapeped =
      await this.stackoverflowService.fetchWeeklyTopPosts();
    return this.postService.savePost(postsSceapeped);
  }
}

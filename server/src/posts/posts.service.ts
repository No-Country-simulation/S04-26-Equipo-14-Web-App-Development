import { Injectable } from '@nestjs/common';
import { Communities } from '@prisma/client';
import { CommunityActivity } from 'src/ai/interfaces/community-activity.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  getPostsScrapped() {
    const postsSceapeped = this.prisma.postsScrapped.findMany({
      orderBy: {
        relevanceScore: 'desc',
      },
    });
    return postsSceapeped;
  }

  async getTopPosts(cantidad: number): Promise<CommunityActivity[]> {
    const topPosts = this.prisma.postsScrapped.findMany({
      orderBy: {
        relevanceScore: 'desc',
      },
      take: cantidad,
    });
    return topPosts;
  }

  async savePosts(posts: CommunityActivity[]) {
    await this.prisma.postsScrapped.deleteMany();

    await this.prisma.postsScrapped.createMany({
      data: posts.map((post) => ({
        title: post.title ?? 'Sin título',
        content: post.content,
        authorName: post.authorName,
        relevanceScore: post.relevanceScore,
        postDate: post.postDate,
        likes: post.likes,
        comments: post.comments || [],
        answers: post.answers || [],
        tags: post.tags || [],
        sourceCommunity: post.sourceCommunity as Communities,
      })),
    });

    return 'Posts saved';
  }
}

import { Injectable } from '@nestjs/common';
import { CommunityActivity } from '../../ai/interfaces/community-activity.interface';

@Injectable()
export class LinkedinMapper {
  mapPosts(rawPosts: any[]): CommunityActivity[] {
    return rawPosts.map((post, index) => ({
      id: post.id ?? `linkedin-${index}-${Date.now()}`,
      title: post.title || 'LinkedIn Post',
      content: post.content || '',
      authorName: post.authorName || 'Unknown Author',
      relevanceScore: post.relevanceScore || 0,
      post_date: post.post_date ? new Date(post.post_date) : new Date(),
      likes: post.likes || 0,
      comments: post.comments || [],
      commentsCount: post.comments?.length || 0,
      answers: [], // LinkedIn no tiene respuestas como Stack Overflow
      tags: post.tags || [],
      sourceCommunity: 'linkedin',
    }));
  }
}

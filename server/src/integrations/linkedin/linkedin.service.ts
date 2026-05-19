import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

import { LinkedinMapper } from './linkedin.mapper';
import { CommunityActivity } from '../../ai/interfaces/community-activity.interface';

@Injectable()
export class LinkedinService {
  private readonly logger = new Logger(LinkedinService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly linkedinMapper: LinkedinMapper,
  ) {}

  async fetchWeeklyTopPosts(): Promise<CommunityActivity[]> {
    this.logger.log('Fetching weekly top posts from LinkedIn...');

    const accessToken = this.configService.get<string>('LINKEDIN_ACCESS_TOKEN');
    const organizationId = this.configService.get<string>(
      'LINKEDIN_ORGANIZATION_ID',
    );

    // Si no hay credenciales configuradas, usamos datos mock para desarrollo
    if (!accessToken || !organizationId) {
      this.logger.warn(
        'LinkedIn credentials not configured. Using mock data instead.',
      );

      const mockPosts = [
        {
          id: 'mock-linkedin-1',
          title: 'Top Backend Engineering Trends in 2026',
          content:
            'AI-assisted development, distributed systems and event-driven architectures are becoming standard.',
          authorName: 'TalentCircle Team',
          post_date: new Date(),
          likes: 245,
          comments: [
            {
              author: 'John Doe',
              content: 'Great insights!',
            },
          ],
          tags: ['backend', 'ai', 'engineering'],
          relevanceScore: 95,
        },
      ];

      return this.linkedinMapper.mapPosts(mockPosts);
    }

    try {
      // Endpoint de LinkedIn para obtener posts de una organización
      const url = `https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:${organizationId}&count=20`;

      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'X-Restli-Protocol-Version': '2.0.0',
          },
        }),
      );

      const elements = response.data.elements ?? [];

      this.logger.log(`LinkedIn posts fetched: ${elements.length}`);

      // Filtrar publicaciones de la última semana
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const recentPosts = elements.filter((post: any) => {
        const createdAt = new Date(post.created?.time || 0);
        return createdAt >= oneWeekAgo;
      });

      this.logger.log(
        `Recent LinkedIn posts (last 7 days): ${recentPosts.length}`,
      );

      // Adaptar estructura para el mapper
      const normalizedPosts = recentPosts.map((post: any, index: number) => ({
        id: post.id ?? `linkedin-${index}`,
        title: 'LinkedIn Post',
        content: post.text?.text || post.commentary || 'No content available',
        authorName: 'TalentCircle',
        post_date: new Date(post.created?.time || Date.now()),
        likes:
          post.totalSocialActivityCounts?.numLikes ||
          post.totalSocialActivityCounts?.likeCount ||
          0,
        comments: [],
        tags: ['linkedin'],
        relevanceScore:
          post.totalSocialActivityCounts?.numLikes ||
          post.totalSocialActivityCounts?.likeCount ||
          0,
      }));

      return this.linkedinMapper.mapPosts(normalizedPosts);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Unknown LinkedIn API error';

      this.logger.error('Failed to fetch LinkedIn posts.', message);

      // Fallback a datos mock para no romper el pipeline
      const fallbackPosts = [
        {
          id: 'fallback-linkedin-1',
          title: 'LinkedIn Integration Fallback Post',
          content:
            'This content was generated because the LinkedIn API request failed.',
          authorName: 'TalentCircle Team',
          post_date: new Date(),
          likes: 50,
          comments: [],
          tags: ['linkedin', 'fallback'],
          relevanceScore: 50,
        },
      ];

      return this.linkedinMapper.mapPosts(fallbackPosts);
    }
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { LinkedinMapper } from './linkedin.mapper';
import { CommunityActivity } from '../../ai/interfaces/community-activity.interface';

@Injectable()
export class LinkedinService {
  private readonly logger = new Logger(LinkedinService.name);

  constructor(private readonly linkedinMapper: LinkedinMapper) {}

  async fetchWeeklyTopPosts(): Promise<CommunityActivity[]> {
    this.logger.log('Fetching weekly top posts from LinkedIn...');

    // Datos simulados para pruebas iniciales
    const rawPosts = [
      {
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

    return this.linkedinMapper.mapPosts(rawPosts);
  }
}

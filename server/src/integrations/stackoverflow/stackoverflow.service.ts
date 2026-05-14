import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { CommunityActivity } from '../../ai/interfaces/community-activity.interface';
import { StackoverflowMapper } from './stackoverflow.mapper';

@Injectable()
export class StackoverflowService {
  constructor(private readonly httpService: HttpService) {}

  async fetchWeeklyTopPosts(): Promise<CommunityActivity[]> {
    const now = Math.floor(Date.now() / 1000);
    const sevenDaysAgo = now - 7 * 24 * 60 * 60;

    const response = await firstValueFrom(
      this.httpService.get('https://api.stackexchange.com/2.3/questions', {
        params: {
          site: 'stackoverflow',
          sort: 'votes',
          order: 'desc',
          fromdate: sevenDaysAgo,
          todate: now,
          pagesize: 20,
          filter: 'withbody',
        },
      }),
    );

    const items = response.data?.items ?? [];

    return items.map((item: any) =>
      StackoverflowMapper.toCommunityActivity(item),
    );
  }
}

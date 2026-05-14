import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { CommunityActivity } from '../../ai/interfaces/community-activity.interface';
import { StackoverflowMapper } from './stackoverflow.mapper';
import {
  StackOverflowPost,
  StackOverflowComment,
  StackOverflowAnswer,
  StackOverflowResponse,
} from './interfaces/stack-overflow.interfaces';

@Injectable()
export class StackoverflowService {
  private readonly logger = new Logger(StackoverflowService.name);
  constructor(private readonly httpService: HttpService) {}

  async orquestador() {
    const questions = await this.fetchQuestionForPosts();
    const questionMap = new Map<number, StackOverflowPost>(
      questions.map((q) => [
        q.question_id,
        { ...q, answers: [], comments: [] },
      ]),
    );
    const questionIds = questions.map((q) => q.question_id);
    const [allAnswers, allQComments] = await Promise.all([
      this.fetchAnswersForQuestions(questionIds),
      this.fetchCommentsForQuestions(questionIds),
    ]);
    // Mapear respuestas a sus preguntas correspondientes
    allAnswers.forEach((answer) => {
      const question = questionMap.get(answer.question_id);
      if (question) {
        question.answers.push({ ...answer, comments: [] });
      }
    });
    // Mapear comentarios de preguntas a sus preguntas correspondientes
    allQComments.forEach((comment) => {
      const question = questionMap.get(comment.post_id);
      if (question) {
        question.comments.push(comment);
      }
    });
    // Mapear comentarios de respuestas a sus respuestas correspondientes
    const answerIds = allAnswers.map((a) => a.answer_id);
    const allAComments = await this.fetchCommentsForAnswers(answerIds);
    allAComments.forEach((comment) => {
      const question = questionMap.get(comment.post_id);
      if (question) {
        question.comments.push(comment);
      }
    });
    const finalPosts = Array.from(questionMap.values());
    return finalPosts;
  }

  async fetchQuestionForPosts(): Promise<StackOverflowPost[]> {
    const url_q = 'https://api.stackexchange.com/2.3/questions';
    const now = Math.floor(Date.now() / 1000); // ahora en segundos
    const sevenDaysAgo = now - 7 * 24 * 60 * 60;
    const params = {
      fromdate: sevenDaysAgo,
      todate: now,
      order: 'desc',
      sort: 'votes',
      site: 'stackoverflow',
      filter: 'withbody',
      pagesize: 20,
    };

    try {
      const response_q = await firstValueFrom(
        this.httpService.get<StackOverflowResponse<StackOverflowPost>>(url_q, {
          params,
        }),
      );

      return response_q.data.items;
    } catch (error) {
      this.logger.error('Error en la petición HTTP', error);
      return [];
    }
  }

  async fetchCommentsForQuestions(ids: number[]) {
    const idsParam = ids.join(';');
    const url = `https://api.stackexchange.com/2.3/questions/${idsParam}/comments`;
    const params = {
      order: 'desc',
      sort: 'creation', // Es el sort por defecto para comentarios [4]
      site: 'stackoverflow',
      filter: 'withbody',
      pagesize: 50,
    };
    try {
      const response_q = await firstValueFrom(
        this.httpService.get<StackOverflowResponse<StackOverflowComment>>(url, {
          params,
        }),
      );
      return response_q.data.items;
    } catch (error) {
      this.logger.error('Error en la petición HTTP', error);
      return [];
    }
  }

  async fetchAnswersForQuestions(
    ids: number[],
  ): Promise<StackOverflowAnswer[]> {
    const idsParam = ids.join(';');
    const url = `https://api.stackexchange.com/2.3/questions/${idsParam}/answers`;
    const params = {
      order: 'desc',
      sort: 'votes',
      site: 'stackoverflow',
      filter: 'withbody',
      pagesize: 100,
    };

    try {
      const response_q = await firstValueFrom(
        this.httpService.get<StackOverflowResponse<StackOverflowAnswer>>(url, {
          params,
        }),
      );

      return response_q.data.items;
    } catch (error) {
      this.logger.error('Error en la petición HTTP', error);
      return [];
    }
  }

  async fetchCommentsForAnswers(ids: number[]) {
    const idsParam = ids.join(';');
    const url = `https://api.stackexchange.com/2.3/answers/${idsParam}/comments`;
    const params = {
      order: 'desc',
      sort: 'creation', // Es el sort por defecto para comentarios [4]
      site: 'stackoverflow',
      filter: 'withbody',
      pagesize: 100,
    };
    try {
      const response_q = await firstValueFrom(
        this.httpService.get<StackOverflowResponse<StackOverflowComment>>(url, {
          params,
        }),
      );
      return response_q.data.items;
    } catch (error) {
      this.logger.error('Error en la petición HTTP', error);
      return [];
    }
  }

  async fetchWeeklyTopPosts(): Promise<CommunityActivity[]> {
    const posts = await this.orquestador();

    return posts.map((item: any) =>
      StackoverflowMapper.toCommunityActivity(item),
    );
  }
}

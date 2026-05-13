export interface StackOverflowComment {
  comment_id: number;
  body: string;
  score: number;
  post_id: number; // ID del padre (pregunta o respuesta)
}

export interface StackOverflowAnswer {
  answer_id: number;
  question_id: number;
  body: string;
  score: number;
  creation_date: number;
  comments: StackOverflowComment[];
}

export interface StackOverflowPost {
  title: string;
  link: string;
  score: number;
  creation_date: number;
  question_id: number;
  comments: StackOverflowComment[];
  answers: StackOverflowAnswer[];
  post_type: string;
  answer_count: number;
}

export interface StackOverflowResponse<T> {
  items: T[];
  has_more: boolean;
  quota_remaining: number;
}

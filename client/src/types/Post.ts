export interface Post {
       id: number;
       title: string;
       votes: number;
       replies: number;
       relevanceScore: number; 
       author?: string;
    }

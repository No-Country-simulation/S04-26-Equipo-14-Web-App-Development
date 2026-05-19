     import { MOCK_POSTS } from '../mocks/postMocks';
     import type { Post } from '../types/Post.types';
     
  

    
     export const postService = {
   
      
      getPosts: async (): Promise<Post[]> => {
      
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(MOCK_POSTS);
          }, 500);
        });
      },
   
      searchPosts: async (query: string): Promise<Post[]> => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const filtered = MOCK_POSTS.filter(post =>
              post.title.toLowerCase().includes(query.toLowerCase())
            );
            resolve(filtered);
          }, 300);
        });
      }
    };
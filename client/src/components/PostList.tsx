     import { PostCard } from './PostCard'; 
     import styles from './PostList.module.css';
     import type { Post } from '../types/Post';
   
     
    
   
    
    interface PostListProps {
      posts : Post[];
    }
   
    export const PostList = ({ posts }: PostListProps) => {
    
      if (posts.length === 0) {
        return (
          <div className={styles.emptyMessage}>
            <p>No hay posts disponibles en este momento.</p>
          </div>
        );
      }
   
    
      return (
        <div className={styles.listContainer}>
          {posts.map((post) => (
            <PostCard
              key={post.id} 
              title={post.title}
              votes={post.votes}
              replies={post.replies}
              relevanceScore={post.relevanceScore} 
              author={post.author}
            />
          ))}
        </div>
      );
    };

import { PostCard } from './PostCard';
// import type { Post } from '../types/Post.types';
import type { PostsDashboard } from '../types/Post.types';

interface PostListProps {

  posts: PostsDashboard[];
}

export const PostList = ({ posts }: PostListProps) => {

  console.log("aca es lists", posts);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-on-surface-variant">
        <span className="material-symbols-outlined text-5xl mb-3 opacity-20">search_off</span>
        <p className="font-medium">No se encontraron posts que coincidan con tu búsqueda.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          votes={post.likes}
          replies={post.replies.length}
          relevanceScore={post.relevanceScore}
          author={post.author}
        />
      ))}
    </div>
  );
};

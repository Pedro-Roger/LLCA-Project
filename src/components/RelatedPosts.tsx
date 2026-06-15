import PostCard from './PostCard';
import type { Post } from '../mocks/blogPosts';

export default function RelatedPosts({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  return (
    <div className="mt-16 pt-12 border-t border-border-main">
      <h3 className="text-xl font-black text-text-main uppercase mb-8">Posts relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(p => <PostCard key={p.id} post={p} />)}
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Post } from '../mocks/blogPosts';

const categoryColor: Record<string, string> = {
  'Ciência':       'bg-moss/20 text-forest',
  'Institucional': 'bg-navy/10 text-navy',
  'Mercado':       'bg-forest/10 text-forest',
  'Meio Ambiente': 'bg-moss/30 text-forest',
};

export default function PostCard({ post }: { post: Post; key?: string }) {
  const navigate = useNavigate();
  const date = new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <button
      onClick={() => navigate(`/publicacoes/${post.slug}`)}
      className="text-left group rounded-3xl border border-border-main bg-card-bg overflow-hidden hover:border-secondary/30 transition-all hover:shadow-lg flex flex-col"
    >
      {post.coverImageUrl && (
        <div className="h-48 overflow-hidden shrink-0">
          <img
            src={post.coverImageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit ${categoryColor[post.category] ?? 'bg-text-main/10 text-text-main/60'}`}>
          {post.category}
        </span>
        <h3 className="text-lg font-bold text-text-main leading-snug group-hover:text-secondary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-text-main/50 text-sm font-light leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-2 mt-auto">
          <span className="text-text-main/30 text-xs">{date}</span>
          <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-all" />
        </div>
      </div>
    </button>
  );
}

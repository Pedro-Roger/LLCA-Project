import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { MOCK_POSTS } from '../mocks/blogPosts';
import RelatedPosts from '../components/RelatedPosts';

export default function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = MOCK_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-24">
        <p className="text-text-main/40 text-lg">Post não encontrado.</p>
        <button onClick={() => navigate('/publicacoes')} className="text-secondary text-sm font-medium hover:underline">
          Voltar para Publicações
        </button>
      </div>
    );
  }

  const related = MOCK_POSTS
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const date = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric'
  });

  // Simple Markdown → HTML (no library needed for mock)
  const renderMarkdown = (md: string) =>
    md
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-black text-text-main mt-10 mb-4">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-text-main mt-8 mb-3">$1</h3>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-text-main">$1</strong>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-text-main/70">$1</li>')
      .replace(/(<li[^>]*>.*<\/li>\n?)+/g, s => `<ul class="flex flex-col gap-2 my-4">${s}</ul>`)
      .replace(/^(?!<[h|u|l])(.+)$/gm, '<p class="text-text-main/70 font-light leading-relaxed">$1</p>')
      .replace(/\n{2,}/g, '');

  return (
    <div className="flex flex-col pt-24 pb-16">
      {/* Back button */}
      <div className="px-6 sm:px-12 mb-8">
        <button
          onClick={() => navigate('/publicacoes')}
          className="flex items-center gap-2 text-text-main/50 hover:text-text-main text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Publicações
        </button>
      </div>

      {/* Cover image */}
      {post.coverImageUrl && (
        <div className="px-6 sm:px-12 mb-10">
          <div className="w-full max-w-4xl mx-auto h-[340px] rounded-4xl overflow-hidden border border-border-main">
            <img src={post.coverImageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="px-6 sm:px-12 mb-12 max-w-3xl mx-auto w-full">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-text-main mb-6 leading-tight">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-text-main/40 text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
          {post.tags.length > 0 && (
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {post.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-text-main/5 border border-border-main text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <article
        className="px-6 sm:px-12 max-w-3xl mx-auto w-full prose-sm space-y-2"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
      />

      {/* Related posts */}
      <div className="px-6 sm:px-12 max-w-5xl mx-auto w-full">
        <RelatedPosts posts={related} />
      </div>
    </div>
  );
}

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { translations } from '../translations';
import { LangContext } from '../App';
import { MOCK_POSTS, MOCK_CATEGORIES } from '../mocks/blogPosts';
import PostCard from '../components/PostCard';

const POSTS_PER_PAGE = 6;

export default function Publicacoes() {
  const { lang } = React.useContext(LangContext);
  const t = translations[lang].publicacoes;

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let posts = MOCK_POSTS.filter(p => p.status === 'published');
    if (activeCategory) posts = posts.filter(p => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      posts = posts.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    }
    return posts;
  }, [search, activeCategory]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleCategory = (cat: string | null) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-4 pt-24">
      {/* HEADER */}
      <section className="px-6 py-16 sm:px-12">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-main mb-12">{t.title}</h1>

        {/* Search */}
        <div className="relative max-w-xl mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-main/30" />
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Buscar posts..."
            className="w-full bg-card-bg border border-border-main rounded-2xl pl-11 pr-6 py-3.5 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 outline-none transition-all text-sm"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => handleCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === null ? 'bg-primary text-white' : 'border border-border-main text-text-main/60 hover:text-text-main hover:border-text-main/30'}`}
          >
            Todos
          </button>
          {MOCK_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-primary text-white' : 'border border-border-main text-text-main/60 hover:text-text-main hover:border-text-main/30'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {paginated.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {paginated.map(post => <PostCard key={post.id} post={post} />)}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`w-9 h-9 rounded-full text-sm font-medium transition-all ${p === page ? 'bg-primary text-white' : 'border border-border-main text-text-main/60 hover:text-text-main'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="py-24 text-center">
            <p className="text-text-main/30 text-lg">Nenhum post encontrado.</p>
          </div>
        )}
      </section>

      {/* NEWSLETTER */}
      <section className="px-6 pb-24 sm:px-12">
        <div className="rounded-4xl border border-border-main bg-card-bg p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 justify-between">
          <h2 className="text-2xl font-black text-text-main max-w-sm">{t.newsletter.headline}</h2>
          <div className="flex gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder={t.newsletter.placeholder}
              className="flex-1 bg-black/5 dark:bg-white/5 border border-border-main rounded-2xl px-6 py-4 text-text-main placeholder:text-text-main/30 outline-none focus:border-secondary/50 transition-all text-sm"
            />
            <button className="rounded-2xl bg-secondary px-6 py-4 text-sm font-bold text-white hover:brightness-110 transition-all whitespace-nowrap">
              {t.newsletter.cta}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

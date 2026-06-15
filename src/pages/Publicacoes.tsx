import React from 'react';
import { translations } from '../translations';
import { LangContext } from '../App';

export default function Publicacoes() {
  const { lang } = React.useContext(LangContext);
  const t = translations[lang].publicacoes;
  const blocks = [t.blocks.noticias, t.blocks.informativos, t.blocks.blog];

  return (
    <div className="flex flex-col gap-4 pt-24">
      <section className="px-6 py-16 sm:px-12">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-main mb-12">{t.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {blocks.map((block, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-border-main bg-card-bg flex flex-col gap-4">
              <h2 className="text-2xl font-black text-text-main">{block.title}</h2>
              <p className="text-text-main/60 font-light leading-relaxed">{block.desc}</p>
              <div className="mt-auto pt-4">
                <div className="flex flex-col gap-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-border-main" />
                  ))}
                </div>
                <p className="text-xs text-text-main/30 mt-3 text-center">Em breve</p>
              </div>
            </div>
          ))}
        </div>
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

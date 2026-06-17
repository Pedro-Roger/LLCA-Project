import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../translations';
import { LangContext } from '../App';

export default function Tecnologia() {
  const { lang } = React.useContext(LangContext);
  const t = translations[lang].tecnologia;

  return (
    <div className="flex flex-col gap-4 pt-24">
      {/* BLOCK 1 — VIRADA DE PARADIGMA */}
      <section className="px-6 py-16 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Ciência & Tecnologia</span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-main mb-12"
          >
            {t.block1.headline}
          </motion.h1>
          <div className="flex flex-col gap-6 max-w-2xl">
            {t.block1.paragraphs.map((p, idx) => (
              <p key={idx} className="text-text-main/70 font-light leading-relaxed text-lg">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 2 — PLATAFORMA TMP */}
      <section className="px-6 py-12 sm:px-12">
        <div className="rounded-4xl border border-border-main bg-card-bg p-8 sm:p-12">
          <h2 className="text-3xl font-black text-text-main mb-2">TMP</h2>
          <p className="text-secondary font-medium mb-8">{t.tmp.subtitle}</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.tmp.paragraphs.map((p, idx) => (
              <p key={idx} className="text-text-main/70 font-light leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 3 — 3 ETAPAS */}
      <section className="px-6 py-12 sm:px-12">
        <h2 className="text-3xl font-black text-text-main uppercase mb-10">Como funciona</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.etapas.map((etapa, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-border-main bg-card-bg"
            >
              <span className="text-4xl font-black text-secondary/30 mb-4 block">{etapa.num}</span>
              <h3 className="text-xl font-bold text-text-main mb-3">{etapa.title}</h3>
              <p className="text-text-main/60 font-light leading-relaxed">{etapa.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCK 4 — POR QUE É DIFERENTE */}
      <section className="px-6 py-12 sm:px-12">
        <h2 className="text-3xl font-black text-text-main uppercase mb-8">{t.diferente.headline}</h2>
        <div className="rounded-4xl border border-border-main bg-card-bg overflow-hidden">
          <div className="grid grid-cols-2 bg-moss/10 border-b border-border-main">
            <div className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-text-main/50">Indústria tradicional</div>
            <div className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-secondary">Plataforma TMP</div>
          </div>
          {t.diferente.rows.map((row, idx) => (
            <div key={idx} className={`grid grid-cols-2 border-b border-border-main last:border-0 ${idx % 2 === 0 ? '' : 'bg-bg-app'}`}>
              <div className="px-8 py-5 text-text-main/50 text-sm font-light">{row.traditional}</div>
              <div className="px-8 py-5 text-text-main text-sm font-medium">{row.tmp}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 5 — INFRAESTRUTURA (placeholder) */}
      <section className="px-6 py-12 sm:px-12">
        <div className="rounded-4xl border border-border-main bg-card-bg h-48 flex items-center justify-center">
          <p className="text-text-main/30 text-sm font-medium uppercase tracking-widest">Render 3D — Laboratório LLCA (em breve)</p>
        </div>
      </section>

      {/* BLOCK 6 — MODELO DE OPERAÇÃO */}
      <section className="px-6 py-12 sm:px-12 pb-24">
        <h2 className="text-3xl font-black text-text-main uppercase mb-4">{t.modelo.headline}</h2>
        <p className="text-text-main/60 mb-8 font-light">{t.modelo.intro}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.modelo.pilares.map((pilar, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-border-main bg-card-bg">
              <span className="text-3xl font-black text-primary/20 mb-4 block">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="text-lg font-bold text-text-main mb-2">{pilar.title}</h3>
              <p className="text-text-main/50 text-sm font-light">{pilar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

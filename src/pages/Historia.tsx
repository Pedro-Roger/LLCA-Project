import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../translations';
import { LangContext } from '../App';

export default function Historia() {
  const { lang } = React.useContext(LangContext);
  const t = translations[lang].historia;

  return (
    <div className="flex flex-col gap-4 pt-24">
      {/* BLOCK 1 — A ORIGEM */}
      <section className="px-6 py-16 sm:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Nossa História</span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-main mb-12 max-w-3xl"
          >
            {t.block1.headline}
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.block1.paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-text-main/70 font-light leading-relaxed text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 2 — O FUNDADOR */}
      <section className="px-6 py-12 sm:px-12">
        <div className="rounded-4xl border border-border-main bg-card-bg p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-text-main mb-2">{t.block2.name}</h2>
              <p className="text-secondary font-medium mb-6">{t.block2.role}</p>
              <p className="text-text-main/70 font-light leading-relaxed mb-8">{t.block2.bio}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-main/50 mb-4">Credenciais</h3>
              <ul className="flex flex-col gap-3">
                {t.block2.credentials.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-main/70 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 3 — O QUE É O LLCA HOJE */}
      <section className="px-6 py-12 sm:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-main uppercase mb-8">
            {t.block3.headline}
          </h2>
          <div className="flex flex-col gap-6">
            {t.block3.paragraphs.map((p, idx) => (
              <p key={idx} className="text-text-main/70 font-light leading-relaxed text-lg">{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

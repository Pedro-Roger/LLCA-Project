import React from 'react';
import { motion } from 'motion/react';
import { translations } from '../translations';
import { LangContext } from '../App';

const statusColor = (status: string) => {
  const s = status.toLowerCase();
  if (s.includes('comercial') || s.includes('commercial')) return 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20';
  if (s.includes('validado') || s.includes('validated')) return 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20';
  return 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20';
};

export default function Areas() {
  const { lang } = React.useContext(LangContext);
  const areas = translations[lang].areas;

  return (
    <div className="flex flex-col gap-4 pt-24">
      <section className="px-6 py-16 sm:px-12">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Áreas de Atuação</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-main mb-4">Portfólio de soluções</h1>
        <p className="text-text-main/60 font-light text-lg max-w-xl">
          Shelf life 2 anos · pH 2–14 · Temperatura 5°C–50°C
        </p>
      </section>

      {areas.map((area, idx) => (
        <section key={area.id} id={area.id} className="px-6 py-4 sm:px-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="rounded-4xl border border-border-main bg-card-bg p-8 sm:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-black text-primary/20">{String(idx + 1).padStart(2, '0')}</span>
                  <span className={`text-xs px-3 py-1.5 rounded-full border font-medium ${statusColor(area.status)}`}>{area.status}</span>
                </div>
                <h2 className="text-3xl font-black text-text-main mb-2">{area.title}</h2>
                <p className="text-secondary font-medium mb-6">{area.tagline}</p>
                <p className="text-text-main/70 font-light leading-relaxed">{area.text}</p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-main/50 mb-4">Portfólio</h3>
                <ul className="flex flex-col gap-2">
                  {area.portfolio.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-main/70 text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </section>
      ))}
      <div className="pb-16" />
    </div>
  );
}

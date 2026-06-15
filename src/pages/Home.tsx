import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroVideo from '../assets/Video.mp4';
import logo from '../assets/logo oficial.png';
import logoDark from '../assets/logo oficial_dark.png';
import { translations } from '../translations';
import { LangContext, ThemeContext } from '../App';

export default function Home() {
  const { lang } = React.useContext(LangContext);
  const { isDark } = React.useContext(ThemeContext);
  const t = translations[lang];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      {/* BLOCK 1 — HERO */}
      <section id="home" className="relative w-full min-h-[85vh] flex items-center rounded-4xl border border-border-main shadow-2xl bg-card-bg transition-colors duration-300 isolate transform-gpu overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
          <video autoPlay loop muted playsInline preload="auto"
            className={`absolute inset-0 h-full w-full object-cover mix-blend-screen transition-opacity duration-500 ${isDark ? 'opacity-60' : 'opacity-38'}`}>
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className={`absolute inset-0 bg-linear-to-b ${isDark ? 'from-card-bg/40 via-transparent to-card-bg/90' : 'from-card-bg/10 via-transparent to-card-bg/24'}`} />
          <div className={`absolute inset-0 bg-linear-to-r ${isDark ? 'from-card-bg/80 via-transparent to-transparent' : 'from-card-bg/38 via-transparent to-transparent'}`} />
        </div>
        <div className="relative z-10 w-full px-6 py-32 sm:px-12 lg:px-20 h-full flex flex-col justify-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="flex flex-col gap-6 max-w-4xl mt-12">
            <div className="w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[720px] drop-shadow-2xl -ml-4 sm:-ml-6 lg:-ml-12">
              <img src={isDark ? logo : logoDark} alt="LLCA Logo" className="h-auto w-full object-contain" />
            </div>
            <p className="max-w-md text-base sm:text-lg leading-relaxed text-text-main/70 font-light backdrop-blur-xs">{t.hero.subtitle}</p>
            <div className="mt-4 flex gap-4 flex-wrap">
              <button onClick={() => navigate('/tecnologia')} className="rounded-full bg-primary text-white px-8 py-3 text-sm font-medium hover:brightness-110 transition-all">
                {t.hero.cta1}
              </button>
              <button onClick={() => navigate('/historia')} className="rounded-full border border-border-main text-text-main px-8 py-3 text-sm font-medium hover:bg-text-main hover:text-bg-app transition-all">
                {t.hero.cta2}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-start w-full">
              <div className="w-24 h-24 rounded-full border border-border-main flex items-center justify-center p-2 backdrop-blur-sm group hover:border-primary/50 transition-colors cursor-pointer bg-black/5 dark:bg-white/5">
                <div className="w-full h-full rounded-full border border-dashed border-text-main/30 flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:border-primary transition-colors">
                  <ArrowDownRight className="w-6 h-6 text-text-main group-hover:text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 2 — TESE EM TRÊS COLUNAS */}
      <section className="px-6 py-16 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {t.home.tese.map((col, idx) => (
            <motion.div key={idx} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}
              className="flex flex-col gap-4 p-8 rounded-3xl border border-border-main bg-card-bg">
              <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-sm font-bold">{idx + 1}</div>
              <h3 className="text-xl font-bold text-text-main">{col.title}</h3>
              <p className="text-text-main/60 font-light leading-relaxed">{col.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCK 3 — QUEM NOS RESPALDA */}
      <section className="px-6 py-12 sm:px-12">
        <div className="rounded-4xl border border-border-main bg-card-bg p-8 sm:p-12">
          <p className="text-center text-text-main/60 text-lg mb-12 max-w-2xl mx-auto">{t.home.respalda.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.home.respalda.groups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">{group.label}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-full border border-border-main text-text-main/60 bg-black/5 dark:bg-white/5">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 4 — ÁREAS DE ATUAÇÃO PREVIEW */}
      <section className="px-6 py-12 sm:px-12 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-text-main uppercase">Áreas de Atuação</h2>
          <button onClick={() => navigate('/areas')} className="flex items-center gap-2 text-secondary text-sm font-medium hover:gap-3 transition-all">
            Ver todas <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.home.areasPreview.map((area, idx) => (
            <motion.button key={idx} whileHover={{ y: -4 }} onClick={() => navigate(area.href)}
              className="text-left p-8 rounded-3xl border border-border-main bg-card-bg hover:border-secondary/30 transition-all group">
              <h3 className="text-lg font-bold text-text-main mb-2 group-hover:text-secondary transition-colors">{area.title}</h3>
              <p className="text-text-main/50 text-sm font-light">{area.desc}</p>
              <ArrowRight className="w-4 h-4 text-secondary mt-4 opacity-0 group-hover:opacity-100 transition-all" />
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  );
}

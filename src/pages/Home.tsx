import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroVideo from '../assets/Video.mp4';
import logoDark from '../assets/logo oficial_dark.png';
import { translations } from '../translations';
import { LangContext } from '../App';
import { ScienceMarquee, ClientsMarquee } from '../components/LogoMarquee';

const AREAS_IMAGES = [
  {
    title: 'Agricultura',
    desc: 'Biofertilizantes que regeneram o solo',
    href: '/areas#agricultura',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Pecuária & Aquicultura',
    desc: 'Aditivos probióticos que substituem antibióticos',
    href: '/areas#pecuaria',
    image: 'https://images.unsplash.com/photo-1519122295308-bdb40916b529?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Indústria de Fertilizantes',
    desc: 'Disponibilização biológica que substitui acidulação',
    href: '/areas#fertilizantes',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Saúde Humana',
    desc: 'Plataforma terapêutica para doenças autoimunes e microbiota intestinal',
    href: '/areas#saude',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Meio Ambiente',
    desc: 'Bioremediação e compostagem',
    href: '/areas#ambiente',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80&auto=format&fit=crop',
  },
];

export default function Home() {
  const { lang } = React.useContext(LangContext);
  const t = translations[lang];
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      {/* BLOCK 1 — HERO */}
      <section id="home" className="relative w-full min-h-[85vh] flex items-center rounded-4xl border border-border-main shadow-lg bg-navy isolate transform-gpu overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
          <video autoPlay loop muted playsInline preload="auto"
            className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-70">
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-linear-to-b from-navy/10 via-transparent to-navy/60" />
          <div className="absolute inset-0 bg-linear-to-r from-navy/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 w-full px-6 py-32 sm:px-12 lg:px-20 h-full flex flex-col justify-center">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="flex flex-col gap-6 max-w-4xl mt-12">
            <div className="w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[720px] drop-shadow-2xl -ml-4 sm:-ml-6 lg:-ml-12">
              <img src={logoDark} alt="LLCA Logo" className="h-auto w-full object-contain" />
            </div>
            <p className="max-w-md text-base sm:text-lg leading-relaxed text-white/70 font-light backdrop-blur-xs">{t.hero.subtitle}</p>
            <div className="mt-4 flex gap-4 flex-wrap">
              <button onClick={() => navigate('/tecnologia')} className="rounded-full bg-forest text-white px-8 py-3 text-sm font-medium hover:brightness-110 transition-all">
                {t.hero.cta1}
              </button>
              <button onClick={() => navigate('/historia')} className="rounded-full border border-white/30 text-white px-8 py-3 text-sm font-medium hover:bg-white hover:text-navy transition-all">
                {t.hero.cta2}
              </button>
            </div>
            <div className="mt-4 flex items-center justify-start w-full">
              <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center p-2 backdrop-blur-sm group hover:border-white/50 transition-colors cursor-pointer bg-white/10">
                <div className="w-full h-full rounded-full border border-dashed border-white/40 flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:border-moss transition-colors">
                  <ArrowDownRight className="w-6 h-6 text-white/70 group-hover:text-moss" />
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

      {/* BLOCK 3a — VALIDAÇÃO CIENTÍFICA & MÍDIA */}
      <section className="px-6 sm:px-12">
        <div className="rounded-4xl border border-border-main bg-white p-8 sm:p-12 overflow-hidden">
          <span className="text-sm font-bold uppercase tracking-widest text-text-main/50 block text-center mb-6">Validação Científica & Mídia</span>
          <p className="text-center text-neutral text-base mb-10 max-w-xl mx-auto">{t.home.respalda.intro}</p>
          <ScienceMarquee />
        </div>
      </section>

      {/* BLOCK 3b — CLIENTES */}
      <section className="px-6 py-4 sm:px-12">
        <div className="rounded-4xl border border-border-main bg-white p-8 sm:p-12 overflow-hidden">
          <span className="text-sm font-bold uppercase tracking-widest text-text-main/50 block text-center mb-6">Clientes</span>
          <p className="text-center text-neutral text-base mb-10 max-w-xl mx-auto">Empresas que já utilizam nossa plataforma biológica no campo.</p>
          <ClientsMarquee />
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
          {AREAS_IMAGES.map((area, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              onClick={() => navigate(area.href)}
              className="text-left rounded-3xl border border-border-main bg-white overflow-hidden hover:border-secondary/40 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-main mb-2 group-hover:text-secondary transition-colors">{area.title}</h3>
                <p className="text-neutral text-sm font-light leading-relaxed">{area.desc}</p>
                <div className="flex items-center gap-2 mt-4 text-secondary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  );
}

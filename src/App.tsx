import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import heroVideo from "./assets/Video.mp4";
import logo from "./assets/logo_llca.png";
import llcaLab from "./assets/llca_lab.png";
import { translations } from "./translations";
import {
  Beaker,
  Users,
  Timer,
  ArrowRight,
  Menu,
  X,
  Globe,
  Share2,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Facebook,
  Instagram,
  ArrowDownRight,
  Heart,
  ShieldCheck,
  Leaf,
  Lightbulb,
  Handshake,
  Target,
  Rocket,
  Activity,
  Microscope
} from "lucide-react";

type Language = 'pt' | 'en';

const Sidebar = () => (
  <div className="hidden lg:flex flex-col justify-between w-[120px] shrink-0 min-h-screen py-10 px-4 items-center bg-bg-dark border-r border-border-subtle relative z-20">
    <div className="flex flex-col items-center gap-12">
      <div className="origin-center whitespace-nowrap mt-4 scale-125">
        <div className="flex h-12 w-32 items-center justify-center">
          <img src={logo} alt="LLCA Logo" className="h-full w-auto object-contain" />
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-8 mb-4">
      <div className="rotate-90 whitespace-nowrap mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Follow Us</span>
      </div>
      <div className="flex flex-col gap-6">
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
      </div>
    </div>
  </div>
);

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  const navItems = [
    { label: t.home, href: "#home" },
    { label: t.about, href: "#sobre" },
    { label: t.contact, href: "#contato" }
  ];

  return (
    <header className="absolute top-0 w-full z-50 px-6 py-6 sm:px-12 sm:py-8 pointer-events-none">
      <div className="mx-auto flex w-full items-center justify-between pointer-events-auto">
        <nav className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              className={`text-sm font-medium px-6 py-2.5 rounded-full transition-all ${idx === 0 ? 'bg-primary text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center">
          <h2 className="text-xl font-black text-white tracking-wider flex items-center gap-2 bg-bg-dark/50 p-2 rounded-lg backdrop-blur-sm border border-white/10">
            LLCA
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5 text-xs font-bold text-white hover:bg-white/20 transition-all cursor-pointer uppercase"
          >
            {lang}
          </button>
          <button className="hidden sm:flex rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-bg-dark transition-all cursor-pointer">
            {t.join}
          </button>
          <button
            className="lg:hidden p-3 text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-all cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-[90px] left-6 right-6 rounded-3xl bg-card-dark/95 backdrop-blur-xl border border-white/10 shadow-2xl p-6 pointer-events-auto z-50"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  className={`text-lg font-medium p-4 rounded-2xl transition-all ${idx === 0 ? 'bg-primary/20 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/10 my-4" />
              <button className="w-full rounded-2xl bg-secondary px-6 py-4 text-base font-bold text-white hover:brightness-110 transition-all cursor-pointer">
                {t.join}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ lang }: { lang: Language }) => {
  const t = translations[lang].hero;
  return (
  <section id="home" className="relative w-full h-full min-h-[85vh] flex items-center overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 shadow-2xl bg-card-dark isolate">
    {/* Abstract/Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-screen"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-linear-to-b from-card-dark/40 via-transparent to-card-dark/90" />
    <div className="absolute inset-0 bg-linear-to-r from-card-dark/80 via-transparent to-transparent" />

    <div className="relative z-10 w-full px-6 py-32 sm:px-12 lg:px-20 h-full flex flex-col justify-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col gap-6 max-w-4xl mt-12"
      >
        <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black leading-[0.9] tracking-tighter text-white uppercase drop-shadow-2xl">
          {t.title1} <br />
          <span className="text-blue-400">{t.title2}</span> {t.title3}
        </h1>
        <p className="max-w-md text-base sm:text-lg leading-relaxed text-slate-300 font-light backdrop-blur-xs">
          {t.subtitle}
        </p>

        <div className="mt-8 flex items-center justify-start w-full">
          <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center p-2 backdrop-blur-sm group hover:border-primary/50 transition-colors cursor-pointer">
            <div className="w-full h-full rounded-full border border-dashed border-white/30 flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:border-primary transition-colors">
              <ArrowDownRight className="w-6 h-6 text-white group-hover:text-primary animate-none" style={{ animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>

  </section>
  );
};

const About = ({ lang }: { lang: Language }) => {
  const t = translations[lang].about;
  return (
  <section className="px-6 py-24 sm:px-12" id="sobre">
    <div className="mb-16 flex flex-col md:flex-row md:items-start justify-between gap-12">
      <div className="flex-1">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">{t.title}</h2>
      </div>
      <div className="flex-[2] max-w-xl text-slate-400 font-light space-y-6 text-lg">
        <p>
          {t.p1}
        </p>
        <p>
          {t.p2}
        </p>
      </div>
    </div>
    
    <div className="w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl mx-auto h-[400px] md:h-[500px]">
      <img src={llcaLab} alt="LLCA Laboratory" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  </section>
  );
};

const Mission = ({ lang }: { lang: Language }) => {
  const t = translations[lang].mission;
  const icons = [Globe, Heart, Lightbulb, Target];
  return (
  <section className="px-6 py-12 sm:px-12">
    <div className="mb-16">
      <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">{t.title}</h2>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {t.items.map((feature, idx) => {
        const Icon = icons[idx];
        return (
        <motion.div
          key={idx}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl border border-white/5 bg-card-dark/50 p-8 hover:bg-white/5 transition-all overflow-hidden isolate"
        >
          <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-slate-300 group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-white/5">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-xl font-bold text-white tracking-tight">{feature.title}</h3>
          <p className="text-slate-400 font-light leading-relaxed text-sm">{feature.desc}</p>
        </motion.div>
      )})}
    </div>
  </section>
);
};

const Values = ({ lang }: { lang: Language }) => {
  const t = translations[lang].values;
  const icons = [Heart, ShieldCheck, Leaf, Microscope, Handshake];
  return (
  <section className="px-6 py-12 sm:px-12 pb-24">
    <div className="mb-16">
      <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">{t.title}</h2>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {t.items.map((feature, idx) => {
        const Icon = icons[idx];
        return (
        <motion.div
          key={idx}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl border border-white/5 bg-card-dark/50 p-8 hover:bg-white/5 transition-all overflow-hidden isolate"
        >
          <div className="absolute -inset-4 bg-linear-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-slate-300 group-hover:text-secondary group-hover:bg-secondary/10 transition-colors border border-white/5">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-white tracking-tight">{feature.title}</h3>
          <p className="text-slate-400 font-light leading-relaxed">{feature.desc}</p>
        </motion.div>
      )})}
    </div>
  </section>
);
};

const Contact = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;
  return (
  <section id="contato" className="px-6 py-24 sm:px-12 relative overflow-hidden">
    {/* Glow background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 mix-blend-screen pointer-events-none" />

    <div className="w-full rounded-[3rem] border border-white/10 bg-card-dark/80 backdrop-blur-md p-8 sm:p-16 shadow-2xl">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.1]">
              <div dangerouslySetInnerHTML={{ __html: t.title.replace(' ', ' <br />') }} />
            </h2>
            <p className="mt-6 text-slate-400 font-light text-lg">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{t.form.email}</p>
                <p className="text-white font-medium">contato@llca.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Telefone</p>
                <p className="text-white font-medium">+55 (11) 9999-9999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <form className="flex flex-col gap-6 bg-bg-dark rounded-[2.5rem] p-8 sm:p-10 border border-white/5 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">{t.form.title}</h3>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.form.name}</label>
              <input
                type="text"
                placeholder={t.form.namePlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.form.email}</label>
              <input
                type="email"
                placeholder={t.form.emailPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.form.subject}</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                <option value="duvida" className="bg-bg-dark">{t.form.subjects.general}</option>
                <option value="exame" className="bg-bg-dark">{t.form.subjects.exam}</option>
                <option value="resultado" className="bg-bg-dark">{t.form.subjects.results}</option>
                <option value="doacao" className="bg-bg-dark">{t.form.subjects.donate}</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.form.message}</label>
              <textarea
                placeholder={t.form.messagePlaceholder}
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-2xl bg-secondary hover:brightness-110 px-8 py-4 text-base font-bold text-white transition-all cursor-pointer mt-2"
            >
              {t.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  return (
  <footer className="px-6 py-12 sm:px-12 border-t border-white/10 mt-12 bg-card-dark">
    <div className="flex flex-col gap-8 md:flex-row items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-white tracking-widest flex items-center gap-2">
          LLCA
        </h2>
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} {t.rights}</p>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium">
        <a href="#" className="text-slate-400 hover:text-white transition-colors">{t.privacy}</a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors">{t.terms}</a>
      </div>
    </div>
  </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <div className="flex h-screen w-full bg-bg-dark text-slate-100 font-sans overflow-hidden">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto relative scroll-smooth p-2 sm:p-4 lg:p-6 w-full">
        <div className="relative min-h-full flex flex-col w-full bg-bg-dark">
          {/* Navbar sits inside the scrolling main container but sticky/absolute mapping handled within it */}
          <Navbar lang={lang} setLang={setLang} />

          <div className="flex flex-col gap-4 relative z-0">
            <Hero lang={lang} />
            <About lang={lang} />
            <Mission lang={lang} />
            <Values lang={lang} />
            <Contact lang={lang} />
            <Footer lang={lang} />
          </div>
        </div>
      </main>
    </div>
  );
}


import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import heroVideo from "./assets/Video.mp4";
import logo from "./assets/logo oficial.png";
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
  Microscope,
  Sun,
  Moon
} from "lucide-react";

type Language = 'pt' | 'en';

const Sidebar = ({ isDark }: { isDark: boolean }) => (
  <div className="hidden lg:flex flex-col justify-between w-[120px] shrink-0 min-h-screen py-10 px-4 items-center bg-bg-app border-r border-border-main relative z-20 transition-colors duration-300">
    <div className="flex flex-col items-center gap-12">
      <div className="origin-center whitespace-nowrap mt-4 scale-125">
        <div className="flex h-12 w-32 items-center justify-center">
          <img src={logo} alt="LLCA Logo" className="h-full w-auto object-contain dark:invert-0 light:invert" style={{ filter: isDark ? 'none' : 'invert(1) brightness(0.2)' }} />
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center gap-8 mb-4">
      <div className="rotate-90 whitespace-nowrap mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-text-main/50">Follow Us</span>
      </div>
      <div className="flex flex-col gap-6">
        <a href="#" className="text-text-main/40 hover:text-text-main transition-colors"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="text-text-main/40 hover:text-text-main transition-colors"><Facebook className="w-5 h-5" /></a>
        <a href="#" className="text-text-main/40 hover:text-text-main transition-colors"><Instagram className="w-5 h-5" /></a>
      </div>
    </div>
  </div>
);

const Navbar = ({ lang, setLang, isDark, toggleTheme }: { 
  lang: Language, 
  setLang: (l: Language) => void,
  isDark: boolean,
  toggleTheme: () => void
}) => {
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
        <nav className="hidden lg:flex items-center gap-2 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-border-main rounded-full p-2 transition-colors">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              className={`text-sm font-medium px-6 py-2.5 rounded-full transition-all ${idx === 0 ? 'bg-primary text-white' : 'text-text-main/70 hover:text-text-main hover:bg-black/5 dark:hover:bg-white/10'}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center">
          <h2 className="text-xl font-black text-text-main tracking-wider flex items-center gap-2 bg-bg-app/50 p-2 rounded-lg backdrop-blur-sm border border-border-main transition-colors">
            LLCA
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-main bg-black/5 dark:bg-white/5 text-text-main hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer"
            title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-main bg-black/5 dark:bg-white/5 text-xs font-bold text-text-main hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer uppercase"
          >
            {lang}
          </button>
          <button className="hidden sm:flex rounded-full border border-border-main bg-transparent px-8 py-3 text-sm font-medium text-text-main hover:bg-text-main hover:text-bg-app transition-all cursor-pointer">
            {t.join}
          </button>
          <button
            className="lg:hidden p-3 text-text-main bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full border border-border-main hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer"
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
            className="lg:hidden absolute top-[90px] left-6 right-6 rounded-3xl bg-card-bg/95 backdrop-blur-xl border border-border-main shadow-2xl p-6 pointer-events-auto z-50 transition-colors duration-300"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  className={`text-lg font-medium p-4 rounded-2xl transition-all ${idx === 0 ? 'bg-primary/20 text-text-main font-bold' : 'text-text-main/70 hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-main'}`}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-border-main my-4" />
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

const Hero = ({ lang, isDark }: { lang: Language, isDark: boolean }) => {
  const t = translations[lang].hero;
  return (
  <section 
    id="home" 
    className="relative w-full h-full min-h-[85vh] flex items-center rounded-4xl border border-border-main shadow-2xl bg-card-bg transition-colors duration-300 isolate transform-gpu overflow-hidden"
  >
    {/* Background Wrapper for Clipping - Essential for mobile rounded corners */}
    <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
      <video
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className={`absolute inset-0 h-full w-full object-cover mix-blend-screen transition-opacity duration-500 ${isDark ? 'opacity-60' : 'opacity-20'}`}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-linear-to-b ${isDark ? 'from-card-bg/40 via-transparent to-card-bg/90' : 'from-card-bg/20 via-transparent to-card-bg/40'}`} />
      <div className={`absolute inset-0 bg-linear-to-r ${isDark ? 'from-card-bg/80 via-transparent to-transparent' : 'from-card-bg/60 via-transparent to-transparent'}`} />
    </div>

    <div className="relative z-10 w-full px-6 py-32 sm:px-12 lg:px-20 h-full flex flex-col justify-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col gap-6 max-w-4xl mt-12"
      >
        <div className="w-full max-w-[320px] sm:max-w-[460px] lg:max-w-[720px] drop-shadow-2xl -ml-4 sm:-ml-6 lg:-ml-12">
          <img
            src={logo}
            alt="LLCA Logo"
            className="h-auto w-full object-contain"
          />
        </div>
        <p className="max-w-md text-base sm:text-lg leading-relaxed text-text-main/70 font-light backdrop-blur-xs">
          {t.subtitle}
        </p>

        <div className="mt-8 flex items-center justify-start w-full">
          <div className="w-24 h-24 rounded-full border border-border-main flex items-center justify-center p-2 backdrop-blur-sm group hover:border-primary/50 transition-colors cursor-pointer bg-black/5 dark:bg-white/5">
            <div className="w-full h-full rounded-full border border-dashed border-text-main/30 flex items-center justify-center animate-[spin_10s_linear_infinite] group-hover:border-primary transition-colors">
              <ArrowDownRight className="w-6 h-6 text-text-main group-hover:text-primary animate-none" style={{ animationDirection: 'reverse' }} />
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
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-text-main uppercase">{t.title}</h2>
      </div>
      <div className="flex-[2] max-w-xl text-text-main/60 font-light space-y-6 text-lg [&_strong]:font-bold [&_strong]:text-text-main">
        <p>
          {t.p1}
        </p>
        <p dangerouslySetInnerHTML={{ __html: t.p2 }} />
      </div>
    </div>
    
    <div className="w-full rounded-4xl overflow-hidden border border-border-main shadow-2xl mx-auto h-[400px] md:h-[500px]">
      <img src={llcaLab} alt="LLCA Laboratory" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
    </div>
  </section>
  );
};

const Foundation = ({ lang }: { lang: Language }) => {
  const t = translations[lang].foundation;
  const icons = [Globe, Target, Lightbulb];
  return (
  <section className="px-6 py-12 sm:px-12 pb-24">
    <div className="mb-16">
      <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-text-main uppercase">{t.title}</h2>
    </div>
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
      {t.items.map((feature, idx) => {
        const Icon = icons[idx];
        return (
        <motion.div
          key={idx}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl border border-border-main bg-card-bg p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-all overflow-hidden isolate"
        >
          <div className="absolute -inset-4 bg-linear-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 dark:bg-white/5 text-text-main group-hover:text-secondary group-hover:bg-secondary/10 transition-colors border border-border-main">
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-text-main tracking-tight">{feature.title}</h3>
          <p className="text-text-main/60 font-light leading-relaxed">{feature.desc}</p>
        </motion.div>
      )})}
    </div>
  </section>
);
};

const Contact = ({ lang }: { lang: Language }) => {
  const t = translations[lang].contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'duvida',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: 'duvida', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
  <section id="contato" className="px-6 py-24 sm:px-12 relative overflow-hidden">
    {/* Glow background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 mix-blend-screen pointer-events-none" />

    <div className="w-full rounded-4xl border border-border-main bg-card-bg backdrop-blur-md p-8 sm:p-16 shadow-2xl transition-colors duration-300">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-text-main uppercase leading-[1.1]">
              <div dangerouslySetInnerHTML={{ __html: t.title.replace(' ', ' <br />') }} />
            </h2>
            <p className="mt-6 text-text-main/60 font-light text-lg">
              {t.desc}
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-border-main">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-text-main/50 font-bold uppercase tracking-wider">{t.form.email}</p>
                <p className="text-text-main font-medium">contato@llca.com.br</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-border-main">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-text-main/50 font-bold uppercase tracking-wider">Telefone</p>
                <p className="text-text-main font-medium">+55 (11) 9999-9999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-bg-app rounded-4xl p-8 sm:p-10 border border-border-main relative z-10">
            <h3 className="text-2xl font-bold text-text-main mb-4">{t.form.title}</h3>
            
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-green-500/20 border border-green-500 text-green-700 dark:text-green-200 px-6 py-4 rounded-2xl text-sm font-medium"
                >
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.name}</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t.form.namePlaceholder}
                className="w-full bg-black/5 dark:bg-white/5 border border-border-main rounded-2xl px-6 py-4 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 focus:bg-black/10 dark:focus:bg-white/10 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.email}</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t.form.emailPlaceholder}
                className="w-full bg-black/5 dark:bg-white/5 border border-border-main rounded-2xl px-6 py-4 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 focus:bg-black/10 dark:focus:bg-white/10 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.subject}</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black/5 dark:bg-white/5 border border-border-main rounded-2xl px-6 py-4 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 focus:bg-black/10 dark:focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="duvida" className="bg-bg-app">{t.form.subjects.general}</option>
                <option value="exame" className="bg-bg-app">{t.form.subjects.exam}</option>
                <option value="resultado" className="bg-bg-app">{t.form.subjects.results}</option>
                <option value="doacao" className="bg-bg-app">{t.form.subjects.donate}</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.message}</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={t.form.messagePlaceholder}
                rows={4}
                className="w-full bg-black/5 dark:bg-white/5 border border-border-main rounded-2xl px-6 py-4 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 focus:bg-black/10 dark:focus:bg-white/10 outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-2xl bg-secondary hover:brightness-110 px-8 py-4 text-base font-bold text-white transition-all cursor-pointer mt-2 flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : t.form.submit}
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
  <footer className="px-6 py-12 sm:px-12 border-t border-border-main mt-12 bg-card-bg transition-colors duration-300">
    <div className="flex flex-col gap-8 md:flex-row items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-32 items-center">
          <img
            src={logo}
            alt="LLCA Logo"
            className="h-full w-auto object-contain"
            style={{ filter: 'invert(1) brightness(0.2)' }}
          />
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
        <p className="text-text-main/40 text-sm">© {new Date().getFullYear()} {t.rights}</p>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium">
        <a href="#" className="text-text-main/50 hover:text-text-main transition-colors">{t.privacy}</a>
        <a href="#" className="text-text-main/50 hover:text-text-main transition-colors">{t.terms}</a>
      </div>
    </div>
  </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : true; // Default to dark as per current design
    }
    return true;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`flex h-screen w-full bg-bg-app text-text-main font-sans overflow-hidden transition-colors duration-300`}>
      <Sidebar isDark={isDark} />
      <main className="flex-1 h-full overflow-y-auto relative scroll-smooth p-2 sm:p-4 lg:p-6 w-full">
        <div className="relative min-h-full flex flex-col w-full bg-bg-app">
          {/* Navbar sits inside the scrolling main container but sticky/absolute mapping handled within it */}
          <Navbar lang={lang} setLang={setLang} isDark={isDark} toggleTheme={toggleTheme} />

          <div className="flex flex-col gap-4 relative z-0">
            <Hero lang={lang} isDark={isDark} />
            <About lang={lang} />
            <Foundation lang={lang} />
            <Contact lang={lang} />
            <Footer lang={lang} />
          </div>
        </div>
      </main>
    </div>
  );
}


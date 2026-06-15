import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Sun, Moon, Linkedin, Facebook, Instagram } from 'lucide-react';
import logo from './assets/logo oficial.png';
import logoDark from './assets/logo oficial_dark.png';
import logo2 from './assets/2.png';
import { translations } from './translations';

type Language = 'pt' | 'en';

export const LangContext = React.createContext<{ lang: Language; setLang: (l: Language) => void }>({
  lang: 'pt',
  setLang: () => {},
});

export const ThemeContext = React.createContext<{ isDark: boolean; toggleTheme: () => void }>({
  isDark: true,
  toggleTheme: () => {},
});

const Sidebar = ({ isDark }: { isDark: boolean }) => (
  <div className="hidden lg:flex flex-col justify-between w-[120px] shrink-0 min-h-screen py-10 px-4 items-center bg-bg-app border-r border-border-main relative z-20 transition-colors duration-300">
    <div className="flex flex-col items-center gap-12">
      <div className="origin-center whitespace-nowrap mt-4 scale-125">
        <div className="flex h-12 w-32 items-center justify-center">
          <img src={isDark ? logo : logoDark} alt="LLCA Logo" className="h-full w-auto object-contain" />
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
  lang: Language; setLang: (l: Language) => void; isDark: boolean; toggleTheme: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="absolute top-0 w-full z-50 px-6 py-6 sm:px-12 sm:py-8 pointer-events-none">
      <div className="mx-auto flex w-full items-center justify-between pointer-events-auto">
        <nav className="hidden lg:flex items-center gap-2 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-border-main rounded-full p-2 transition-colors">
          {t.items.map((item) => (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              className={`text-sm font-medium px-6 py-2.5 rounded-full transition-all ${location.pathname === item.href ? 'bg-primary text-white' : 'text-text-main/70 hover:text-text-main hover:bg-black/5 dark:hover:bg-white/10'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="lg:hidden flex items-center">
          <h2 className="text-xl font-black text-text-main tracking-wider flex items-center gap-2 bg-bg-app/50 p-2 rounded-lg backdrop-blur-sm border border-border-main transition-colors">LLCA</h2>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="flex items-center justify-center w-10 h-10 rounded-full border border-border-main bg-black/5 dark:bg-white/5 text-text-main hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} className="flex items-center justify-center w-10 h-10 rounded-full border border-border-main bg-black/5 dark:bg-white/5 text-xs font-bold text-text-main hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer uppercase">
            {lang}
          </button>
          <button onClick={() => navigate('/contato')} className="hidden sm:flex rounded-full border border-border-main bg-transparent px-8 py-3 text-sm font-medium text-text-main hover:bg-text-main hover:text-bg-app transition-all cursor-pointer">
            {t.join}
          </button>
          <button className="lg:hidden p-3 text-text-main bg-black/5 dark:bg-white/10 backdrop-blur-md rounded-full border border-border-main hover:bg-black/10 dark:hover:bg-white/20 transition-all cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-[90px] left-6 right-6 rounded-3xl bg-card-bg/95 backdrop-blur-xl border border-border-main shadow-2xl p-6 pointer-events-auto z-50 transition-colors duration-300">
            <nav className="flex flex-col gap-2">
              {t.items.map((item, idx) => (
                <button key={item.href} onClick={() => { navigate(item.href); setIsOpen(false); }}
                  className={`text-lg font-medium p-4 rounded-2xl transition-all text-left w-full ${idx === 0 ? 'bg-primary/20 text-text-main font-bold' : 'text-text-main/70 hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-main'}`}>
                  {item.label}
                </button>
              ))}
              <hr className="border-border-main my-4" />
              <button onClick={() => { navigate('/contato'); setIsOpen(false); }} className="w-full rounded-2xl bg-secondary px-6 py-4 text-base font-bold text-white hover:brightness-110 transition-all cursor-pointer">
                {t.join}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang].footer;
  const navItems = translations[lang].nav.items;
  const navigate = useNavigate();

  return (
    <footer className="px-6 py-16 sm:px-12 border-t border-border-main bg-card-bg transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <img src={logo2} alt="LLCA Logo" className="h-12 w-auto object-contain object-left" />
          <p className="text-text-main/50 text-sm">{t.tagline}</p>
          <p className="text-text-main/40 text-sm">{t.address}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-text-main/50">{t.nav}</h4>
          <nav className="flex flex-col gap-2">
            {navItems.map(item => (
              <button key={item.href} onClick={() => navigate(item.href)} className="text-text-main/60 hover:text-text-main text-sm text-left transition-colors">{item.label}</button>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-text-main/50">{t.contactLabel}</h4>
          <p className="text-text-main/60 text-sm">contato@llca.org.br</p>
          <p className="text-text-main/60 text-sm">Pouso Alto, MG — Brasil</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-text-main/50">{t.updatesLabel}</h4>
          <p className="text-text-main/50 text-sm">{t.tagline}</p>
          <div className="flex gap-2">
            <input type="email" placeholder={t.newsletterPlaceholder} className="flex-1 bg-black/5 dark:bg-white/5 border border-border-main rounded-xl px-4 py-2 text-sm text-text-main placeholder:text-text-main/30 outline-none focus:border-secondary/50 transition-all" />
            <button className="rounded-xl bg-secondary px-4 py-2 text-sm font-bold text-white hover:brightness-110 transition-all">{t.newsletterCta}</button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border-main flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-main/40 text-xs">© {new Date().getFullYear()} LLCA. {t.rights}</p>
        <div className="flex gap-6">
          <a href="#" className="text-text-main/40 hover:text-text-main text-xs transition-colors">{t.privacy}</a>
          <a href="#" className="text-text-main/40 hover:text-text-main text-xs transition-colors">{t.terms}</a>
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
      return saved ? saved === 'dark' : true;
    }
    return true;
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) { root.classList.add('dark'); localStorage.setItem('theme', 'dark'); }
    else { root.classList.remove('dark'); localStorage.setItem('theme', 'light'); }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div className="flex h-screen w-full bg-bg-app text-text-main font-sans overflow-hidden transition-colors duration-300">
          <Sidebar isDark={isDark} />
          <main className="flex-1 h-full overflow-y-auto relative scroll-smooth p-2 sm:p-4 lg:p-6 w-full">
            <div className="relative min-h-full flex flex-col w-full bg-bg-app">
              <Navbar lang={lang} setLang={setLang} isDark={isDark} toggleTheme={toggleTheme} />
              <div className="flex flex-col gap-4 relative z-0">
                <Outlet />
                <Footer lang={lang} />
              </div>
            </div>
          </main>
        </div>
      </ThemeContext.Provider>
    </LangContext.Provider>
  );
}

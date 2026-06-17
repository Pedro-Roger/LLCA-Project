import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Linkedin, Facebook, Instagram } from 'lucide-react';
import logoDark from './assets/logo oficial_dark.png';
import logo2 from './assets/2.png';
import { translations } from './translations';

type Language = 'pt' | 'en';

export const LangContext = React.createContext<{ lang: Language; setLang: (l: Language) => void }>({
  lang: 'pt',
  setLang: () => {},
});

const Sidebar = () => (
  <div className="hidden lg:flex flex-col justify-between w-[120px] shrink-0 min-h-screen py-10 px-4 items-center bg-bg-app border-r border-border-main relative z-20">
    <div className="flex flex-col items-center gap-12">
      <div className="origin-center whitespace-nowrap mt-4 scale-125">
        <div className="flex h-12 w-32 items-center justify-center">
          <img src={logoDark} alt="LLCA Logo" className="h-full w-auto object-contain" />
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

const Navbar = ({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  // Hero escuro → estilo glassmorphism branco
  // Páginas claras → navbar navy sólida
  const navBg     = isHome ? 'bg-white/10 border-white/20'     : 'bg-white border-transparent shadow-md';
  const itemColor = isHome ? 'text-white/80 hover:text-white hover:bg-white/15' : 'text-navy/60 hover:text-navy hover:bg-black/5';
  const activeItem = isHome ? 'bg-white text-navy shadow-sm'   : 'bg-forest text-white';
  const langBtn   = isHome
    ? 'bg-white text-navy border-white/30 hover:bg-white/90 shadow-sm'
    : 'bg-white text-navy border-transparent hover:bg-white/90 shadow-md';
  const joinBtn   = isHome
    ? 'border-white/30 bg-white/10 text-white hover:bg-white hover:text-navy'
    : 'border-transparent bg-white text-navy hover:bg-white/90 shadow-md font-semibold';
  const mobileBtn = isHome ? 'text-white bg-white/10 border-white/20 hover:bg-white/20' : 'text-white bg-white/10 border-white/20 hover:bg-white/20';
  const mobileBrand = isHome ? 'text-white bg-navy/40 border-white/20' : 'text-white bg-navy border-transparent';

  return (
    <header className="absolute top-0 w-full z-50 px-6 py-6 sm:px-12 sm:py-8 pointer-events-none">
      <div className="mx-auto flex w-full items-center justify-between pointer-events-auto">
        <nav className={`hidden lg:flex items-center gap-1 backdrop-blur-md border rounded-full p-1.5 transition-colors duration-300 ${navBg}`}>
          {t.items.map((item) => (
            <button
              key={item.href}
              onClick={() => navigate(item.href)}
              className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${location.pathname === item.href ? activeItem : itemColor}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="lg:hidden flex items-center">
          <h2 className={`text-xl font-black tracking-wider flex items-center gap-2 p-2 rounded-lg backdrop-blur-sm border ${mobileBrand}`}>LLCA</h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            className={`flex items-center justify-center w-10 h-10 rounded-full border text-xs font-bold transition-all cursor-pointer uppercase shadow-sm ${langBtn}`}
          >
            {lang}
          </button>
          <button
            onClick={() => navigate('/contato')}
            className={`hidden sm:flex rounded-full border backdrop-blur-sm px-7 py-2.5 text-sm font-medium transition-all cursor-pointer ${joinBtn}`}
          >
            {t.join}
          </button>
          <button
            className={`lg:hidden p-3 backdrop-blur-md rounded-full border transition-all cursor-pointer ${mobileBtn}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden absolute top-[90px] left-6 right-6 rounded-3xl bg-navy/95 backdrop-blur-xl border border-white/10 shadow-2xl p-6 pointer-events-auto z-50">
            <nav className="flex flex-col gap-2">
              {t.items.map((item) => (
                <button key={item.href} onClick={() => { navigate(item.href); setIsOpen(false); }}
                  className={`text-lg font-medium p-4 rounded-2xl transition-all text-left w-full ${location.pathname === item.href ? 'bg-forest text-white font-bold' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
                  {item.label}
                </button>
              ))}
              <hr className="border-white/10 my-4" />
              <button onClick={() => { navigate('/contato'); setIsOpen(false); }} className="w-full rounded-2xl bg-forest px-6 py-4 text-base font-bold text-white hover:brightness-110 transition-all cursor-pointer">
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
    <footer className="px-6 py-16 sm:px-12 border-t border-border-main bg-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-4">
          <img src={logo2} alt="LLCA Logo" className="h-12 w-auto object-contain object-left" />
          <p className="text-neutral text-sm">{t.tagline}</p>
          <p className="text-text-main/40 text-sm">{t.address}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-text-main/50">{t.nav}</h4>
          <nav className="flex flex-col gap-2">
            {navItems.map(item => (
              <button key={item.href} onClick={() => navigate(item.href)} className="text-neutral hover:text-navy text-sm text-left transition-colors">{item.label}</button>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-text-main/50">{t.contactLabel}</h4>
          <p className="text-neutral text-sm">contato@llca.org.br</p>
          <p className="text-neutral text-sm">Pouso Alto, MG — Brasil</p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-bold uppercase tracking-widest text-text-main/50">{t.updatesLabel}</h4>
          <p className="text-neutral text-sm">{t.tagline}</p>
          <div className="flex gap-2">
            <input type="email" placeholder={t.newsletterPlaceholder} className="flex-1 bg-bg-app border border-border-main rounded-xl px-4 py-2 text-sm text-text-main placeholder:text-neutral/60 outline-none focus:border-secondary/50 transition-all" />
            <button className="rounded-xl bg-secondary px-4 py-2 text-sm font-bold text-white hover:brightness-110 transition-all">{t.newsletterCta}</button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border-main flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-main/40 text-xs">© {new Date().getFullYear()} LLCA. {t.rights}</p>
        <div className="flex gap-6">
          <a href="#" className="text-neutral hover:text-navy text-xs transition-colors">{t.privacy}</a>
          <a href="#" className="text-neutral hover:text-navy text-xs transition-colors">{t.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('pt');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="flex h-screen w-full bg-bg-app text-text-main font-sans overflow-hidden">
        <Sidebar />
        <main className="flex-1 h-full overflow-y-auto relative scroll-smooth p-2 sm:p-4 lg:p-6 w-full">
          <div className="relative min-h-full flex flex-col w-full bg-bg-app">
            <Navbar lang={lang} setLang={setLang} />
            <div className="flex flex-col gap-4 relative z-0">
              <Outlet />
              <Footer lang={lang} />
            </div>
          </div>
        </main>
      </div>
    </LangContext.Provider>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import heroVideo from "./assets/Video.mp4";
import logo from "./assets/logo_llca.png";
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
  Moon,
  Sun
} from "lucide-react";

const Navbar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full px-4 py-3 sm:px-6 sm:py-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-slate-900/80 dark:bg-slate-800/80 px-4 sm:px-8 py-3 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="LLCA Logo" className="h-8 w-auto sm:h-10 object-contain" />
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-8">
            {['Home', 'Sobre', 'Contato'].map((item) => (
              <a key={item} className="text-sm font-semibold text-white/80 hover:text-white transition-colors" href="#">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </button>
            <button className="hidden sm:block rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
              Faça parte
            </button>
            <button
              className="lg:hidden p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-all cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-[80px] left-4 right-4 sm:left-6 sm:right-6 rounded-3xl bg-slate-900/95 dark:bg-slate-800/95 backdrop-blur-xl border border-white/10 shadow-2xl p-6"
          >
            <nav className="flex flex-col gap-4">
              {['Home', 'Sobre', 'Contato'].map((item) => (
                <a
                  key={item}
                  className="text-lg font-bold text-white/90 hover:text-white transition-colors"
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-white/10 my-2" />
              <button className="w-full rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
                Faça parte
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden min-h-screen flex items-center">
    {/* Vídeo de fundo */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
    {/* Overlay escuro para legibilidade */}
    <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />

    <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:py-48">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-8 max-w-2xl"
      >
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/20 px-4 py-1 text-sm font-bold text-secondary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          ISO 9001 Certified Excellence
        </div>
        <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white lg:text-7xl">
          Laboratórios <span className="text-blue-400">Lygia Costa</span> Alvernaz
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer">
            Faça parte
          </button>
          <button className="rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all cursor-pointer">
            Our Services
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section className="bg-slate-50 dark:bg-slate-900/50 px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Lorem Ipsum</h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Beaker, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.", color: "primary" },
          { icon: Users, title: "Dolor Sit Amet", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.", color: "secondary" },
          { icon: Timer, title: "Consectetur Elit", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", color: "primary" }
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-8 shadow-sm transition-all hover:shadow-md"
          >
            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary' : 'bg-secondary/10 text-secondary group-hover:bg-secondary'} group-hover:text-white transition-colors`}>
              <feature.icon className="h-8 w-8" />
            </div>
            <h3 className="mb-3 text-xl font-bold dark:text-white">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Updates = () => (
  <section className="px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-black tracking-tight dark:text-white">Lorem Ipsum Sit</h2>
          <p className="text-slate-600 dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <a className="hidden sm:flex items-center gap-2 font-bold text-primary dark:text-blue-400 hover:text-secondary transition-colors" href="#">
          Lorem Ipsum <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            tag: "New Opening",
            title: "New Unit Opening Downtown",
            date: "Jan 20, 2024",
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
          },
          {
            tag: "Education",
            title: "Preventive Exams Seminar",
            date: "Jan 15, 2024",
            img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
          },
          {
            tag: "Science",
            title: "New DNA Testing Panels",
            date: "Jan 08, 2024",
            img: "https://images.unsplash.com/photo-1532187875605-1ef640a18eb5?auto=format&fit=crop&q=80&w=800"
          }
        ].map((update, idx) => (
          <article key={idx} className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-all">
            <div className="aspect-video w-full overflow-hidden">
              <img src={update.img} alt={update.title} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col gap-3 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">{update.tag}</span>
              <h3 className="text-xl font-bold leading-tight dark:text-white">{update.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">{update.date}</span>
                <button className="text-sm font-bold text-primary dark:text-blue-400 hover:underline cursor-pointer">Read More</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="bg-white dark:bg-slate-900 px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        {/* Lado Esquerdo - Formulário */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
              Envie uma mensagem
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nome Completo</label>
                <input
                  type="text"
                  placeholder="Ex: João Silva"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 py-2 text-slate-900 dark:text-white focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">E-mail</label>
                <input
                  type="email"
                  placeholder="joao@exemplo.com"
                  className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 py-2 text-slate-900 dark:text-white focus:border-primary dark:focus:border-blue-400 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assunto</label>
              <select className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 py-2 text-slate-900 dark:text-white focus:border-primary dark:focus:border-blue-400 outline-none transition-colors appearance-none cursor-pointer">
                <option value="duvida" className="dark:bg-slate-800">Dúvida Geral</option>
                <option value="exame" className="dark:bg-slate-800">Agendamento de Exame</option>
                <option value="resultado" className="dark:bg-slate-800">Resultados</option>
                <option value="doacao" className="dark:bg-slate-800">Apoio a Instituição (Doação)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mensagem</label>
              <textarea
                placeholder="Como podemos ajudar?"
                rows={4}
                className="w-full bg-transparent border-b border-slate-200 dark:border-slate-700 py-2 text-slate-900 dark:text-white focus:border-primary dark:focus:border-blue-400 outline-none transition-colors resize-none"
              />
            </div>

            <div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-opacity-90 px-8 py-4 text-sm font-bold text-white transition-all cursor-pointer"
              >
                Enviar Mensagem <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Lado Direito - Info de Contato & Mapa */}
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-10 sm:p-12 text-white shadow-2xl">
          <div className="relative z-10 flex flex-col gap-10">

            <div className="flex gap-4 items-start">
              <div className="rounded-full bg-white/10 p-3 shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Telefone</span>
                <span className="text-lg font-bold">+55 (11) 9999-9999</span>
                <span className="text-sm text-white/70">Seg - Sex, 9h às 18h</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="rounded-full bg-white/10 p-3 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">E-mail</span>
                <span className="text-lg font-bold">contato@llca.com.br</span>
                <span className="text-sm text-white/70">suporte@llca.com.br</span>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="rounded-full bg-white/10 p-3 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-1">Escritório</span>
                <span className="text-lg font-bold">Av. Paulista, 1000 - Bela Vista</span>
                <span className="text-sm text-white/70">São Paulo - SP, 01310-100</span>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl bg-white/20 aspect-video relative flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&sat=-100"
                alt="Map Location"
                className="absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
              <div className="relative z-10 rounded-full bg-slate-800 p-4 shadow-xl">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>

          </div>

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 dark:bg-slate-950 px-6 py-16 text-slate-400">
    <div className="mx-auto max-w-7xl grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-white">
          <img src={logo} alt="LLCA Logo" className="h-14 w-auto object-contain" />
        </div>
        <p className="text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex gap-4">
          <a className="hover:text-white transition-colors" href="#"><Globe className="h-5 w-5" /></a>
          <a className="hover:text-white transition-colors" href="#"><Share2 className="h-5 w-5" /></a>
          <a className="hover:text-white transition-colors" href="#"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
      <div>
        <h4 className="mb-6 font-bold text-white">Lorem Ipsum</h4>
        <ul className="flex flex-col gap-4 text-sm">
          {['Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur', 'Adipiscing Elit'].map(link => (
            <li key={link}><a className="hover:text-secondary transition-colors" href="#">{link}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-6 font-bold text-white">Contact</h4>
        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary dark:text-blue-400" /> +55 (11) 5555-0123</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary dark:text-blue-400" /> Av. Central, 1234 - São Paulo, SP</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary dark:text-blue-400" /> contato@llca.com.br</li>
        </ul>
      </div>
      <div>
        <h4 className="mb-6 font-bold text-white">Lorem</h4>
        <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex gap-2">
          <input className="w-full rounded-lg border-none bg-slate-800 px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Email" type="email" />
          <button className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-opacity-90 transition-all cursor-pointer">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl mt-16 border-t border-slate-800 pt-8 text-center text-xs">
      <p>© 2024 Laboratórios Lygia Costa Alvernaz. All rights reserved.</p>
    </div>
  </footer >
);

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Features />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

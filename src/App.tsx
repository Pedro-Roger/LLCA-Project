import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
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
  Linkedin,
  Facebook,
  Instagram,
  ArrowDownRight
} from "lucide-react";

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 px-6 py-6 sm:px-12 sm:py-8 pointer-events-none">
      <div className="mx-auto flex w-full items-center justify-between pointer-events-auto">
        <nav className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-2">
          {['Home', 'Sobre', 'Contato'].map((item, idx) => (
            <a
              key={item}
              className={`text-sm font-medium px-6 py-2.5 rounded-full transition-all ${idx === 0 ? 'bg-primary text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
              href="#"
            >
              {item}
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
          <button className="hidden sm:flex rounded-full border border-white/20 bg-transparent px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-bg-dark transition-all cursor-pointer">
            Faça parte
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
              {['Home', 'Sobre', 'Contato'].map((item, idx) => (
                <a
                  key={item}
                  className={`text-lg font-medium p-4 rounded-2xl transition-all ${idx === 0 ? 'bg-primary/20 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
                  href="#"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <hr className="border-white/10 my-4" />
              <button className="w-full rounded-2xl bg-secondary px-6 py-4 text-base font-bold text-white hover:brightness-110 transition-all cursor-pointer">
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
  <section className="relative w-full h-full min-h-[85vh] flex items-center overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 shadow-2xl bg-card-dark isolate">
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
          Laboratórios <br />
          <span className="text-blue-400">Lygia Costa</span> Alvernaz
        </h1>
        <p className="max-w-md text-base sm:text-lg leading-relaxed text-slate-300 font-light backdrop-blur-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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

    {/* Bottom Left Call to Action Pill */}
    <div className="absolute bottom-8 left-6 sm:left-12 z-20">
      <button className="flex items-center gap-4 rounded-full bg-card-dark/80 backdrop-blur-xl border border-white/10 p-2 pr-6 hover:bg-card-dark transition-colors cursor-pointer group">
        <div className="bg-primary text-white rounded-full p-3 group-hover:scale-110 transition-transform">
          <ArrowRight className="w-5 h-5 -rotate-45" />
        </div>
        <span className="text-sm font-medium text-white">Nossos Serviços</span>
      </button>
    </div>
  </section>
);

const Features = () => (
  <section className="px-6 py-24 sm:px-12">
    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div>
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Sobre</span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">Lorem Ipsum</h2>
      </div>
      <p className="max-w-md text-slate-400 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { icon: Beaker, title: "Lorem Ipsum", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.", color: "primary" },
        { icon: Users, title: "Dolor Sit Amet", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.", color: "secondary" },
        { icon: Timer, title: "Consectetur Elit", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", color: "primary" }
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl border border-white/5 bg-card-dark/50 p-8 hover:bg-white/5 transition-all overflow-hidden isolate"
        >
          <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10" />
          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-slate-300 group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-white/5">
            <feature.icon className="h-8 w-8" />
          </div>
          <h3 className="mb-4 text-2xl font-bold text-white tracking-tight">{feature.title}</h3>
          <p className="text-slate-400 font-light leading-relaxed">{feature.desc}</p>
          <div className="mt-8 flex w-12 h-12 rounded-full border border-white/10 items-center justify-center text-slate-500 group-hover:border-primary/50 group-hover:text-primary transition-colors cursor-pointer">
            <ArrowRight className="w-5 h-5 -rotate-45" />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section className="px-6 py-24 sm:px-12 relative overflow-hidden">
    {/* Glow background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 mix-blend-screen pointer-events-none" />

    <div className="w-full rounded-[3rem] border border-white/10 bg-card-dark/80 backdrop-blur-md p-8 sm:p-16 shadow-2xl">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Contato</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.1]">
              Envie uma <br />Mensagem
            </h2>
            <p className="mt-6 text-slate-400 font-light text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">E-mail</p>
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
            <h3 className="text-2xl font-bold text-white mb-4">Envie uma mensagem</h3>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Nome Completo</label>
              <input
                type="text"
                placeholder="Ex: João Silva"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">E-mail</label>
              <input
                type="email"
                placeholder="joao@exemplo.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Assunto</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer">
                <option value="duvida" className="bg-bg-dark">Dúvida Geral</option>
                <option value="exame" className="bg-bg-dark">Agendamento de Exame</option>
                <option value="resultado" className="bg-bg-dark">Resultados</option>
                <option value="doacao" className="bg-bg-dark">Apoio a Instituição (Doação)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Mensagem</label>
              <textarea
                placeholder="Como podemos ajudar?"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:border-secondary/50 focus:bg-white/10 outline-none transition-all resize-none"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-2xl bg-secondary hover:brightness-110 px-8 py-4 text-base font-bold text-white transition-all cursor-pointer mt-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="px-6 py-12 sm:px-12 border-t border-white/10 mt-12 bg-card-dark">
    <div className="flex flex-col gap-8 md:flex-row items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black text-white tracking-widest flex items-center gap-2">
          LLCA
        </h2>
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
        <p className="text-slate-500 text-sm">© 2024 Laboratórios Lygia Costa Alvernaz.</p>
      </div>

      <div className="flex items-center gap-8 text-sm font-medium">
        <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="flex h-screen w-full bg-bg-dark text-slate-100 font-sans overflow-hidden">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto relative scroll-smooth p-2 sm:p-4 lg:p-6 w-full">
        <div className="relative min-h-full flex flex-col w-full bg-bg-dark">
          {/* Navbar sits inside the scrolling main container but sticky/absolute mapping handled within it */}
          <Navbar />

          <div className="flex flex-col gap-4 relative z-0">
            <Hero />
            <Features />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}


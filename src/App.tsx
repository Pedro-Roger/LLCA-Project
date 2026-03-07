import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Beaker, 
  Users, 
  Timer, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  Globe, 
  Share2, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Moon,
  Sun
} from "lucide-react";

const Navbar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => (
  <header className="fixed top-0 z-50 w-full px-6 py-4">
    <motion.div 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-slate-900/60 dark:bg-slate-800/60 px-8 py-3 backdrop-blur-xl border border-white/10 shadow-2xl"
    >
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-lg p-1">
          <Beaker className="h-6 w-6 text-primary" />
        </div>
        <span className="text-xl font-black tracking-tight text-white">LLCA.</span>
      </div>
      <div className="flex items-center gap-6">
        <nav className="hidden lg:flex items-center gap-8">
          {['Home', 'Sobre', 'Serviços', 'Unidades', 'Resultados', 'Contato'].map((item) => (
            <a key={item} className="text-sm font-semibold text-white/80 hover:text-white transition-colors" href="#">{item}</a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-all cursor-pointer">
            Agendar Exame
          </button>
          <button className="lg:hidden p-1 text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden px-6 pt-32 pb-16 lg:pt-48 lg:pb-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8 z-10"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary/10 px-4 py-1 text-sm font-bold text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            ISO 9001 Certified Excellence
          </div>
          <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white lg:text-7xl">
            Laboratórios <span className="text-primary dark:text-blue-400">Lygia Costa</span> Alvernaz
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Excelência em diagnósticos laboratoriais com tecnologia de ponta e cuidado humanizado. Transformando ciência em tranquilidade para sua saúde.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-xl hover:translate-y-[-2px] transition-all cursor-pointer">
              Schedule an Exam
            </button>
            <button className="rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-transparent px-8 py-4 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer dark:text-white">
              Our Services
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="aspect-square w-full overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=1000" 
              alt="High-tech laboratory" 
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -bottom-6 -left-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-6 shadow-xl border border-white/20 dark:border-white/10 max-w-[240px]"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary/20 p-3 text-secondary">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold dark:text-white">25+ Years</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Trusted Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
    <div className="absolute top-0 right-0 -z-10 h-full w-1/2 opacity-20 pointer-events-none">
      <svg className="h-full w-full fill-primary/10 dark:fill-blue-400/10" viewBox="0 0 100 100">
        <circle cx="100" cy="0" r="80"></circle>
      </svg>
    </div>
  </section>
);

const Features = () => (
  <section className="bg-slate-50 dark:bg-slate-900/50 px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="mb-4 text-4xl font-black tracking-tight text-slate-900 dark:text-white">Why choose us</h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          We combine decades of experience with the latest scientific advancements to provide accurate results and support your health journey.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Beaker, title: "Advanced Technology", desc: "Equipped with state-of-the-art diagnostic machinery for the highest precision in every test result.", color: "primary" },
          { icon: Users, title: "Specialized Team", desc: "Highly qualified professionals including doctors and scientists dedicated to personalized human care.", color: "secondary" },
          { icon: Timer, title: "Fast Results", desc: "Efficient processing and digital delivery to provide your medical reports as quickly as possible.", color: "primary" }
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
          <h2 className="mb-2 text-3xl font-black tracking-tight dark:text-white">Latest Updates</h2>
          <p className="text-slate-600 dark:text-slate-400">Stay informed about our health tips and new facilities.</p>
        </div>
        <a className="hidden sm:flex items-center gap-2 font-bold text-primary dark:text-blue-400 hover:text-secondary transition-colors" href="#">
          View All News <ArrowRight className="h-4 w-4" />
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
              <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">Descubra as últimas novidades e avanços em diagnósticos laboratoriais para sua saúde.</p>
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

const CTA = () => (
  <section className="mx-auto max-w-7xl px-6 pb-24">
    <div className="relative overflow-hidden rounded-3xl bg-primary dark:bg-slate-800 px-8 py-16 text-center text-white lg:px-16 lg:py-20">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-black lg:text-5xl">Ready to take care of your health?</h2>
        <p className="max-w-xl text-lg text-slate-300">Schedule your exams today or visit one of our units without an appointment.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-secondary px-10 py-4 text-base font-bold shadow-lg hover:bg-opacity-90 transition-all cursor-pointer">
            Book Online Now
          </button>
          <button className="rounded-xl border border-white/30 bg-white/10 px-10 py-4 text-base font-bold backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer">
            Contact Support
          </button>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 dark:bg-slate-950 px-6 py-16 text-slate-400">
    <div className="mx-auto max-w-7xl grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 text-white">
          <div className="bg-white rounded p-1">
            <Beaker className="h-5 w-5 text-primary" />
          </div>
          <span className="text-xl font-bold">LLCA</span>
        </div>
        <p className="text-sm leading-relaxed">
          Providing high-quality diagnostic services with commitment and precision since 1998. Your health is our priority.
        </p>
        <div className="flex gap-4">
          <a className="hover:text-white transition-colors" href="#"><Globe className="h-5 w-5" /></a>
          <a className="hover:text-white transition-colors" href="#"><Share2 className="h-5 w-5" /></a>
          <a className="hover:text-white transition-colors" href="#"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
      <div>
        <h4 className="mb-6 font-bold text-white">Quick Links</h4>
        <ul className="flex flex-col gap-4 text-sm">
          {['Our History', 'Exams List', 'Insurance Providers', 'Results Portal'].map(link => (
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
        <h4 className="mb-6 font-bold text-white">Newsletter</h4>
        <p className="mb-4 text-sm">Get health tips and news delivered to your inbox.</p>
        <div className="flex gap-2">
          <input className="w-full rounded-lg border-none bg-slate-800 px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none" placeholder="Email" type="email"/>
          <button className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-opacity-90 transition-all cursor-pointer">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
    <div className="mx-auto max-w-7xl mt-16 border-t border-slate-800 pt-8 text-center text-xs">
      <p>© 2024 Laboratórios Lygia Costa Alvernaz. All rights reserved.</p>
    </div>
  </footer>
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
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

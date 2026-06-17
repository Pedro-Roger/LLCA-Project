import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin } from 'lucide-react';
import { translations } from '../translations';
import { LangContext } from '../App';

export default function Contato() {
  const { lang } = React.useContext(LangContext);
  const t = translations[lang].contato;
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'producer', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!FORMSPREE_ID) {
      setError('Formulário não configurado. Adicione VITE_FORMSPREE_ID no .env');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          assunto: formData.subject,
          mensagem: formData.message,
        }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: 'producer', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? 'Erro ao enviar. Tente novamente.');
      }
    } catch {
      setError('Sem conexão. Verifique sua internet e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-4 pt-24">
      {/* BLOCK 1 — HEADLINE */}
      <section className="px-6 py-16 sm:px-12">
        <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">{t.tag}</span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-text-main mb-6">{t.headline}</h1>
        <p className="text-text-main/60 font-light text-lg max-w-2xl">{t.subtitle}</p>
      </section>

      {/* BLOCK 2 — TRÊS CAMINHOS */}
      <section className="px-6 py-8 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {t.cards.map((card, idx) => (
            <motion.div key={idx} whileHover={{ y: -4 }}
              className="p-8 rounded-3xl border border-border-main bg-card-bg flex flex-col gap-4 group">
              <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-sm font-bold">{idx + 1}</div>
              <h3 className="text-xl font-bold text-text-main group-hover:text-secondary transition-colors">{card.title}</h3>
              <p className="text-text-main/60 font-light text-sm leading-relaxed flex-1">{card.desc}</p>
              <button className="rounded-xl border border-secondary/30 text-secondary text-sm font-medium px-4 py-2.5 hover:bg-secondary hover:text-white transition-all">
                {card.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BLOCK 3 — FORM + INFO */}
      <section className="px-6 py-8 sm:px-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="rounded-4xl border border-border-main bg-card-bg p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-black text-text-main mb-2">{t.info.name}</h2>
                <p className="text-text-main/50 text-sm">{t.info.cnpj}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-bg-app border border-border-main">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p className="text-text-main text-sm">{t.info.location}</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-bg-app border border-border-main">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <p className="text-text-main text-sm">{t.info.email}</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-bg-app rounded-4xl p-8 border border-border-main">
              <h3 className="text-xl font-bold text-text-main mb-2">{t.form.title}</h3>
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="bg-forest/10 border border-forest text-forest px-5 py-3 rounded-2xl text-sm font-medium">
                    ✓ Mensagem enviada! Entraremos em contato em breve.
                  </motion.div>
                )}
                {error && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                    className="bg-red-50 border border-red-300 text-red-700 px-5 py-3 rounded-2xl text-sm font-medium">
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.name}</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange}
                  placeholder={t.form.namePlaceholder}
                  className="w-full bg-bg-app border border-border-main rounded-2xl px-5 py-3.5 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 outline-none transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.email}</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder={t.form.emailPlaceholder}
                  className="w-full bg-bg-app border border-border-main rounded-2xl px-5 py-3.5 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 outline-none transition-all text-sm" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.subject}</label>
                <select name="subject" value={formData.subject} onChange={handleChange}
                  className="w-full bg-bg-app border border-border-main rounded-2xl px-5 py-3.5 text-text-main outline-none transition-all appearance-none cursor-pointer text-sm focus:border-secondary/50">
                  <option value="producer" className="bg-bg-app">{t.form.subjects.producer}</option>
                  <option value="partner" className="bg-bg-app">{t.form.subjects.partner}</option>
                  <option value="researcher" className="bg-bg-app">{t.form.subjects.researcher}</option>
                  <option value="other" className="bg-bg-app">{t.form.subjects.other}</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-main/50 uppercase tracking-wider">{t.form.message}</label>
                <textarea name="message" required value={formData.message} onChange={handleChange}
                  placeholder={t.form.messagePlaceholder} rows={4}
                  className="w-full bg-bg-app border border-border-main rounded-2xl px-5 py-3.5 text-text-main placeholder:text-text-main/30 focus:border-secondary/50 outline-none transition-all resize-none text-sm" />
              </div>
              <button type="submit" disabled={isSubmitting}
                className={`w-full rounded-2xl bg-secondary px-6 py-4 text-sm font-bold text-white hover:brightness-110 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting
                  ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando...</>
                  : t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="pb-16" />
    </div>
  );
}

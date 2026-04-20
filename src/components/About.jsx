import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { about, t } from '../data/content'

export default function About() {
  const { lang } = useLang()

  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
            <span className="w-8 h-[2px] bg-cyan-400 block" />
            {t(about.tag, lang)}
          </div>
          <h2
            className="font-black leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t(about.titleA, lang)}<br />
            <span className="gradient-text">{t(about.titleB, lang)}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── TEXT + CARDS ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 mb-10">
              {[about.p1, about.p2, about.p3].map((p, i) => (
                <p key={i} className="text-slate-400 text-lg leading-relaxed">
                  {t(p, lang)}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {about.cards.map((card, i) => (
                <motion.div
                  key={i}
                  className="glass rounded-2xl p-5 glass-hover transition-all duration-300 relative overflow-hidden group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="text-2xl mb-3 block">{card.icon}</span>
                  <h3 className="font-bold text-white text-sm mb-1">
                    {lang === 'en' ? card.en : card.ru}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {lang === 'en' ? card.descEn : card.descRu}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── PHOTO ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ filter: 'blur(70px)', background: 'radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, rgba(124,58,237,0.15) 60%, transparent 100%)' }}
            />
            <div className="relative">
              <div
                className="rounded-3xl shadow-[0_0_60px_rgba(6,182,212,0.2)]"
                style={{ padding: 2, background: 'linear-gradient(135deg, #06b6d4, rgba(124,58,237,0.3), #7c3aed)' }}
              >
                <div className="rounded-3xl overflow-hidden bg-[#070711] relative">
                  <img
                    src="/images/EVG28162.jpg"
                    alt="Yaroslav Kulmatov"
                    className="w-full object-cover object-top"
                    style={{ maxWidth: 380, height: 520 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070711]/60 to-transparent" />
                </div>
              </div>

              {/* Floating info chip */}
              <motion.div
                className="absolute -bottom-4 -left-6 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-3 shadow-xl"
                style={{ background: 'rgba(13,13,26,0.92)' }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-xs text-slate-500 mb-0.5">
                  {lang === 'en' ? 'Based in' : 'Локация'}
                </div>
                <div className="font-semibold text-slate-200 text-sm">🇰🇿 Kazakhstan</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

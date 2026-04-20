import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { hero, t } from '../data/content'
import { useTypewriter } from '../hooks/useTypewriter'

const floatingBadges = [
  { label: 'React',      style: { top: '10%',  right: '-24px' }, delay: 0   },
  { label: 'TypeScript', style: { top: '28%',  left:  '-8px'  }, delay: 1.2 },
  { label: 'Node.js',    style: { bottom: '28%', right: '-20px' }, delay: 0.6 },
  { label: 'Next.js',    style: { bottom: '14%', left:  '8px'  }, delay: 1.8 },
]

export default function Hero() {
  const { lang } = useLang()
  const text = useTypewriter(hero.phrases[lang])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">

        {/* ── LEFT ─────────────────────────────────────────── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 border border-cyan-500/30 rounded-full px-4 py-2 bg-cyan-500/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" />
            {t(hero.badge, lang)}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-black leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)' }}
          >
            <span className="block text-white">Yaroslav</span>
            <span className="block gradient-text-animated">Kulmatov</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-mono text-slate-400 mb-6 min-h-[2em]"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)' }}
          >
            {text}
            <span className="inline-block w-[3px] h-[1.1em] bg-violet-400 ml-1 align-text-bottom cursor-blink" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed"
          >
            {t(hero.desc, lang)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 flex-wrap mb-16"
          >
            <a
              href="#projects"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white overflow-hidden group"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{t(hero.cta1, lang)}</span>
              <svg className="relative z-10 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-semibold text-slate-400 border border-white/10 hover:border-violet-500/50 hover:text-white hover:bg-violet-500/10 transition-all duration-300"
            >
              {t(hero.cta2, lang)}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-12"
          >
            {hero.stats.map((s, i) => (
              <div key={i}>
                <span className="block font-mono font-black text-3xl gradient-text">{s.num}</span>
                <span className="text-sm text-slate-500 font-medium">{lang === 'en' ? s.en : s.ru}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: PHOTO ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Glow blob */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ filter: 'blur(80px)', background: 'radial-gradient(ellipse, rgba(124,58,237,0.28) 0%, rgba(6,182,212,0.15) 60%, transparent 100%)' }}
          />

          {/* Photo frame */}
          <div className="relative" style={{ width: 360 }}>
            <div
              className="rounded-3xl shadow-[0_0_80px_rgba(124,58,237,0.25)]"
              style={{ padding: 2, background: 'linear-gradient(135deg, #7c3aed, rgba(6,182,212,0.3), #06b6d4)' }}
            >
              <div className="rounded-3xl overflow-hidden bg-[#070711] relative">
                <img
                  src="/images/IMG_5614.PNG"
                  alt="Yaroslav Kulmatov"
                  className="w-full object-cover object-top"
                  style={{ height: 500 }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070711] to-transparent" />
              </div>
            </div>

            {/* Floating tech badges */}
            {floatingBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                className="absolute font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-violet-500/40 text-violet-300 backdrop-blur-md shadow-lg"
                style={{ ...badge.style, background: 'rgba(13,13,26,0.9)' }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: badge.delay, ease: 'easeInOut' }}
              >
                {badge.label}
              </motion.div>
            ))}

            {/* Experience card */}
            <motion.div
              className="absolute -bottom-5 -right-5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 shadow-2xl"
              style={{ background: 'rgba(13,13,26,0.92)' }}
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="font-mono font-black text-2xl gradient-text">4+</div>
              <div className="text-xs text-slate-400 font-medium whitespace-nowrap">
                {lang === 'en' ? 'Years Exp.' : 'Лет опыта'}
              </div>
            </motion.div>

            {/* Open to work badge */}
            <motion.div
              className="absolute -top-4 -left-4 backdrop-blur-md border border-cyan-500/30 rounded-xl px-4 py-3 shadow-lg"
              style={{ background: 'rgba(13,13,26,0.92)' }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.8, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-xs font-mono font-semibold text-slate-300">
                  {lang === 'en' ? 'Open to work' : 'Открыт к работе'}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { skills, t } from '../data/content'

export default function Skills() {
  const { lang } = useLang()

  return (
    <section
      id="skills"
      className="py-32"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 60%)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
            {t(skills.tag, lang)}
          </div>
          <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="text-white">{lang === 'en' ? 'My Tech ' : 'Мой '}</span>
            <span className="gradient-text">{lang === 'en' ? 'Stack' : 'Стек'}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.categories.map((cat, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-6 glass-hover transition-all duration-300 group relative overflow-hidden cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/15 text-xl shrink-0">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-white text-sm">
                  {lang === 'en' ? cat.en : cat.ru}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.tags.map((tag, j) => (
                  <motion.span
                    key={tag}
                    className="font-mono text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-slate-400 hover:bg-violet-500/20 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200 cursor-default"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 + j * 0.025 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

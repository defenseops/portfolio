import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { projects } from '../data/content'

function GithubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Projects() {
  const { lang } = useLang()

  return (
    <section id="projects" className="py-32">
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
            {lang === 'en' ? "What I've built" : 'Что я создал'}
          </div>
          <h2 className="font-black" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="text-white">{lang === 'en' ? 'Featured ' : 'Избранные '}</span>
            <span className="gradient-text">{lang === 'en' ? 'Projects' : 'Проекты'}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="glass rounded-2xl p-7 glass-hover transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.06] to-cyan-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-start justify-between mb-5 relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border border-violet-500/20"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))' }}
                >
                  {p.icon}
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.github}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-slate-500 hover:text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all duration-200"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={p.live}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>

              <h3 className="font-bold text-white text-lg mb-2 relative z-10">
                {lang === 'en' ? p.en : p.ru}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 relative z-10">
                {lang === 'en' ? p.descEn : p.descRu}
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {p.stack.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-xs font-medium px-3 py-1 rounded-md bg-violet-500/15 border border-violet-500/20 text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

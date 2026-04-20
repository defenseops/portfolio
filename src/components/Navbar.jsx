import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { nav, t } from '../data/content'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about',    label: t(nav.about,    lang) },
    { href: '#skills',   label: t(nav.skills,   lang) },
    { href: '#projects', label: t(nav.projects, lang) },
    { href: '#contact',  label: t(nav.contact,  lang) },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#070711]/80 border-b border-violet-500/20 shadow-[0_4px_30px_rgba(124,58,237,0.08)]'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <a href="#hero" className="font-mono font-bold text-lg gradient-text">YK.dev</a>

      <ul className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className="relative text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <motion.button
          onClick={toggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="font-mono text-xs font-bold px-4 py-2 rounded-full border border-violet-500/50 text-violet-400 hover:bg-violet-500/20 hover:shadow-[0_0_16px_rgba(124,58,237,0.4)] transition-all duration-200"
        >
          {lang === 'en' ? 'RU' : 'EN'}
        </motion.button>

        <button
          onClick={() => setMobileOpen(v => !v)}
          className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 border border-white/10 rounded-lg p-2"
        >
          <span className={`block w-full h-[2px] bg-slate-400 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-full h-[2px] bg-slate-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-[2px] bg-slate-400 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 backdrop-blur-xl bg-[#070711]/95 border-b border-white/10 px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-white font-medium transition-colors text-lg"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

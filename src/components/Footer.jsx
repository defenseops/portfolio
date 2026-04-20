import { useLang } from '../context/LangContext'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-8 text-center">
      <p className="font-mono text-sm text-slate-600">
        {lang === 'en' ? 'Designed & Built by' : 'Разработано'}{' '}
        <span className="text-pink-500">♥</span>{' '}
        Yaroslav Kulmatov · 2024
      </p>
    </footer>
  )
}

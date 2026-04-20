import { useState, useEffect, useRef } from 'react'

export function useTypewriter(phrases, speed = 110, deleteSpeed = 60, pause = 2000) {
  const [text, setText] = useState('')
  const timerRef = useRef(null)
  const stateRef = useRef({ phraseIdx: 0, charIdx: 0, deleting: false })

  useEffect(() => {
    stateRef.current = { phraseIdx: 0, charIdx: 0, deleting: false }
    setText('')
    clearTimeout(timerRef.current)

    const tick = () => {
      const s = stateRef.current
      const current = phrases[s.phraseIdx % phrases.length]

      if (!s.deleting) {
        s.charIdx++
        setText(current.slice(0, s.charIdx))
        if (s.charIdx === current.length) {
          s.deleting = true
          timerRef.current = setTimeout(tick, pause)
          return
        }
      } else {
        s.charIdx--
        setText(current.slice(0, s.charIdx))
        if (s.charIdx === 0) {
          s.deleting = false
          s.phraseIdx++
        }
      }
      timerRef.current = setTimeout(tick, s.deleting ? deleteSpeed : speed)
    }

    timerRef.current = setTimeout(tick, speed)
    return () => clearTimeout(timerRef.current)
  }, [phrases, speed, deleteSpeed, pause])

  return text
}

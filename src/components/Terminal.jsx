import { useEffect, useState } from 'react'
import { hero } from '../content'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Terminal que escribe solo, como una sesión de BBS.
export default function Terminal() {
  const [lines, setLines] = useState(() => (prefersReducedMotion() ? hero.terminal : []))

  useEffect(() => {
    if (prefersReducedMotion()) return

    let i = 0
    const id = setInterval(() => {
      i += 1
      setLines(hero.terminal.slice(0, i))
      if (i >= hero.terminal.length) clearInterval(id)
    }, 820)

    return () => clearInterval(id)
  }, [])

  return (
    <div className="terminal" aria-live="polite">
      {lines.map((line, i) => (
        <p key={line} className="terminal__line" style={{ '--i': i }}>
          {line}
        </p>
      ))}
      {lines.length < hero.terminal.length && <span className="terminal__cursor" />}
    </div>
  )
}

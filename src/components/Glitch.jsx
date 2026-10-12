import { useEffect, useState } from 'react'

// Texto con desplazamiento cromático tipo señal rota.
// El texto real va en el children; data-text alimenta las dos capas del glitch.
export default function Glitch({ text, as: Tag = 'span', className = '', children }) {
  const [seed, setSeed] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setSeed((s) => s + 1), 3200 + Math.random() * 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <Tag
      className={`glitch ${className}`.trim()}
      data-text={text}
      data-seed={seed}
    >
      {children ?? text}
    </Tag>
  )
}

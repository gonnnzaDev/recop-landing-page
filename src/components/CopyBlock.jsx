import { useState } from 'react'

export default function CopyBlock({ command, label = 'copiar' }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="copyblock">
      <code className="copyblock__code">
        <span className="copyblock__prompt">$</span> {command}
      </code>
      <button type="button" className="copyblock__btn" onClick={copy}>
        {copied ? 'copiado ✓' : label}
      </button>
    </div>
  )
}

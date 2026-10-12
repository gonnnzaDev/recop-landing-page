// Logotipo provisional: un dango en tres bolas.
// Cuando la marca esté lista, se reemplaza este componente por el logo real.

export default function Logo({ size = 40, pending = true }) {
  return (
    <span className="logo" style={{ '--logo-size': `${size}px` }}>
      <svg
        className="logo__mark"
        viewBox="0 0 64 80"
        role="img"
        aria-label="RECOP — logotipo provisional (dango)"
      >
        <g className="logo__stick">
          <line x1="32" y1="26" x2="32" y2="76" />
        </g>
        <circle className="logo__ball logo__ball--top" cx="32" cy="14" r="13" />
        <circle className="logo__ball logo__ball--mid" cx="32" cy="38" r="13" />
        <circle className="logo__ball logo__ball--bot" cx="32" cy="62" r="13" />
      </svg>
      {pending && <span className="logo__tag">logo pendiente</span>}
    </span>
  )
}

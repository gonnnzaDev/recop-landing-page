import { status } from '../content'

export default function Status() {
  return (
    <section className="status" id="estado">
      <p className="kicker">// estado</p>
      <h2 className="section-title">Dónde está parado</h2>

      <ul className="status__list">
        {status.map((s) => (
          <li key={s.label} className="status__row">
            <span className="status__label">{s.label}</span>
            <span className={`status__value ${s.ok ? 'is-ok' : 'is-wip'}`}>{s.value}</span>
          </li>
        ))}
      </ul>

      <p className="status__note">
        El logotipo oficial todavía no está disponible. El dango que aparece acá es un
        marcador de posición y va a ser reemplazado cuando la marca esté lista.
      </p>
    </section>
  )
}

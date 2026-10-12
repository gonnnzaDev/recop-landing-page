import { pillars } from '../content'

export default function Pillars() {
  return (
    <section className="pillars" id="pilares">
      <p className="kicker">// pilares</p>
      <h2 className="section-title">Tres palabras</h2>

      <div className="pillars__grid">
        {pillars.map((p) => (
          <article key={p.n} className="card">
            <span className="card__n">{p.n}</span>
            <h3 className="card__title">{p.title}</h3>
            <p className="card__text">{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

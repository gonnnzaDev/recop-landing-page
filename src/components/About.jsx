import { about } from '../content'

export default function About() {
  return (
    <section className="about" id="proyecto">
      <p className="kicker">{about.kicker}</p>

      <div className="about__grid">
        <h2 className="section-title">{about.title}</h2>

        <div className="about__text">
          {about.body.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <ul className="about__asides">
          {about.asides.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

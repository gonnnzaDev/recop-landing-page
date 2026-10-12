import Glitch from './Glitch'
import Terminal from './Terminal'
import { ascii, hero, project } from '../content'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__left">
        <p className="hero__overline">
          <span className="dot" /> {hero.overline}
        </p>

        <Glitch as="h1" text={hero.title} className="hero__title">
          {hero.title}
        </Glitch>

        <p className="hero__tagline">{hero.tagline}</p>
        <p className="hero__body">{hero.body}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={project.url} target="_blank" rel="noreferrer">
            ver el repositorio ↗
          </a>
          <a className="btn" href="#repo">
            cómo contribute
          </a>
        </div>

        <Terminal />
      </div>

      <div className="hero__right" aria-hidden="true">
        <pre className="ascii">{ascii}</pre>
        <div className="hero__badge">alpha // sin logo</div>
      </div>
    </section>
  )
}

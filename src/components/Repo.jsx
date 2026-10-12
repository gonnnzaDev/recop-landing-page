import CopyBlock from './CopyBlock'
import { project } from '../content'

const steps = [
  { n: '01', title: 'Fork', text: 'Creá tu propia copia del repositorio desde GitHub.' },
  { n: '02', title: 'Clone', text: 'Bajalo a tu máquina y corré npm install.' },
  { n: '03', title: 'PR', text: 'Mandá un pull request a main. Todo entra por PR.' },
]

export default function Repo() {
  return (
    <section className="repo" id="repo">
      <p className="kicker">// acceso</p>
      <h2 className="section-title">El código es el proyecto</h2>
      <p className="repo__lead">
        Todo lo que hay acá adentro vive en el repositorio. Esta página sólo lo presenta;
        el trabajo real está del otro lado.
      </p>

      <div className="repo__access">
        <CopyBlock command={project.clone} />
        <a className="btn btn--primary" href={project.url} target="_blank" rel="noreferrer">
          abrir {project.owner}/{project.repo} ↗
        </a>
      </div>

      <ol className="repo__steps">
        {steps.map((s) => (
          <li key={s.n}>
            <span className="card__n">{s.n}</span>
            <h3 className="card__title">{s.title}</h3>
            <p className="card__text">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

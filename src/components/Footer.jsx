import Logo from './Logo'
import { project } from '../content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <Logo size={34} pending={false} />
        <p>
          {project.name} — proyecto experimental.
          <br />
          Logo provisional. Todo lo demás es real.
        </p>
      </div>

      <nav className="footer__links">
        <a href={project.url} target="_blank" rel="noreferrer">
          repositorio ↗
        </a>
        <a href={`${project.url}/issues`} target="_blank" rel="noreferrer">
          issues ↗
        </a>
        <a href="#top">volver arriba ↑</a>
      </nav>

      <p className="footer__legal">
        © 2026 {project.owner} · hecho con react y demasiada estática
      </p>
    </footer>
  )
}

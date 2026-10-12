import Logo from './Logo'
import { nav, project } from '../content'

export default function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="#top">
        <Logo size={26} pending={false} />
        <span className="header__name">{project.name}</span>
      </a>

      <nav className="header__nav">
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
        <a className="header__cta" href={project.url} target="_blank" rel="noreferrer">
          github ↗
        </a>
      </nav>
    </header>
  )
}

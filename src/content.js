// Todo el copy de la landing vive acá.
// Editá lo que quieras y la página se actualiza.

export const project = {
  name: 'RECOP',
  owner: 'gonnnzaDev',
  repo: 'recop-landing-page',
  get url() {
    return `https://github.com/${this.owner}/${this.repo}`
  },
  get clone() {
    return `git clone ${this.url}.git`
  },
}

export const nav = [
  { id: 'proyecto', label: 'proyecto' },
  { id: 'pilares', label: 'pilares' },
  { id: 'estado', label: 'estado' },
  { id: 'repo', label: 'repo' },
]

export const hero = {
  overline: '> conectando…',
  title: 'RECOP',
  tagline: 'Un proyecto experimental. Código público, abierto a Connect.',
  body: 'RECOP está en la red desde antes de tener nombre del todo. Acá no hay marketing: hay un repositorio, una idea y espacio para los que quieran trastearlo.',
  terminal: [
    '> quién sos?',
    '> todavía no lo sé',
    '> eso está bien',
  ],
}

export const about = {
  kicker: '// presentación',
  title: 'Qué es RECOP',
  body: [
    'RECOP es un proyecto personal en construcción: una idea que empezó como script suelto y ya tiene carpeta propia en GitHub.',
    'La regla es simple: si funciona, sube; si no funciona, sube igual, pero con menos ruido. Todo el proceso es público y cada commit queda registrado.',
    'El logotipo todavía no existe. Hasta que exista, el que ves acá es un marcador de posición.',
  ],
  asides: ['present near', 'todo está conectado', 'w/ 2026'],
}

export const pillars = [
  {
    n: '01',
    title: 'Present',
    text: 'Lo que hay, se muestra. Nada de Metaphors, directo al código y a los issues abiertos.',
  },
  {
    n: '02',
    title: 'Connect',
    text: 'Fork, cloná, mandá un PR. La página es el índice, el trabajo vive en el repo.',
  },
  {
    n: '03',
    title: 'Noise',
    text: 'Texturas, glitches y estática. Un proyecto experimental también puede verse raro.',
  },
]

export const status = [
  { label: 'repositorio', value: 'público', ok: true },
  { label: 'landing', value: 'en línea', ok: true },
  { label: 'logotipo', value: 'pendiente', ok: false },
  { label: 'madurez', value: 'alpha', ok: false },
  { label: 'licencia', value: 'MIT', ok: true },
  { label: 'issues', value: 'abiertos', ok: true },
]

export const ascii = `
   .:*+=-.          .-*+*:
  -=+=-.        .:+=-:.
   .:*:        .*=-
    |    ▄▄    |
    |   ███    |   ◜◝
    |   ███    |   ◟◞
 ▄▄▄▄████████▄▄▄▄
`

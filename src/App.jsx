import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Pillars from './components/Pillars'
import Status from './components/Status'
import Repo from './components/Repo'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <div className="fx" aria-hidden="true">
        <div className="fx__scanlines" />
        <div className="fx__grid" />
        <div className="fx__vignette" />
      </div>

      <Header />

      <main>
        <Hero />
        <About />
        <Pillars />
        <Status />
        <Repo />
      </main>

      <Footer />
    </div>
  )
}

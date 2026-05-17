import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

/*
 * App.jsx — Componente raíz que ensambla todas las secciones
 *
 * Nota para Brian:
 * Cada <Section> es un componente independiente que puedes
 * reordenar, quitar o agregar libremente aquí.
 * Los datos vienen de src/data/ — no hay nada hardcodeado en los componentes.
 */

function App() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      <Navbar />
      <main>
        <Hero />
        <hr className="divider-glow max-w-2xl mx-auto" />
        <About />
        <Projects />
        <hr className="divider-glow max-w-2xl mx-auto" />
        <Skills />
        <Education />
        <hr className="divider-glow max-w-2xl mx-auto" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
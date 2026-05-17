import Button from './ui/Button'
import { personalInfo } from '../data/socialLinks'

/*
 * Hero.jsx — Sección principal del portafolio
 *
 * Es lo primero que ve el visitante. Tiene:
 * - Avatar placeholder (espacio para tu foto futura)
 * - Tu nombre con gradiente animado
 * - Rol + tagline
 * - CTAs (Contactar + Ver proyectos)
 * - Badge de "Disponible para trabajar"
 */

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
    >
      {/* ── Decorative background glows ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-nebula-500/6 blur-[100px] pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-in">
        {/* Avatar placeholder */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-nebula-500 to-violet-600 p-[3px] animate-glow-pulse">
            <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </div>

        {/* Available badge */}
        {personalInfo.availableForWork && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-success/10 border border-success/30 text-success text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Disponible para colaborar
          </div>
        )}

        {/* Greeting + Name */}
        <p className="text-text-muted text-sm font-mono tracking-widest uppercase mb-3">
          Hola, mi nombre es
        </p>
        <h1 className="text-gradient-animated font-bold mb-4">
          {personalInfo.name}
        </h1>

        {/* Role */}
        <p className="text-text-secondary text-xl md:text-2xl font-medium mb-3">
          {personalInfo.role}
        </p>

        {/* Tagline */}
        <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="#contact">
            Contactar
          </Button>
          <Button variant="secondary" href="#projects">
            Ver proyectos ↓
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-text-muted/50 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero

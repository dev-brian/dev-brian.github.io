import SectionTitle from './ui/SectionTitle'
import { personalInfo } from '../data/socialLinks'
import profilePic from '../assets/images/profile-picture.jpg'

/*
 * About.jsx — Sección "Sobre mí"
 */

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Sobre mí"
          title="¿Quién soy?"
          description="Un poco sobre mi camino en el desarrollo de software"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Foto / Avatar (col 1-2) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-500/20 via-nebula-500/10 to-violet-600/20 p-[2px]">
                <div className="w-full h-full rounded-3xl bg-bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={profilePic} alt="Perfil" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-20">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-violet-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Texto (col 3-5) */}
          <div className="md:col-span-3">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard icon="📍" label="Ubicación" value={personalInfo.location} />
              <InfoCard icon="🎓" label="Enfoque" value="Ing. en Software" />
              <InfoCard icon="🐧" label="OS" value="Linux (CachyOS)" />
              <InfoCard icon="🚀" label="Estado" value="Buscando oportunidades" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="glass p-4 flex items-center gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-text-muted text-xs font-mono uppercase">{label}</p>
        <p className="text-text-primary text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}

export default About

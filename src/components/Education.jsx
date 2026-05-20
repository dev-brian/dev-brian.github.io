import SectionTitle from './ui/SectionTitle'
import GlassCard from './ui/GlassCard'
import certEnglishFundamentals from '../assets/certificates/Certificate English Fundamentals - Boost your job search.pdf'
import certEnglishNetworking from '../assets/certificates/Certificate English Fundamentals Successful Networking and Interviews.pdf'
import certGoogleAI from '../assets/certificates/Certificate Google Artificial intelligence and productivity.pdf'
import certResponsiblePrompting from '../assets/certificates/Certificate Responsible prompting maximize AI in your Business.pdf'

/*
 * Education.jsx — Formación, certificaciones y experiencia
 */

const education = [
  {
    type: "education",
    title: "Ingeniería en Software",
    institution: "Universidad",
    period: "En curso",
    description: "Formación en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles.",
  },
]

const experience = [
  {
    type: "experience",
    title: "Estadías Profesionales — LITDE",
    institution: "Laboratorio LITDE",
    period: "Estadías",
    description: "Desarrollo de plugin de chat con IA para Moodle usando Ollama (Phi Mini) desplegado en AWS.",
  },
]

const certifications = [
  { 
    title: "English Fundamentals - Boost your job search and CV", 
    institution: "Certificación", 
    year: "10 Dic 2025",
    link: certEnglishFundamentals 
  },
  { 
    title: "English Fundamentals: Successful Networking and Interviews", 
    institution: "Certificación", 
    year: "21 Nov 2025",
    link: certEnglishNetworking 
  },
  { 
    title: "Google: Artificial intelligence and productivity", 
    institution: "Google", 
    year: "25 Sep 2025",
    link: certGoogleAI 
  },
  { 
    title: "Responsible prompting: maximize AI in your business", 
    institution: "Certificación", 
    year: "23 Oct 2025",
    link: certResponsiblePrompting 
  },
]

function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Formación"
          title="Educación & Experiencia"
          description="Mi trayectoria académica y profesional"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timeline educación + experiencia */}
          <div>
            <h3 className="text-text-primary font-bold text-lg mb-6 flex items-center gap-2">
              <span>🎓</span> Educación & Experiencia
            </h3>
            <div className="space-y-4">
              {[...education, ...experience].map((item, index) => (
                <TimelineCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div>
            <h3 className="text-text-primary font-bold text-lg mb-6 flex items-center gap-2">
              <span>📜</span> Certificaciones & Cursos
            </h3>
            {certifications.length > 0 ? (
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" key={index} className="block transition-transform hover:-translate-y-1">
                    <GlassCard hover={true}>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-text-primary font-semibold">{cert.title}</p>
                          <p className="text-text-muted text-sm">{cert.institution} · {cert.year}</p>
                        </div>
                        <span className="text-text-muted opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
                      </div>
                    </GlassCard>
                  </a>
                ))}
              </div>
            ) : (
              <GlassCard hover={false} className="text-center py-12">
                <span className="text-4xl block mb-3">🚀</span>
                <p className="text-text-secondary">Próximamente...</p>
                <p className="text-text-muted text-sm mt-1">Certificaciones y cursos en camino</p>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ title, institution, period, description, type }) {
  return (
    <GlassCard>
      <div className="flex items-start gap-3">
        <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${
          type === "education" ? "bg-blue-500" : "bg-violet-500"
        }`} />
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-text-primary font-semibold">{title}</h4>
            <span className="text-xs font-mono text-text-muted bg-bg-elevated px-2 py-0.5 rounded-full">
              {period}
            </span>
          </div>
          <p className="text-violet-400 text-sm mt-0.5">{institution}</p>
          <p className="text-text-secondary text-sm mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </GlassCard>
  )
}

export default Education

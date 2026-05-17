import SectionTitle from './ui/SectionTitle'
import Button from './ui/Button'
import { personalInfo, socialLinks } from '../data/socialLinks'

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle
          label="Contacto"
          title="¿Hablamos?"
          description="Estoy abierto a oportunidades, colaboraciones y nuevos proyectos"
        />

        <div className="glass p-8 md:p-12">
          <p className="text-text-secondary text-lg mb-8 leading-relaxed">
            Si tienes una idea, un proyecto interesante o simplemente quieres conectar, no dudes en escribirme. 
            Siempre estoy buscando aprender algo nuevo y colaborar con personas apasionadas por la tecnología.
          </p>

          <Button href={`mailto:${personalInfo.email}`}>
            ✉️ Enviar email
          </Button>

          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-border-default">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-violet-400 transition-colors text-sm flex items-center gap-2"
              >
                {link.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

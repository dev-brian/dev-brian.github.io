import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';
import { socialLinks } from '../data/socialLinks';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('FAILED...', error.text || error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle
          label="Contacto"
          title="¿Hablamos?"
          description="Estoy abierto a oportunidades, colaboraciones y nuevos proyectos"
        />

        <div className="glass p-8 md:p-12 text-left">
          <p className="text-text-secondary text-lg mb-8 text-center leading-relaxed">
            Si tienes una idea, un proyecto interesante o simplemente quieres conectar, no dudes en escribirme.
          </p>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="user_name" className="block text-sm font-medium text-text-primary mb-2">Nombre</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="user_email" className="block text-sm font-medium text-text-primary mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Mensaje</label>
              <textarea
                name="message"
                id="message"
                required
                rows="5"
                className="w-full bg-bg-elevated border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"
                placeholder="¿En qué te puedo ayudar?"
              ></textarea>
            </div>

            {status === 'success' && (
              <p className="text-green-400 text-center text-sm font-medium">¡Mensaje enviado con éxito! Te responderé pronto.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-center text-sm font-medium">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</p>
            )}

            <div className="flex justify-center mt-2">
              <Button type="submit" disabled={isSubmitting} className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}>
                {isSubmitting ? 'Enviando...' : '✉️ Enviar Mensaje'}
              </Button>
            </div>
          </form>

          <div className="flex justify-center gap-6 mt-10 pt-6 border-t border-border-default">
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
  );
}

export default Contact;

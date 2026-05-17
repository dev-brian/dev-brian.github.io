/*
 * ═══════════════════════════════════════════════════════════
 *  🔗  socialLinks.js — Tus redes sociales y contacto
 * ═══════════════════════════════════════════════════════════
 *  Se usan tanto en el Navbar como en el Footer.
 *  Centralizar esto evita duplicar links en varios archivos.
 */

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/tu-usuario",  // ← Cambia esto
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tu-perfil",  // ← Cambia esto
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:tu@email.com",  // ← Cambia esto
    icon: "mail",
  },
]

// Info general del portafolio (usada en Hero, About, meta tags, etc.)
export const personalInfo = {
  name: "Brian",
  role: "Desarrollador Full Stack",  // o "Ingeniero de Software", etc.
  tagline: "Creando experiencias digitales que impactan",
  location: "México",
  availableForWork: true,
}

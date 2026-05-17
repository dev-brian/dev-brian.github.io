/*
 * ═══════════════════════════════════════════════════════════
 *  📂  projects.js — Tus proyectos del portafolio
 * ═══════════════════════════════════════════════════════════
 *  Para agregar un proyecto nuevo, solo copia un objeto
 *  y llena los campos. No necesitas tocar ningún componente.
 */

export const projects = [
  {
    id: 1,
    title: "BioTracker",
    description:
      "Aplicación de modelado nutricional con simulaciones de creatina y cafeína. UI moderna con modo oscuro glassmorphism.",
    tags: ["Python", "Streamlit", "Plotly", "UI/UX"],
    image: null,       // Ruta a screenshot: "/src/assets/images/biotracker.webp"
    liveUrl: null,     // URL del demo en vivo
    repoUrl: null,     // URL del repositorio en GitHub
    featured: true,    // true = se muestra más grande en el grid
  },
  {
    id: 2,
    title: "Simulador de Invernadero",
    description:
      "Sistema de simulación de parámetros ambientales para invernaderos con backend FastAPI y frontend Vite.",
    tags: ["Python", "FastAPI", "Vite", "JavaScript"],
    image: null,
    liveUrl: null,
    repoUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "Métodos Numéricos",
    description:
      "Calculadora interactiva de métodos numéricos (Euler, Heun) con interfaz estilo GeoGebra y renderizado LaTeX.",
    tags: ["Python", "Streamlit", "Matemáticas"],
    image: null,
    liveUrl: null,
    repoUrl: null,
    featured: false,
  },
  // {
  //   id: 4,
  //   title: "Tu próximo proyecto",
  //   description: "Descripción aquí...",
  //   tags: ["Tech1", "Tech2"],
  //   image: null,
  //   liveUrl: null,
  //   repoUrl: null,
  //   featured: false,
  // },
]

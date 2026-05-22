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
    title: "IMPLEMENTACIÓN DE UN ECOSISTEMA DE IA EDUCATIVA INTEGRADO A MOODLE",
    description:
      "Desarrollo de un chatbot con inteligencia artificial para Moodle, utilizando Ollama con el modelo Phi Mini desplegado en AWS. Creado como plugin durante estadías en el laboratorio LITDE.",
    tags: ["Python", "AWS", "Ollama", "Moodle", "IA"],
    image: null,
    liveUrl: "https://docs.google.com/document/d/1mIKbw2TM-6ppZkfPq_tb2zatU1i6uLy7/edit?usp=sharing&ouid=116406629242271889278&rtpof=true&sd=true",
    liveUrlLabel: "Documentación",
    repoUrl: null,
    featured: true,
    context: "Estadías — LITDE",
  },
  {
    id: 2,
    title: "SIAR — App Móvil",
    description:
      "Aplicación móvil del sistema de seguridad SIAR, desarrollada con Flutter y Dart. Integrada con Firebase para autenticación y datos en tiempo real.",
    tags: ["Flutter", "Dart", "Firebase", "Mobile"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/dev-brian/appSIAR.git",
    featured: true,
    context: "Proyecto académico",
  },
  {
    id: 3,
    title: "SIAR Web",
    description:
      "Web promocional del Sistema Inteligente Antirrobo (SIAR). Diseñada para presentar las características y beneficios del sistema.",
    tags: ["React", "Web", "UI/UX"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/aredPR/siar-web.git",
    featured: true,
    context: "Proyecto académico",
  },
  {
    id: 4,
    title: "E-Commerce Pixoft",
    description:
      "Plataforma e-commerce desarrollada para la empresa Pixoft durante un hackatón. Backend con Python (Django), frontend con templates y gestión de productos completa.",
    tags: ["Python", "Django", "E-Commerce", "Hackatón"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/dev-brian/MokeyDevHakaton.git",
    featured: false,
    context: "Hackatón",
  },
  {
    id: 5,
    title: "POS La Catrina",
    description:
      "Sistema de punto de venta (POS) para el bar La Catrina. Gestión de inventario, ventas y reportes en un entorno real de negocio.",
    tags: ["Python", "POS", "Base de datos"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/elroboctavio/bar_la_catrina.git",
    featured: false,
    context: "Proyecto freelance",
  },
  {
    id: 6,
    title: "BioTracker",
    description:
      "Aplicación de modelado nutricional con simulaciones de creatina y cafeína. UI moderna con modo oscuro glassmorphism y visualizaciones interactivas.",
    tags: ["Python", "Streamlit", "Plotly", "UI/UX"],
    image: null,
    liveUrl: null,
    repoUrl: "https://github.com/dev-brian/biotracker.git",
    featured: false,
    context: "Proyecto personal",
  },
]

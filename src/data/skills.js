/*
 * ═══════════════════════════════════════════════════════════
 *  🛠️  skills.js — Tus tecnologías y habilidades
 * ═══════════════════════════════════════════════════════════
 *  Cada skill tiene una categoría para agruparlas visualmente.
 *  El "level" es para una barra de progreso opcional (1-100).
 */

export const skills = [
  // ── Lenguajes ──
  { name: "Python", category: "Lenguajes", level: 90 },
  { name: "JavaScript", category: "Lenguajes", level: 75 },
  { name: "HTML/CSS", category: "Lenguajes", level: 85 },

  // ── Frontend ──
  { name: "React", category: "Frontend", level: 60 },
  { name: "Tailwind CSS", category: "Frontend", level: 70 },
  { name: "Streamlit", category: "Frontend", level: 85 },

  // ── Backend ──
  { name: "FastAPI", category: "Backend", level: 70 },
  { name: "Node.js", category: "Backend", level: 55 },

  // ── Herramientas ──
  { name: "Git", category: "Herramientas", level: 80 },
  { name: "Vite", category: "Herramientas", level: 65 },
  { name: "Linux", category: "Herramientas", level: 75 },
  { name: "VS Code", category: "Herramientas", level: 90 },
]

// Categorías con iconos y colores (para el componente Skills)
export const skillCategories = [
  { name: "Lenguajes", icon: "💻", color: "blue" },
  { name: "Frontend", icon: "🎨", color: "violet" },
  { name: "Backend", icon: "⚙️", color: "nebula" },
  { name: "Herramientas", icon: "🔧", color: "blue" },
]

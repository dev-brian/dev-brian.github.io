/*
 * SectionTitle.jsx — Título consistente para cada sección
 *
 * Uso:
 *   <SectionTitle
 *     label="Portafolio"
 *     title="Mis Proyectos"
 *     description="Lo que he construido hasta ahora"
 *   />
 */

function SectionTitle({ label, title, description }) {
  return (
    <div className="text-center mb-16">
      {/* Label superior en mono (ej: "— Portafolio —") */}
      {label && (
        <p className="text-text-muted text-sm font-mono tracking-widest uppercase mb-4">
          — {label} —
        </p>
      )}

      {/* Título principal con gradiente */}
      <h2 className="text-gradient font-bold mb-4">{title}</h2>

      {/* Descripción opcional */}
      {description && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle

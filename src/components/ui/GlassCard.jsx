/*
 * GlassCard.jsx — Tarjeta con efecto glassmorphism + glow border
 *
 * Uso:
 *   <GlassCard>
 *     <h3>Contenido</h3>
 *     <p>Lo que sea</p>
 *   </GlassCard>
 *
 *   <GlassCard hover={false}>Sin efecto hover</GlassCard>
 */

function GlassCard({ children, hover = true, className = "", ...props }) {
  return (
    <div
      className={`
        glass 
        ${hover ? "glow-border" : ""} 
        p-6 
        transition-all duration-300
        ${hover ? "hover:-translate-y-1 hover:shadow-elevated" : ""}
        ${className}
      `}
      {...props}
    >
      {/* z-10 para que el contenido quede encima del pseudo-elemento glow */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default GlassCard

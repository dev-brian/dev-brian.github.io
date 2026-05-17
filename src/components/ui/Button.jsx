/*
 * Button.jsx — Botón reutilizable con variantes
 *
 * Uso:
 *   <Button>Contactar</Button>                    → botón primario (gradiente)
 *   <Button variant="secondary">Ver más</Button>  → botón glass
 *   <Button variant="ghost">GitHub</Button>        → botón transparente
 *   <Button href="https://...">Link</Button>       → renderiza como <a>
 */

function Button({ children, variant = "primary", href, className = "", ...props }) {
  // Estilos base compartidos por todas las variantes
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold tracking-wide transition-all duration-300 cursor-pointer text-sm"

  // Estilos específicos por variante
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 via-nebula-500 to-violet-600 text-white shadow-glow-combined hover:scale-105 hover:shadow-glow-violet",
    secondary:
      "glass text-text-primary hover:border-border-accent",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50",
  }

  const classes = `${base} ${variants[variant]} ${className}`

  // Si tiene href, renderiza como <a> en vez de <button>
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button

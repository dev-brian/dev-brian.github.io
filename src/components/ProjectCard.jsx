import GlassCard from './ui/GlassCard'

/*
 * ProjectCard.jsx — Tarjeta individual de proyecto
 *
 * Props que recibe (vienen de projects.js):
 * - title, description, tags, image, liveUrl, repoUrl, featured, context
 */

function ProjectCard({ title, description, tags, image, liveUrl, repoUrl, featured, context }) {
  return (
    <GlassCard className={featured ? "md:col-span-2" : ""}>
      {/* Header con contexto */}
      {context && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-violet-400 bg-violet-400/10 px-2 py-0.5 rounded-full">
            {context}
          </span>
        </div>
      )}

      {/* Imagen placeholder */}
      {image ? (
        <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-bg-tertiary">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-full h-40 rounded-xl mb-4 bg-gradient-to-br from-bg-tertiary to-bg-elevated flex items-center justify-center border border-border-subtle">
          <span className="text-text-muted text-sm font-mono">📸 screenshot próximamente</span>
        </div>
      )}

      {/* Título y descripción */}
      <h3 className="text-text-primary text-xl font-bold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-2 border-t border-border-subtle">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-text-primary transition-colors flex items-center gap-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Código
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-text-primary transition-colors flex items-center gap-1.5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Demo
          </a>
        )}
        {!repoUrl && !liveUrl && (
          <span className="text-text-muted/50 text-xs font-mono">Proyecto privado</span>
        )}
      </div>
    </GlassCard>
  )
}

export default ProjectCard

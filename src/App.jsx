import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary font-sans">
      {/* ── Hero Section (Preview de la paleta) ── */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 relative">
        {/* Background glow decorativo */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

        {/* Contenido */}
        <div className="relative z-10 text-center animate-fade-in">
          <p className="text-text-muted text-sm font-mono tracking-widest uppercase mb-4">
            — Portfolio Design System —
          </p>

          <h1 className="text-gradient-animated font-bold mb-6">
            Hola, soy Brian
          </h1>

          <p className="text-text-secondary text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Desarrollador Full Stack apasionado por crear experiencias
            digitales que impactan. Esta es tu paleta de colores en acción.
          </p>

          {/* Botones de ejemplo */}
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 via-nebula-500 to-violet-600 text-white font-semibold tracking-wide shadow-glow-combined hover:scale-105 transition-transform duration-300 cursor-pointer">
              Contactar
            </button>
            <button className="px-6 py-3 rounded-2xl glass text-text-primary font-semibold tracking-wide hover:border-border-accent transition-all duration-300 cursor-pointer">
              Ver proyectos
            </button>
          </div>

          {/* Cards preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Blue 500", color: "bg-blue-500", hex: "#2563eb" },
              { title: "Nebula 400", color: "bg-nebula-400", hex: "#6e78ff" },
              { title: "Violet 500", color: "bg-violet-500", hex: "#8b5cf6" },
            ].map((swatch) => (
              <div
                key={swatch.title}
                className="glass glow-border p-6 text-center animate-slide-up"
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${swatch.color} mx-auto mb-4 shadow-lg`}
                />
                <h3 className="text-text-primary text-lg font-semibold mb-1">
                  {swatch.title}
                </h3>
                <code className="text-xs">{swatch.hex}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="divider-glow w-full max-w-2xl mt-20" />

        {/* Color palette showcase */}
        <div className="relative z-10 mt-16 w-full max-w-4xl animate-fade-in">
          <h2 className="text-center text-text-primary mb-8">Paleta completa</h2>
          
          {/* Blue scale */}
          <div className="mb-6">
            <p className="text-text-muted text-sm font-mono mb-2">Electric Blue</p>
            <div className="flex rounded-2xl overflow-hidden h-12">
              {["bg-blue-50","bg-blue-100","bg-blue-200","bg-blue-300","bg-blue-400","bg-blue-500","bg-blue-600","bg-blue-700","bg-blue-800","bg-blue-900"].map((c) => (
                <div key={c} className={`flex-1 ${c}`} />
              ))}
            </div>
          </div>

          {/* Violet scale */}
          <div className="mb-6">
            <p className="text-text-muted text-sm font-mono mb-2">Cosmic Violet</p>
            <div className="flex rounded-2xl overflow-hidden h-12">
              {["bg-violet-50","bg-violet-100","bg-violet-200","bg-violet-300","bg-violet-400","bg-violet-500","bg-violet-600","bg-violet-700","bg-violet-800","bg-violet-900"].map((c) => (
                <div key={c} className={`flex-1 ${c}`} />
              ))}
            </div>
          </div>

          {/* Surface colors */}
          <div className="mb-6">
            <p className="text-text-muted text-sm font-mono mb-2">Surfaces</p>
            <div className="flex rounded-2xl overflow-hidden h-12">
              {["bg-bg-primary","bg-bg-secondary","bg-bg-tertiary","bg-bg-card","bg-bg-elevated"].map((c) => (
                <div key={c} className={`flex-1 ${c} border-r border-border-default last:border-r-0`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
import SectionTitle from './ui/SectionTitle'
import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Tecnologías"
          title="Skills & Herramientas"
          description="Las tecnologías con las que trabajo día a día"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="glass p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-text-primary text-lg font-bold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-3 items-center justify-center sm:justify-start">
                {category.shields.map((shield) => (
                  <img
                    key={shield.alt}
                    src={shield.src}
                    alt={shield.alt}
                    className="h-8 hover:scale-105 transition-transform cursor-pointer shadow-sm rounded"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

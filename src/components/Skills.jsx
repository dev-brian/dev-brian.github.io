import SectionTitle from './ui/SectionTitle'
import { skills, skillCategories } from '../data/skills'

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
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.name)
            return (
              <div key={category.name} className="glass p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-text-primary text-lg font-bold">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} color={category.color} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, color }) {
  const colorMap = {
    blue: "from-blue-500 to-blue-400",
    violet: "from-violet-500 to-violet-400",
    nebula: "from-nebula-500 to-nebula-400",
  }
  const gradientClass = colorMap[color] || colorMap.blue

  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-text-secondary text-sm font-medium">{skill.name}</span>
        <span className="text-text-muted text-xs font-mono">{skill.level}%</span>
      </div>
      <div className="w-full h-2 rounded-full bg-bg-elevated overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}

export default Skills

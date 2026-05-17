import SectionTitle from './ui/SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

/*
 * Projects.jsx — Grid de proyectos
 *
 * Los proyectos "featured" ocupan 2 columnas en desktop.
 * Los datos vienen de data/projects.js — no hay datos hardcodeados aquí.
 */

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Portafolio"
          title="Proyectos"
          description="Una selección de lo que he construido en hackatones, estadías y proyectos personales"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import React from "react"
import Section from "../components/Section"
import ProjectCard from "../components/projects/ProjectCard"
import { PropjectInterface, projects } from "../data/projects"

const Projects = () => {
  return (
    <Section heading="prior projects" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {projects.map((project: PropjectInterface, idx: number) => (
          <ProjectCard
            key={idx}
            imgUrl={project.imgUrl}
            title={project.title}
            description={project.description}
            tags={project.tags}
            visitLink={project.visitLink}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects

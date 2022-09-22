import React from "react";
import ProjectItem from "./ProjectItem";



function ProjectList({ projects }) {
  console.log(`Projects are `,projects)

    /*const [{id,name,about,technologies}]=projects;*/
   const item=projects.map((project)=>{
    console.log(`project is `,project);
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />
   })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        {item}
      </div>
    </div>
  );
}

export default ProjectList;

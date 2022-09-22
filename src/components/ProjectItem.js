import React from "react";

function ProjectItem({ name, about, technologies }) {

const technology = technologies.map((techno,index) => {
  return (
    <span key={index} >
      {techno}
    </span>
  );
});

  return (

    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technology}


          </div>
    </div>
  );
}

export default ProjectItem;

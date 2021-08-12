import React from "react";

let id = 0;
function ProjectItem({ name, about, technologies }) {
  console.log(name)
  console.log(about)
  console.log(technologies)
  const technologiesItem = technologies.map((technology) => {
    return <span key={id++}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesItem}
      </div>
    </div>
  );
}

export default ProjectItem;

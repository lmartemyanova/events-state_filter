import React from 'react';

function ProjectList({ projects }) {

  return (
    projects.map((project, index) => (
      <div className="project" key={index}>
        <img src={project.img} alt={project.category}/>
      </div>
    ))
  );
};

export default ProjectList;
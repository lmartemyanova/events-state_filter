import React from 'react';

// Изображения самих проектов отображаются компонентом без состояния ProjectList, которому от Portfolio 
// мы передаём список проектов — в свойство projects. 
// Отображение проектов — это единственная ответственность компонента ProjectList.

// в компоненте Portfolio отфильтровать по активному фильтру проекты и передать их в компонент ProjectList

function ProjectList({ projects }) {

  console.log(projects)

  return (
    projects.map((project, index) => (
    <div className="project" key={index}>
      <img src={project.img} alt={project.category}/>
    </div>
  ))
  )
}

export default ProjectList
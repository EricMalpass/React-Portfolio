import React from "react";
import work from '../ProjectWork'

function Projects() {
  return (
    <>
    <section className="container">
          <div className="project">
            <h2 className="top-title">Projects</h2>
            <hr></hr>
          </div>
          <div className="wrapper" id="card-data">
            {work.map((project) => {
              // const image = require (project.image).default
              // const image = require ("../../images/seasons_project.png").default
              // console.log(image)
              // <ProjectWork key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy}/>
              return <div className="card">
        <div className="img-container">
          <img alt={project.name} src={project.image} />
        </div>
        <div className="content">
          <p className="card-title">{project.name}</p>
          <div className="Links">
            <div className="Links_1">
              <a href={project.github}>Github</a>
            </div>
            <div className="Links_1">
              <a href={project.deploy}>Deployed</a>
            </div>
          </div>
        </div>
      </div>
})}
          </div>
        </section>
        </>
  );
}

export default Projects;
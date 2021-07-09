import React from 'react';


function ProjectWork(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <p className="card-title">{props.name}</p>
          <div className="Links">
            <div className="Links_1">
              <a href={props.github}>Github</a>
            </div>
            <div className="Links_1">
              <a href={props.deploy}>Deployed</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectWork;
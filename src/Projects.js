import React from "react";
import { Link } from "react-router-dom";

import projects from './data/projects-data'

const Projects = () => {
 
  const projectStyle = "dim link";
  return (
    <div className="">
      <h2 className="tc ma1">THINGS I HAVE BUILT</h2>
      <div className="mt1">
      
      {projects.map(project => {
        
        return (
          <div key={`${project.name}project.id`} className="mv2">
          <Link
            className={projectStyle}
            to={`projects/${project.link}`}
          >
          <h3 className="dib w-auto pv1 ma0 ttu tracked black bb">
          {project.name}
          </h3>
        
           <p className="f6 mv1 lh-copy black">{project.blurb}</p>
            
          </Link>
          </div>
        );
      })}
      
      </div>
        
     
    </div>
  );
};

export default Projects;

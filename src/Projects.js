import React from "react";
import { Link } from "react-router-dom";

import projects from "./projects-data";

const Projects = () => {
 
  const projectStyle = "w-100 link b--black-10 pb2 mt3 dim ";
  return (
    <section className="mt3 ph3-s ph6-m ph3-l measure-l ">

      <h2 className="b dib w-auto pv2 ma0">THINGS I HAVE BUILT</h2>

    
        {projects.map(project => {
        
          return (
            <div key={`${project.name}project.id`} className="mt1 mb3 f6">
            <Link
              
              className={projectStyle}
              to={`projects/${project.link}`}
            >
         
            <span className="f5 ttu bb fw7 tracked black">
            {project.name} 
            </span>
          
             <p className="f6 mv1 lh-copy black">{project.blurb}</p>
         
              
            </Link>
            </div>
          );
        })}
     
    </section>
  );
};

export default Projects;

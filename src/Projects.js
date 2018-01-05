import React from "react";
import { Link } from "react-router-dom";

import projects from "./projects-data";

const Projects = () => {
  // const linkStyle = "link hover-green no-underline black dib ph2 pv1";
  const projectStyle = "w-100 link b--black-10 pb2 mt3 dim ";
  return (
    <section className="mt3 ph6 ph5-l measure-l ">

      <h3 className="b dib w-auto pv2 ma0">THINGS I'VE BUILT</h3>

    
        {projects.map(project => {
        
          return (
            <div className="mt1 mb3 f6">
            <Link
              key={`${project.name}project.id`}
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

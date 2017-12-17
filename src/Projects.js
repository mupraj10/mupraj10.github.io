import React from "react";
import { Link } from "react-router-dom";

import projects from "./projects-data";

const Projects = () => {
  // const linkStyle = "link hover-green no-underline black dib ph2 pv1";
  const projectStyle = "w-100 link b--black-10 pb2 mt3 dim ";
  return (
    <section className="vh-8 w-100 cf pv6-ns pv3 pl3 ">

      <div className="f3 fl pv3 ttu tracked fs-normal mt0 mb0">THINGS I'VE BUILT</div>

      <section className="flex flex-wrap w-100 vh-50 pa2-m pa3-l  overflow-scroll">
        {projects.map(project => {
          console.log(projects.length)
          return (
            <Link
              key={`${project.name}project.id`}
              className={projectStyle}
              to={`projects/${project.link}`}
            >
         
            <span className="f5 ttu b tracked black">
            {project.name}
          </span>
          
             <p className="f6 mv1">{project.blurb}</p>
         
              
            </Link>
          );
        })}
      </section>
    </section>
  );
};

export default Projects;

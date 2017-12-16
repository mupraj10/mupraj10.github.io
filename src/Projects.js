import React from "react";
import {  Link } from "react-router-dom";


import projects from "./projects-data";

 const Projects = () => {
    // const linkStyle = "link hover-green no-underline black dib ph2 pv1";
    const hoverStyle = "dt w-100 link b--black-10 pb2 pb2 mt3 dim "
    return (
      <section className="vh-8 dt w-100 cf pv6 pl3 mw9 center">

    
      <div className="f3 fl pv4 ttu tracked fs-normal mt0 mb0">
        Projects
      </div>

       
        <section className='w-100 pa3-m pa4-l'>

        {projects.map(project => {
          return (
            <Link key={`${project.name}project.id`} className={hoverStyle} to={`projects/${project.link}`} >

        
              
                  <span className="w-25-l f5 fw5 ttu tracked black fl">{project.name}</span>
                  <span className="w-75 f7 ml2 ">{project.blurb}</span>
      
             
              
            </Link>

            
          );
        })}
        </section>
      </section>
    );
  }



export default Projects;



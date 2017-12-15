import React, { Component } from "react";
import {  Link } from "react-router-dom";


import projects from "./projects-data";

export default class Projects extends Component {
  render() {
    // const linkStyle = "link hover-green no-underline black dib ph2 pv1";
    const hoverStyle = "link w-100  pb2 mt2 dim"
    return (
      <section className="vh-8 dt w-100 cf pv6 pl3 mw9 center">
        <h3 className="lh-copy"> Projects </h3>
        <main className=''>
        {projects.map(project => {
          return (
            <Link className={hoverStyle} to={`projects/${project.link}`} >
            <article key={project.id}>
              <div className=" dt w-100 pb2 mt2" >
                  <span className="">{project.name}</span>
                  <span className="">{project.blurb}</span>
      
             
              </div>
            </article>
            </Link>

            
          );
        })}
        </main>
      </section>
    );
  }
}





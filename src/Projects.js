import React, { Component } from "react";
import {  Link } from "react-router-dom";


import projects from "./projects-data";

export default class Projects extends Component {
  render() {
    // const linkStyle = "link hover-green no-underline black dib ph2 pv1";
    const hoverStyle = "link dt w-100  pb2 mt2 dim blue"
    return (
      <section className="">
        <h3 className="lh-copy"> Projects </h3>
        <main className="center">
        {projects.map(project => {
          return (
            <Link className={hoverStyle} to={`projects/${project.link}`} >
            <article key={project.id}>
              <div className="dt w-100 pb2 mt2 " >
                <div className="dt v-top pl2">
                  <h1 className="f6 f5-ns fw6 lh-title black mv0">{project.name}</h1>

                  <p className="f6 fw4 mt2 mb0 black-60 measure-wide">{project.blurb}</p>
      
                </div>
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





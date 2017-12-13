import React, { Component } from "react";

import projects from "./projects-data";

export default class Projects extends Component {
  render() {
    const linkStyle = "link b hover-green no-underline black dib ph2 pv1";
    return (
      <section className="">
        <h3 className="lh-copy"> Projects </h3>

        {projects.map(project => {
          return (
            <article className="cf">
              <div className="fl w-100 w-50-ns tc">

              <div>
              <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
              </div>
              
                <div className="tc">
                  <a className={linkStyle} href={project.github}>
                    Github
                  </a>
                  <a className={linkStyle} href={project.demo}>
                    Demo
                  </a>
                  <a className={linkStyle} href={project.youtube}>
                    Youtube
                  </a>
                </div>

              

              </div>
              <div className="fl w-100 w-50-ns tc">

              <img
              src="http://tachyons.io/img/super-wide.jpg"
              alt="A bright blue sky"
              class="w-100 mw7 w5-ns"
            />

            
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import projects from './projects-data';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let name = this.props.match.params.name;
    const project = projects.find(project => name === project.link);

    const projectStyle = 'w-100 link b--black-10 pb2 mt3 dim ';
    return (
      <section className="mt3 ph3-s ph6-m ph3-l measure-l  ">
        <h2 className="b dib w-auto pv2 ma0 ttu">{project.name}</h2>
        <div className="black-80 p2 f7" >
          {project.completed ? 'completed' : 'in progress'}
        </div>
        <div className="mt1 mb3">
          <a
            className="link black-80 hover-green pb2 f6"
            href={project.github}
          >
            github
          </a>
          {project.demo && <a
            className="link black-80 hover-green pb2 pl2 f6 "
            href={project.demo}
          >
            demo
          </a>}
          <a
            className="link black-80 hover-green pb2 pl2 f6"
            href={project.youtube}
          >
            youtube
          </a>
        </div>

        <div className="mt1 mb3 f6">
          <span className="f5 ttu bb fw7 tracked black">Info</span>
          <p className="f6 mv1 lh-copy black">{project.info}</p>
        </div>

        <div className="mt1 mb3 f6">
          <span className="f5 ttu bb fw7 tracked black">Tech Stack</span>
          {project.frameworks.map(frameworks => (
            <p className="f6 mv1 lh-copy black">{frameworks.name}</p>
          ))}
        </div>

        <div className="mt1 mb3 f6">
          <span className="f5 ttu bb fw7 tracked black">Features</span>
          <p className="f6 mv1 lh-copy black">{project.info}</p>
        </div>
      </section>
    );
  }
}

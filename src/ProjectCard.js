import React from 'react';


import projects from './data/projects-data';


const ProjectCard = (props) => {

  let name = props.match.params.name;

  const project = projects.find(theOne => name === theOne.link);

  // const projectStyle = 'w-100 link b--black-10 pb2 mt3 dim ';


  return (
    <div className="">

      <h2 className="b dib w-auto pv2 ma0 ttu">{project.name}</h2>

      <div className="black-80 p2 f7" >
        {project.completed ? 'completed' : 'in progress'}
      </div>

      <div className="mt1 mb3">
        <a
          className="link black-80 hover-dark-gray pb2 f6"
          href={project.github}
        >
          github
          </a>
        {project.demo &&
          <a
          className="link black-80 hover-dark-gray pb2 pl2 f6"
          href={project.demo} >
          demo
          </a> }
        {project.youtube && 
          <a
          className="link black-80 hover-dark-gray pb2 pl2 f6"
          href={project.youtube}
        >
          youtube
          </a> }
      </div>
     
      <div className="mt1 mb3 f6">
        <span className="f5 ttu bb fw7 tracked black">Info</span>
        <p className="f6 mv1 lh-copy black">{project.info}</p>
      </div>

      <div className="mt1 mb3 f6">
        <span className="f5 ttu bb fw7 tracked black">Tech Stack</span>
        {project.frameworks.map(framework => (
          <p key={`${framework.name}-{project.name}`} className="f6 mv1 lh-copy black"> {framework.name}</p>
        ))}
      </div>

      <div className="mt1 mb3 f6">
        <span className="f5 ttu bb fw7 tracked black">Features</span>
        <ul className='list pl0 '> {project.features.map(feature => {
          return <li className="f6 mv1 list lh-copy black">{feature}</li>
        } )}
        </ul>
      </div>
    </div>
  );
}


export default ProjectCard;


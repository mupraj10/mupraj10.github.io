import React from 'react';
import resume from './resume';

const tech = resume.tech;
const education = resume.education;
const science = resume.science;


const Life = () => {
  return (
    <div className="">
      <h2 className="tc ma1">THINGS I HAVE DONE</h2>

      <div className="mt1">
        <a
          className="link black-80 hover-green pb2 f6"
          href="./boomrang-data.js" download >
          resume
          </a>
      </div>

      <div className="mt2 mb2">
      <h3 className="dib w-auto pv1 ma0 ttu tracked bb">Education </h3>
      {education.map(school => {
        return (
          <div key={school.name} className="mt1 f6">
           <div> <span className="f5 fw7">
           {school.name}
         </span>
         <span className="f7"> {school.dates}</span></div> 
            <p className="pl1 pb1 ma0">{school.location}</p>
            <p className="pl1 pb1 ma0"> {school.degree}</p>
          </div>
        )
      })}
      </div>

      <div className="mt2 mb2">
      <h3 className="dib w-auto pv1 ma0 ttu tracked bb">Experience - Tech </h3>
      {tech.map(job => {
        return (
          <div key={job.company} className="mt1 f6">
            <span className="f5 fw7 ">
              {job.company}
            </span>
            <span className="f7"> {job.dates}</span>
            <p className="pl1 pb1 ma0">{job.title}</p>
            <p className="pl1 pb1 ma0"> {job.duties}</p>
          </div>
        )
      })}

      </div>

      <div className="mt2 mb2">
      <h3 className=" dib w-auto pv1 ma0 ttu tracked bb">Experience - Science </h3>
      {science.map(job => {
        return (
          <div key={job.company} className="mt1 f6">
            <span className="f6 fw7 ">
              {job.company}
            </span>
            <span className="f7"> {job.dates}</span>
            <p className="pl1 pb1 ma0">{job.title}</p>
            <p className=""> {job.duties}</p>
          </div>
        )
      })}
   </div>

    </div>
  );
};

export default Life;

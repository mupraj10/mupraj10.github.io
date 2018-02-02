import React from 'react';
import { Link } from 'react-router-dom';
import resume from './resume';

const tech = resume.tech;
const education = resume.education;
const science = resume.science;


const Life = () => {
  return (
    <div className="mt3 ph3-s ph6-m ph3-l measure-l  ">
      <h2 className="b dib w-auto pv2 ma0">THINGS I HAVE DONE</h2>

      <div className="mt1 mb3">
          <a
            className="link black-80 hover-green pb2 f6"
            href="./boomrang-data.js" download
          >
            resume
          </a>
      </div>
      <h4 className=" dib w-auto pv1 ma0">Education </h4>
      {education.map(school => {
        return (
          <div className="mt1 f6">
        <span className="f6 ttu fw7 tracked black">
          {school.name}
        </span>
        <span className="f7"> {school.dates}</span>
        <p className="p0 m0">{school.location}</p>
        <p className="p0 m0"> {school.degree}</p>
      </div>
        )
      })}

      <h4 className=" dib w-auto pv1 ma0">Tech</h4>
      {tech.map(job => {
        return (
          <div className="mt1 f6">
        <span className="f6 ttu fw7 tracked black">
          {job.company}
        </span>
        <span className="f7"> {job.dates}</span>
        <p className="pt1 mt1">{job.title}</p>
        <p className="pb1 mb1"> {job.duties}</p>
      </div>
        )
      })}
      <h4 className=" dib w-auto pv1 ma0">Science</h4>
      {science.map(job => {
        return (
          <div className="mt1 f6">
        <span className="f6 ttu fw7 tracked black">
          {job.company}
        </span>
        <span className="f7"> {job.dates}</span>
        <p className="pt1 mt1">{job.title}</p>
        <p className="pb1 mb1"> {job.duties}</p>
      </div>
        )
      })}

    </div>
  );
};

export default Life;

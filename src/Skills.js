import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import skills from './skills-list';

const Skills = () => {
    const well = skills.well
    return (
      <section className="mt3 ph3-s ph6-m ph3-l measure-l  ">
        <h2 className="b dib w-auto pv2 ma0 ttu">THINGS I KNOW</h2>

        <div className="black-80 pv2 f7 tracked" >
          I want to believe that I can pickup skills fairly quickly. I am a huge fan of clean and nicely written documentation and if that is not possible I enjoy making cheat sheets. I really like doing tutorials and learning a bit of different frameworks and languages because an exposure of something will help me relate topics together! If there is a skill you think I should learn drop me a note <a href='mailto:mupraj10@gmail.com'> here. </a>
        </div>

        <div className="mt1 mb3" />

        <div className="mt1 mb3 f6">
          <span className="f5 ttu bb fw7 tracked black">Proficient </span>
          <div className="black-80 pv2 f7" >
          ones I feel the most comfortable with
        </div>
          {skills.well.map(skill => (
            <p className="f6 mv1 lh-copy black">{skill}</p>
          ))}
        </div>

        <div className="mt1 mb3 f6">
          <span className="f5 ttu bb fw7 tracked black">Knowledgeable</span>
          <div className="black-80 pv2 f7" >
          ones I know but need a bit of refreshing
        </div>
          {skills.kinda.map(skill => (
            <p className="f6 mv1 lh-copy black">{skill}</p>
          ))}
        </div>

        <div className="mt1 mb3 f6">
        <span className="f5 ttu bb fw7 tracked black">Familiar</span>
        <div className="black-80 pv2 f7" >
          ones I learned at some point and will be able to pickup with some documentation review
        </div>
        {skills.help.map(skill => (
          <p className="f6 mv1 lh-copy black">{skill}</p>
        ))}
      </div>
      </section>
    );
}

export default Skills;


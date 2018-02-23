import React from 'react';
import skills from './data/skills-list'

const Skills = () => {

    return (

      <div className="">
        <h2 className="tc ma1">THINGS I KNOW</h2>

        <div className="black-80 pv2 f7 " >

          I love learning new things. Know about a new language or an interesting framework? <a className='link fw7 black' href='mailto:mupraj10@gmail.com'> Send me a message </a> and I will definitely look into it. 
        </div>

        <div className="mt1 mb3">
          <h3 className="dib w-auto pv1 ma0 ttu tracked bb">Proficient </h3>
          <div className="black-80 pv2 f7" >
          ones I feel the most comfortable with
        </div>
          {skills.well.map(skill => (
            <p  key={`${skill}-well`} className="f6 mv1 lh-copy">{skill}</p>
          ))}
        </div>

        <div className="mt1 mb3">
          <h3 className="dib w-auto pv1 ma0 ttu tracked bb">Knowledgeable</h3>

          <div className="black-80 pv2 f7" >
          ones I know but need a bit of refreshing
        </div>
          {skills.kinda.map(skill => (
            <p key={`${skill}-kinda`}  className="f6 mv1 lh-copy black">{skill}</p>
          ))}
        </div>

        <div className="mt1 mb3">
        <h3 className="dib w-auto pv1 ma0 ttu tracked bb">Familiar</h3>
        <div className="black-80 pv2 f7" >
          ones I learned at some point and will be able to pickup with some documentation review
        </div>
        {skills.help.map(skill => (
          <p key={`${skill}-help`}  className="f6 mv1 lh-copy black">{skill}</p>
        ))}
      </div>
      </div>
    );
}

export default Skills;


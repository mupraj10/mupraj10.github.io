import React, { Component } from "react";
import { Link } from "react-router-dom";


const AboutMe = () => {
  return (

    
    <div className="f6 tl pa2 ph3-l measure lh-copy">
          <p className='tc ma0 pa0'> Hello there.<span> 👋 </span> </p>

          <br />
          <p className='ma0 pa0'> 
          
          I am a Full Stack Developer interested in creating simple solutions to
          everyday problems <Link to="/projects">#firstworldproblems</Link>.
         
          Previously, I worked as a Research Assistant in a virology lab and was
          an Apple Genius before moving to the realm of programming
          <Link to="/life">#experiences</Link> .
         
          I enjoy finding pizza and desserts in New York City, Boomranging, and
          taking photos with my iPhone and posting them on{" "}
          <a
            className="no-underline gray "
            href="https://www.instagram.com/maggyidk/"
          >
            Instagram
          </a>. <Link to="/fun">#funthings </Link>
          <br />
          </p>
        </div>
      
  );
};

export default AboutMe;

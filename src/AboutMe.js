import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Card, BackgroundImage, Heading, Text, Small } from "rebass";
import { Grid } from "grid-styled";

const AboutMe = () => {
  return (
    <div className="mb5 ba cf w-90-l pt3 center relative contain">
      <div className="w-100 w-50-l ba loose-top fixed-l">
      <div className="f3 fl pv3 ttu tracked fs-normal mt0 mb0"> 
      Who am I?
      </div>
      
      
      </div>

      <div className=" ba w-100 relative mt3 mt0-l w-50-l ph3 ph0-l fr-l cf interviewsContainer">
        <div >
          Hello there. 👋
          <br />
          I am a Full Stack Developer interested in creating simple solutions to
          everyday problems. <Link to="/projects">#firstworldproblems</Link>
          <br />
          Previously I worked as a Research Assistant in a virology lab and was
          an Apple Genius before moving to the realm of programming.
          <Link to="/life">#experiences</Link>
          <br />
          I enjoy finding pizza and desserts in New York City, Boomranging, and
          taking photos with my iPhone and posting them on{" "}
          <a
            className="no-underline gray "
            href="https://www.instagram.com/maggyidk/"
          >
            Instagram
          </a>. <Link to="/fun">#funthings </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

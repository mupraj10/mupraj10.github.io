import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Card, BackgroundImage, Heading, Text, Small } from "rebass";
import { Grid } from 'grid-styled'

const AboutMe = () => {
  return (
    <Box p={1}>
      <Heading  bold f={'1.5em'} pl={[1,1,2]} pb={[0,1,2]}>
        WHO AM I?
      </Heading>
      <Text px={4} f={1} align={'center'} >
      Hello there. 👋
      <br />
      I am a Full Stack Developer interested in creating simple
      solutions to everyday problems.{" "}
      <Link to="/projects">#firstworldproblems</Link>
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
    </Text>

     

        <Text ml={'2'} f={18} align={'center'} >
          thigns about me here 
        </Text>
    
    </Box>
  );
};

export default AboutMe;

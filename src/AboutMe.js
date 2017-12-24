import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Card, BackgroundImage, Heading, Text } from "rebass";
import { Grid } from 'grid-styled'

const AboutMe = () => {
  return (
    <Box p={1}>
      <Heading  bold f={4} pl={[1,1,2]} pb={[0,1,2]}>
        WHO AM I?
      </Heading>

      <Grid py={2} w={[1, 1 / 4, 1 / 4]}>
        <Card >
          <BackgroundImage
            ratio={1}
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
          />
        </Card>
      </Grid>

      <Grid w={[1, 3 / 4, 3 / 4]}>
        <Text px={[0,1,2]} f={[2,2,3]} align={'center'} >
          Hello there. 👋
          <br />
          I am Maggy! I am a Full Stack Developer interested in creating simple
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
      </Grid>
    </Box>
  );
};

export default AboutMe;

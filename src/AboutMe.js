import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Card, BackgroundImage, Subhead, Heading, Text } from "rebass";
import { Flex } from "rebass/dist/grid";

const AboutMe = () => {
  return (
    <Box p={1}>
      <Heading  f={3} pl={3}>
        Who am I?
      </Heading>
      <Flex align='left' py={[10,20]} px={[50,100]}>
      <Card width={256}>
	<BackgroundImage
		ratio={1}
		src='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
	/>

</Card>

        <Text f={[1]} justify center >
          Hello there. 👋
          <br/>
           I am Maggy! I am a Full Stack Developer interested in
          creating simple solutions to everyday problems.{" "} 
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
      </Flex>
    </Box>
  );
};

export default AboutMe;

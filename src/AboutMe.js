import React, { Component } from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const linkStyle = "link blue dim";
  return (
    <article className="vh-8 dt w-100 cf pv6-ns pv3 pl3 overflow-container">
      <div className="f3 fl pv3 ttu tracked fs-normal mt0 mb0">Who am I?</div>

      <section className="fl w-100">
        <p className="fl pv3 ph5-ns ph-2 ma1 f5 lh-copy tracked">
          Hello there. I am Maggy! I am a Full Stack Developer interested in
          creating simple solutions to everyday problems.{" "}
          <Link to="/projects" className={linkStyle}>
            {" "}
            #firstworldproblems
          </Link>
          <br />
          Previously I worked as a Research Assistant in a virology lab and was
          an Apple Genius before moving to the realm of programming.
          <Link to="/life" className={linkStyle}>
            {" "}
            #experiences{" "}
          </Link>
          <br />
          I enjoy finding pizza and desserts in New York City, Boomranging, and
          taking photos with my iPhone and posting them on{" "}
          <a
            className="no-underline gray "
            href="https://www.instagram.com/maggyidk/"
          >
            Instagram
          </a>.{" "}
          <Link to="/fun" className={linkStyle}>
            #funthings{" "}
          </Link>
          <br />
        </p>
      </section>
    </article>
  );
};

export default AboutMe;

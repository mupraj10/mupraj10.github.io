import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (

    <div className="lh-copy">
      <h2 className="tc"> Hello there! <span> 👋 </span> </h2>
      <p className="f5">

        I am a Full Stack Developer interested in creating simple solutions to
          everyday problems <Link to="/projects">#firstworldproblems</Link>.

        Previously, I worked as a Research Assistant in a virology lab and was
        an Apple Genius before moving to the realm of programming
          <Link to="/life">#experiences</Link> .

        I enjoy finding pizza and desserts in New York City, Boomranging, and
          taking photos with my iPhone and posting them on <a
          className="no-underline black"
          href="https://www.instagram.com/maggyidk/"
        >
          Instagram
          </a>. <Link to="/fun">#funthings </Link>
        <br />
      </p>
    </div>


  );
}


export default Home;

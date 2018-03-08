import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = 'link b black hover-dark-gray'

  return (

    <div className="lh-copy">
      <h2 className="tc"> Hello there! <span role='img'> 👋 </span> </h2>
      <p className="f5">

        I am a Full Stack Developer interested in creating simple solutions to everyday  <Link className={styles} to="/projects">problems</Link>. <span role='img'> 👋 </span> 

        Previously, I <Link className={styles} to="/life"> worked </Link>  as a Research Assistant in a virology lab and was
        an Apple Genius before moving to the realm of programming <span role='img'> 👋 </span> .

        I completed a 13 week immersive Javascript bootcamp at <a className={styles} > Grace Hopper </a> and recently finished a teaching fellowship. 

        <br/>
        I <Link className={styles} to="/fun"> enjoy </Link>
        <br />
      </p>
    </div>


  );
}


export default Home;

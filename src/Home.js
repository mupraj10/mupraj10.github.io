import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = 'link b black hover-dark-gray';
  const emoji = 'f3'

  return (

    <div className="lh-copy">
      <h2 className="tc"> Hello there! <span className={emoji} aria-label="hello" role="img"> 👋 </span> </h2>
      <p className="f5 tc">

        I am a Software Engineer interested in creating simple solutions to everyday  <Link className={styles} to="/projects">problems</Link>. <span className={emoji} aria-label="girl typing" role="img"> 👩‍💻 </span>
        <br />
        In my previous life, I <Link className={styles} to="/life"> worked </Link>  as a Research Assistant in a virology lab <span aria-label="syringe" className={emoji} role="img"> 💉 </span>   and was
       an Apple Genius. <span className={emoji} aria-label="atom" role="img"> ⚛️ </span>
       <br />
        I recently graduated from and completed a teaching fellowship at  <a href="https://www.gracehopper.com/" className={styles} > Grace Hopper. </a>  <span className={emoji} aria-label="graduating girl" role="img"> 👩‍🎓 </span>

        <br />
        I <Link className={styles} to="/fun"> enjoy </Link> taking photos, eating delicious food and exploring new places. <span aria-label="cake" className={emoji} role="img"> 🍰 </span>
        <br />
        Currently, I am looking for my first Full Stack Developer/Software Engineer position, if you know one I would enjoy <a href="mailto:mupraj10@gmail.com" className={styles}> let me know!  </a>
        <br />
      </p>
    </div>


  );
}


export default Home;

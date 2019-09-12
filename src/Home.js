import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from './Emoji'

const Home = () => {
  const styles = 'link b black hover-dark-gray';

  return (

    <div className="lh-copy">
      <h2 className="tc"><Emoji label="hello" symbol="👋" />  Hello there! </h2>
      <div className="f6 tc">
        <Emoji label="typing" symbol='👩‍💻' /> I <Link className={styles} to="/me">am</Link> a New York City based Software Engineer interested in creating simple solutions to everyday  <Link className={styles} to="/projects">problems</Link>.
       <br />
        In my previous <Link className={styles} to="/life">life</Link>,
        <br />
        <Emoji label="brain" symbol="🔮" /> I was deeply interested learning in how the brain worked so I ended up with a BSc in Neuroscience
        <br />
        <Emoji label="syringe" symbol="💉" /> I conducted experiments to find out about how fusion works between cells and viruses
        <br />
        <Emoji label="atom" symbol="⚛️" /> I solved complex customer Mac/iPhone issues as an Apple Genius

        <span> <Emoji label="graduating" symbol="👩‍🎓" /> I graduated from and completed a teaching fellowship at  <a href="https://www.gracehopper.com/" className={styles} > Grace Hopper </a>  </span>

        <br />
        <Emoji label="cake" symbol="🍰" /> I <Link className={styles} to="/fun"> enjoy </Link> taking photos, eating delicious food and exploring new places

        <br />
        <Emoji label="dancing" symbol="💃🏽" /> I learned all about Content Management Systems as Software Engineering Intern at  <a href="https://www.refinery29.com/" className={styles} >Refinery29</a>.
 
       <p> <Emoji label="air hands" symbol="🙌🏽 " /> Currently, I work as an Software Engineer at  <a href="https://www.kustomer.com/" className={styles} >Kustomer</a> helping clients get up and running to build customer friendships </p>

        <span> I am always looking for a new challenge, if you know of one
       <br />
          <a href="mailto:mupraj10@gmail.com" className={styles}> let me know! </a>
        </span>

      </div>
    </div>


  );
}


export default Home;

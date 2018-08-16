import React from 'react';
import { Link } from 'react-router-dom';
import Emoji from './Emoji'

const Home = () => {
  const styles = 'link b black hover-dark-gray';

  return (

    <div className="lh-title">
      <h2 className="tc"><Emoji label="hello" symbol="👋"/>  Hello there! </h2>
      <div className="f5 tj">

      <Emoji label="typing" symbol='👩‍💻'/>I am a New York City based Full Stack Developer interested in creating simple solutions to everyday  <Link className={styles} to="/projects">problems</Link>. 
        <br />
        <p > In my previous <Link className={styles} to="/life">life</Link>,</p>
        <p className="pl4"> 
        <Emoji label="brain" symbol="🔮"/>I was deeply interested learning in how the brain worked so I ended up with a BSc in Neuroscience
        <br />   
        <Emoji label="syringe" symbol="💉"/>I conducted experiments to find out about how fusion works between cells and viruses
        <br />   
        <Emoji label="atom" symbol="⚛️"/>I solved complex customer Mac/iPhone issues as an Apple Genius  </p>
       
        <p> 
        <Emoji label="graduating" symbol="👩‍🎓" />I recently graduated from and completed a teaching fellowship at  <a href="https://www.gracehopper.com/" className={styles} > Grace Hopper. </a>  
       </p>
        
        <p> 
        <Emoji label="cake" symbol="🍰" />I <Link className={styles} to="/fun"> enjoy </Link> taking photos, eating delicious food and exploring new places.
        </p>
       
       <p> <Emoji label="dancing" symbol="💃🏽"/>Currently, I am a Software Engineering Intern at  <a href="https://www.refinery29.com/" className={styles} >Refinery29</a>.</p>

       <p> I am looking for my first full time Full Stack Developer/Software Engineer position, if you know one I would enjoy <a href="mailto:mupraj10@gmail.com" className={styles}> let me know!  </a> </p>
        
        
     
     
      </div>
    </div>


  );
}


export default Home;

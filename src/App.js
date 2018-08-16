import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


import Home from './Home';
import AboutMe from './AboutMe';
import Life from './Life';
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import Fun from './Fun';
import Skills from './Skills';
import Talks from './Talks';
import Writing from './Writing';
import Navbar from './Navbar';
import Footer from './Footer';



 const App = () => {
    return (

      <Router>


        <article className="mw6 mw7-ns center home br3 pt3 ph3 pb1 ph5-ns code">


          <Link className=' link b black hover-dark-gray ' to='/' > <h1 className="scripty f2-ns f3 ma3 tc tracked ttu">Maggy Prajapati</h1> </Link>
            <hr className="hrule" />

          <div className="mw7-ns pa2 ph4-ns vh-75 overflow-y-auto">
            <Route exact path="/" component={Home} />
            <Route exact path="/me" component={AboutMe} />
            <Route exact path="/life" component={Life} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:name" component={ProjectCard} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/talking" component={Talks} />
            <Route exact path="/writing" component={Writing} />
            <Route exact path="/fun" component={Fun} />

          </div>
          
          <Footer />
        </article>
      </Router>

    );
  }


export default App;

// #a7ba7b : #54437d  #4b4b4b : #c28988  #c3a481 : #3b5777 #f8d7f2 : #012608

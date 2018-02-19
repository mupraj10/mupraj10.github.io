import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home";
import AboutMe from "./AboutMe";
import Life from "./Life";
import Projects from "./Projects";
import ProjectCard from "./ProjectCard";
import Fun from "./Fun";
import Skills from './Skills';
import Talks from "./Talks";
import Writing from "./Writing";
import Navbar from "./Navbar";
import Footer from "./Footer";




class App extends Component {
  render() {
    return (

      <Router>


        <article className="mw6 mw7-ns center home br3 vh-100 pa3 ph5-ns">
    
 
          <h1 className="scripty f2-ns f3 ma3 tc tracked ttu">Maggy Prajapati</h1>
          
         
            <Navbar />
            <hr className='black' />

          <div className="mw5 mw7-ns pa3 ph5-ns vh-75 overflow-y-scroll">
            <Route exact path="/" component={Home} />
            <Route exact path="/me" component={AboutMe} />
            <Route exact path="/life" component={Life} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/:name" component={ProjectCard} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/talking' component={Talks} />
            <Route exact path="/writing" component={Writing} />
            <Route exact path="/fun" component={Fun} />

          </div>
          <hr className='black' />
          <Footer />
        </article>










      </Router>

    );
  }
}

export default App;

// #a7ba7b : #54437d  #4b4b4b : #c28988  #c3a481 : #3b5777 #f8d7f2 : #012608

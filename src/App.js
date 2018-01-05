import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home";
import AboutMe from "./AboutMe";
import Life from "./Life";
import Projects from "./Projects";
import ProjectCard from "./ProjectCard";
import Fun from "./Fun";
import Writing from "./Writing";
import Navbar from "./Navbar";
import Footer from "./Footer";


class App extends Component {
  render() {
    return (

        <Router>
          <div className="pa4-l normal ">
            <div className="h-100 pa3 ph0-l pv4-l bg-black-05">
              <div className="center mw7 bg-black-20">
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/me" component={AboutMe} />
                <Route exact path="/life" component={Life} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:name" component={ProjectCard} />
                <Route exact path="/writing" component={Writing} />
                <Route exact path="/fun" component={Fun} />

                <Footer />
              </div>
              
            </div>
          </div>
        </Router>
  
    );
  }
}

export default App;

// #a7ba7b : #54437d  #4b4b4b : #c28988  #c3a481 : #3b5777 #f8d7f2 : #012608

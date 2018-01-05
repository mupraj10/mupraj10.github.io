import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import styled from 'styled-components'
import {
  Provider,
  Box, Container, Caps, Link,  Pre
} from 'rebass';
import { Grid } from 'grid-styled'

import Home from './Home';
import AboutMe from './AboutMe';
import Life from './Life';
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import Fun from './Fun';
import Writing from './Writing';
import Navbar from './Navbar';
import Footer from './Footer';

const theme = {
  font: '"Karla", sans-serif',
  breakpoints: [
    // min-width breakpoints in ems
    40, 52, 64
  ],
  fontSizes: [8, 12, 16, 20, 24, 36, 48, 72],
  space: [0, 8, 16, 32, 64, 128],
  weights: [200, 400, 600,800],
  colors: {
    blue: '#3b5777',
    yellow: '#c3a481',
    pink: '#f8d7f2',
    white: '#4b4b4b', 
    green:'#1c4f48'

  }
};



class App extends Component {
  render() {
    return (
      <Provider theme={theme}>

        <Router>
          <Box color='green' my={3} mx={3} p={3}>
          <Navbar />

            
           
                <Route exact path="/" component={Home} />
                <Route exact path="/me" component={AboutMe} />
                <Route exact path="/life" component={Life} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/projects/:name" component={ProjectCard} />
                <Route exact path="/writing" component={Writing} />
                <Route exact path="/fun" component={Fun} />

            </Box>
    

        </Router>
    
      </Provider>
    );
  }
}

export default App;

// #a7ba7b : #54437d  #4b4b4b : #c28988  #c3a481 : #3b5777 #f8d7f2 : #012608

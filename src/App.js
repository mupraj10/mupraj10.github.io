import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { Provider, Divider, Flex, Box, Container } from "rebass";

import Sidebar from "./Sidebar";

import Home from "./Home";
import AboutMe from "./AboutMe";
import Life from "./Life";
import Projects from "./Projects";
import ProjectCard from "./ProjectCard";
import Fun from "./Fun";
import Writing from "./Writing";

class App extends Component {
  render() {
    return (
      <Provider
        theme={{
          font: '"Avenir Next", Helvetica, sans-serif',
          fontSizes: [12, 16, 24, 36, 48, 72], 
          colors:{
            blue:'#3b5777',
            yellow:'#c3a481'
          }
        }}
      >


      <Container  bg='blue' p={[2,3,5]} > 
          <Router>

            <Flex wrap>
              <Sidebar />

              <Box bg='yellow' w={[ 1, null, 3/4 ]}>
             
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/me" component={AboutMe} />
                  <Route exact path="/life" component={Life} />
                  <Route exact path="/projects" component={Projects} />
                  <Route exact path="/projects/:name" component={ProjectCard} />
                  <Route exact path="/writing" component={Writing} />
                  <Route exact path="/fun" component={Fun} />
                </Switch>
              </Box>
            </Flex>

          </Router>
          </Container>
      </Provider>
    );
  }
}

export default App;

// #a7ba7b : #54437d  #4b4b4b : #c28988  #c3a481 : #3b5777

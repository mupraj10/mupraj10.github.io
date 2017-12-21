import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar'

import Home from './Home';
import AboutMe from './AboutMe';
import Life from './Life'
import Projects from './Projects';
import ProjectCard from './ProjectCard';
import Fun from './Fun';
import Writing from './Writing';

class App extends Component {
  render() {


    return (

      <article className="system serif">
      <Router>
        <div className="vh-100 dt w-100 tc bg-washed-green cover">

          <Sidebar />


          <div className="fl w-100 w-70-m w-70-l">

                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/me" component={AboutMe} />
                <Route exact path='/life' component={Life} />
                <Route exact path="/projects" component={Projects}  />
                <Route exact path='/projects/:name' component={ProjectCard} />
                <Route exact path="/writing" component={Writing} />
                <Route exact path="/fun" component={Fun}  />
              </Switch>

          </div>
       </div>
        </Router>
      </article>
    );
  }
}

export default App;

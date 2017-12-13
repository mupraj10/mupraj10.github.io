import React, { Component } from "react";
import { HashRouter as Router,  Route, Switch } from "react-router-dom";

import Sidebar from './Sidebar'

import Home from './Home';
import Life from "./Life";
import Projects from "./Projects";
import Fun from "./Fun";

class App extends Component {
  render() {
    

    return (
      
      <article className="avenir">
      <Router>
        <div className="vh-100 dt w-100 bg-washed-green cover">
     
          <Sidebar />
         

          <div className="fl w-100 w-70-m w-70-l">
          this is supposed to be on the side
         
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/life" component={Life} />
                <Route exact path="/projects" component={Projects}  />
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

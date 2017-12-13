import React, { Component } from 'react';
import {  Link } from "react-router-dom";



export default class Navbar extends Component {
  render() {
    const btstyle =
    "f4 fw6 db pa2 no-underline bg-animate hover-bg-dark-pink";
    return (
      <div className="fl w-100 w-30-m w-30-l vh-100  br b--light-silver">
      <div className="measure tc pt6 pl2 pr2">
      <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
        <div className="f3 ttu tracked fs-normal">Maggy Prajapati</div>
        <div className="pa2 lh-copy">
          <Link className={btstyle} to="/life">
            Life
          </Link>
          <Link className={btstyle} to="/projects">
            Projects
          </Link>
          <Link className={btstyle} to="/fun">
            Fun
          </Link>
          <Link className={btstyle} to="/contact">
            Contact
          </Link>
        </div>
      </div>
      </div>
    );
  }
}



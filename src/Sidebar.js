import React, { Component } from 'react';
import {  Link } from "react-router-dom";



export default class Navbar extends Component {
  render() {
    const btstyle =
    "f4 fw6 db pa2 no-underline bg-animate hover-bg-dark-pink";
    return (
      <div className="fl w-100 w-30-m w-30-l">
      <div className="ph0 mh0 measure f4 lh-copy center">
        <cite className="f3 ttu tracked fs-normal">Maggy Prajapati</cite>
        <div className="pa4 lh-copy">
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



import React, { Component } from 'react';
import {  Link } from "react-router-dom";

const titles = ['life', 'projects', 'fun', 'contact'];

export default class Navbar extends Component {
  render() {
    const btstyle =
    "f4 fw6 db pa2 no-underline bg-animate hover-bg-dark-pink";
    return (
      <div className="fl w-100 w-30-m w-30-l vh-100-ns vh-50  br-ns">
      <div className="measure tc pv4 ph2 ph3-s">
      <img src="http://tachyons.io/img/avatar_1.jpg" className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
        <div className="f2 f3-m ttu tracked fs-normal">Maggy Prajapati</div>
        <div className="pa2 lh-copy db-ns flex justify-center">
          {titles.map(title => {
            return(
              <Link key={title} className={btstyle} to={`/${title}`}> {title} </Link>
            )
          })}
        
        </div>
      </div>
      </div>
    );
  }
}



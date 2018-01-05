import React, { Component } from 'react';
import {  Link } from 'react-router-dom';


const titles = ['me', 'life', 'projects', 'skills','fun',];


export default class Navbar extends Component {
  render() {

    return (


  <nav className="db dt-l w-100  pa2 ph3-l">
  <div className="db dtc-l v-
  mid w-100 w-25-l tc tl-l mb2 mb0-l tracked ttu link f4"> <img
  src="http://tachyons.io/img/logo.jpg"
  className="br-100 h3 w3 dib" alt="avatar" /></div>
  

  
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
  {titles.map(title => {
          return (
            <Link className="link black-80 hover-yellow f6 dib mr3 mr3-l" to={`/${title}`} key={title} >{title}</Link>

          )
        })}


  </div>
</nav>


    );
  }
}



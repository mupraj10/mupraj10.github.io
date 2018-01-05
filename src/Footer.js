import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import links from './my-info.js'



export default class Footer extends Component {
  render() {
    
    return (
      <footer className="db dt-l w-100 pa2 ph3-l">
      
      <div className="db dtc-l v-
  mid w-100 w-25-l tc tl-l mb2 mb0-l tracked ttu f5" >
  Maggy Prajapati
  </div>
      
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
  {links.map(link =>  <a className="link black-80 hover-green pl2 f6" to={link.link}> {link.name} </a> )}
   
    
  </div>

</footer>
    );
  }
}



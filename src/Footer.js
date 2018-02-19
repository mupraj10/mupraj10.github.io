import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import links from './my-info.js'



export default class Footer extends Component {
  render() {
    
    return (
      <footer className="cf tc mt3">
  
  {links.map(link =>  <a className="link black-80 hover-yellow dib mr3 f4" to={link.link}> {link.name} </a> )}
   

</footer>
    );
  }
}



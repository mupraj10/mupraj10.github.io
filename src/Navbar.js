import React from 'react';
import {  Link } from 'react-router-dom';


const titles = ['me', 'life', 'projects', 'skills', 'fun' ];


const Navbar = () => {
    return (


  <nav className="tc">
  {titles.map(title => {
          return (
            <Link className ="link black-80 hover-yellow dib mr3 f5" to={`/${title}`} key={title} >{title}</Link>

          )
        })}

  </nav>

    )
  }

export default Navbar;


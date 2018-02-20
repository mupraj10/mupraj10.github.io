import React from 'react';

import links from './my-info.js'


const Footer = () => {

  return (
    <footer className="cf tc mt3">
      {links.map(link => <a key={link.name} className="link black-80 hover-yellow dib mr3 f4" to={link.link}> {link.name} </a>)}

    </footer>
  );
}

export default Footer;

import React from "react";
import { Link } from 'react-router-dom';

const events = [{a:1},{a:1},{a:1},{a:1},{a:1}];

const Life = () => {
  return (
    <div  className="mt3 pa2 ph3-l">
    <h2 className="b dib w-auto ">Experience</h2>
<br/>
    <h3 className=" dib w-auto pa0 ma0">Tech-related</h3>
  
    <div className="mt1">
      <span className="b mr2 pv2 mv2"><a href="https://www.digitalocean.com"  className="midnight-blue link hover-highlight-link">Fullstack Academy</a></span>
      <span>September 2017 – now</span>
      <p className={'pv1 mv1'}>Teaching Fellow </p>
    </div>
  
   
  </div>
  );
};

export default Life;

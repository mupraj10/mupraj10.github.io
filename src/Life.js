import React from "react";
import { Link } from 'react-router-dom';

const events = [{a:1},{a:1},{a:1},{a:1},{a:1}];

const Life = () => {
  return (
    <div  className="mt3 ph6 ph5-l measure-l ">
    <h3 className="b dib w-auto pv2 ma0">Experience</h3>
<br/>
    <h4 className=" dib w-auto pv1 ma0">Tech-related</h4>
  
    <div className="mt1 f6">
      <span className="b mr2 pv2 mv2 "><a href="https://www.digitalocean.com">Fullstack Academy</a></span>
      <span>September 2017 – now</span>
      <p className={'pv1 mv1'}>Teaching Fellow </p>
    </div>

    <h4 className=" dib w-auto pv1 ma0">Science-related</h4>
  
    <div className="mt1 f6">
      <span className="b mr2 pv2 mv2 "><a href="https://www.digitalocean.com">Fullstack Academy</a></span>
      <span>September 2017 – now</span>
      <p className={'pv1 mv1'}>Teaching Fellow </p>
    </div>
  
   2
  </div>
  );
};

export default Life;

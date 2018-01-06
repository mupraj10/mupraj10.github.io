import React from "react";
import { Link } from "react-router-dom";

const events = [{ a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }, { a: 1 }];

const Life = () => {
  return (
    <div className="mt3 ph3-s ph6-m ph3-l measure-l  ">
      <h2 className="b dib w-auto pv2 ma0">THINGS I HAVE DONE</h2>
      
      <div className='mt1 mb3'>
          <a
            className="link black-80 hover-green pb2 f6"
            href='./boomrang-data.js' download
          >
            resume
          </a>
      </div>
      <h4 className=" dib w-auto pv1 ma0">Tech</h4>
      <div className="mt1 f6">
        <span className="f6 ttu fw7 tracked black">
          Fullstack Academy 
        </span>
        <span className='f7'> September 2017 – now</span>
        <p className="pv1 mv1">Teaching Fellow </p>
      </div>
      <h4 className=" dib w-auto pv1 ma0">Science</h4>
      <div className="mt1 f6">
        <span className="f6 ttu fw7 tracked black">
          Fullstack Academy 
        </span>
        <span className='f7'> September 2017 – now</span>
        <p className="pv1 mv1">Teaching Fellow </p>
      </div>
    
    </div>
  );
};

export default Life;

import React from "react";
import { Link } from 'react-router-dom';

const events = [{a:1},{a:1},{a:1},{a:1},{a:1}];

const Life = () => {
  return (
    <article className="vh-8 dt w-100 cf pv6-ns pv3 pl3">
      <div className="f3 fl pv3 ttu tracked fs-normal mt0 mb0">Things I have done.</div>

      <section className="flex flex-column w-100 vh-50 pa3-m pa4-l ba">
      
      <div className='flex' > 
      <span className='pa2 br3 bg-animate hover-bg-pink'> Tech </span>  
      <span className='pa2 br3 bg-animate hover-bg-pink'> Science </span>
      </div>

      <div className=' vh-8 dt w-100 cf pv6-ns pv3 pl3 ba'> 
      {
          events.map(evt => <span>{evt.a} </span>)
      }
      </div>
      
    </section>
    </article>
  );
};

export default Life;

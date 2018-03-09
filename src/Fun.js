import React from 'react';

import Quotes from './Quotes';
// import Boomrangs from './BoomrangContainer';
import Photos from './PhotoContainer';

const Fun = () => {
  return (
    <section className="">
      <h2 className="tc ma1">THINGS I DO FOR FUN</h2>

      <div className="mt1 mb3">
        <h3 className="dib w-auto pv1 ma0 ttu tracked">Quotes API</h3>
        <div className="black-80 pv2 f7 " >
        I enjoy building out fun projects because they help me learn!
        </div>
        <Quotes />
      </div>

      <div className="mt1 mb3 ">
      <h3 className="dib w-auto pv1 ma0 ttu tracked">Amateur iPhone Photographer</h3>
      <div className="black-80 pv2 f7 " >
      I recently went on a trip to India and Dubai. Here are some photos!
      </div>
      <Photos />
    </div>
    </section>
  );
};

export default Fun;


// <div className="mt1 mb3 ">
      
// <h3 className="dib w-auto pv1 ma0 ttu tracked">BOOMRANGS</h3>
// <div className="black-80 pv2 f7" >
// Click on one to play it!
// </div>
// <Boomrangs />
// </div>
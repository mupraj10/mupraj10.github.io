import React from 'react';

import Quotes from './Quotes';
import Boomrangs from './BoomrangContainer';

const testImages = ['a', 'b', 'c', 'd', 'e'];

const Fun = () => {
  return (
    <section className="">
      <h2 className="tc ma1">THINGS I DO FOR FUN</h2>

      <div className="mt1 mb3 ">
        <h3 className="dib w-auto pv1 ma0 ttu tracked">BOOMRANGS</h3>
        <Boomrangs />
      </div>

      <div className="mt1 mb3">
        <h3 className="dib w-auto pv1 ma0 ttu tracked">Quotes API</h3>
        <Quotes />
      </div>

      <div className="mt1 mb3 ">
        <h3 className="dib w-auto pv1 ma0 ttu tracked">Food</h3>
        container for food pictures
      </div>
    </section>
  );
};

export default Fun;

import React from "react";

import Quotes from "./Quotes";

const testImages = ["a", "b", "c", "d", "e"];
const Fun = () => {
  return (
    <section className="mt3 ph6 ph5-l measure-l">
      <h2 className="b dib w-auto pv2 ma0">THINGS I DO FOR FUN</h2>

      <div className="mt1 mb3 f6">
        <p className="f5 ttu fw7 tracked black">BOOMRANGS</p>
        container for boomrangs
      </div>

      <div className="mt1 mb3 f6">
        <div className="f5 ttu fw7 tracked black">Quotes API</div>
        <Quotes />
      </div>

      <div className="mt1 mb3 f6">
        <div className="f5 ttu fw7 tracked black">Food</div>
        container for food pictures
      </div>
    </section>
  );
};

export default Fun;

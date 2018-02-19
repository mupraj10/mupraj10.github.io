import React from "react";

import Quotes from "./Quotes";
import Boomrangs from './BoomrangContainer';

const testImages = ["a", "b", "c", "d", "e"];
const Fun = () => {
  return (
    <section className=" ">
      <h2 className="b dib w-auto pv2 ma0">THINGS I DO FOR FUN</h2>

      <div className="mt1 mb3 f6">
        <p className="f5 ttu fw7 tracked black">BOOMRANGS</p>
        <Boomrangs />
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

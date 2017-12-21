import React from 'react';

import Quotes from './Quotes';

const testImages = ['a', 'b', 'c', 'd', 'e'];
const Fun = () => {
    return (
      <section className="vh-8 dt w-100 cf pv6-ns pv3 pl3 overflow-container">
        <div className="f3 fl pv4 ttu tracked fs-normal mt0 mb0">
          Things I do for fun!
        </div>

        <div className="f4-ns f3 fl dt w-100 pv2 ttu tracked fs-normal mt0 mb0">
          Boomrangs
        </div>

        <div className="flex flex-wrap w-100 vh-25 pa3-m pa4-l dt overflow-x-scroll">
          {testImages.map(image => {
            return (
              <div key={image} className="fl w-25 pa1">
                <div className="aspect-ratio link hide-child aspect-ratio--1x1">
                  <img
                    style={{
                      backgroundImage:
                        'url(https://s3.amazonaws.com/mup-portfolio-site/gh-babies.mp4)'
                    }}
                    className="db bg-center cover aspect-ratio--object"
                  />
                  <div className="white aspect-ratio--object child bg-black-40 pv5-ns pv4">
                    Card title
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="f4-ns f3 fl dt w-100 pv2 ttu tracked fs-normal mt0 mb0">
          Quotes
        </div>
        <Quotes />

        <img src='./images/gh-babies.mov' />
      </section>
    );
  
}


export default Fun;
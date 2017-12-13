import React, { Component } from 'react';



export default class Life extends Component {
  render() {
    console.log('in life')
    return (

        <article className=" vh-8 dt w-100 cf pa3 mw9 center">


          <header className="fl w-100">
            <h2 className="lh-title f3 b mt0 mb0">
              Who am I? / Life
            </h2>
          </header>


          <section className="fl w-100">
          
            <div className="fl w-100 w-25-m w-25-l pa3-m pa4-l">
              <p className="f6 lh-copy measure">
                Image of me here
              </p>
            </div>


            <div className="fl w-100 w-75-m w-75-l pa3-m pa4-l">
              <p className="f6 lh-copy">
               Things about me. Amazing things.
              </p>
            </div>
          </section>
          </article>
    );
  }
}


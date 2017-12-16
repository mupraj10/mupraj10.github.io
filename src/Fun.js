import React, { Component } from "react";

const testImages = ['a', 'b', 'c', 'd']
export default class Fun extends Component {
  render() {
    return (
      <section className="vh-8 dt w-100 cf pv6-ns pv3 pl3 overflow-container">


        <div className="f4-ns f3 fl pv4 ttu tracked fs-normal mt0 mb0">
          Things I do for fun!
        </div>

        <div className='w-100 pa3-m pa4-l dt'>
        
        {testImages.map(image=> {
          return(
            <div key={image} className='fl w-100 w-25-m w-25-ns pa2-ns'> 
            <div
            style={{ backgroundImage: "url(http://mrmrs.github.io/images/0010.jpg)" }}
            className="link aspect hide-child br3 cover bg-center"
          >
            <div className="white  br3 child bg-black-40 pa5">
              Card title
            </div>
          </div>
            
            </div>
           

          )
        })}
        
       
        
        
    

        </div>
      </section>
    );
  }
}

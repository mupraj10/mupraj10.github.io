import React, { Component } from "react";

const ronQuoteUrl = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

export default class Life extends Component {
  constructor(){
    super()
    this.state = {ron: 'Click on Ron for a Quote!'}
    this.handleRon = this.handleRon.bind(this);
  }

  handleRon(evt){
    evt.preventDefault();
    fetch(ronQuoteUrl)
    .then((res)=> res.json())
    .then(ron => this.setState({ron}))
    .catch(err => console.log("this err", err))
  
    

  }

  render() {
    return (
      <article className="vh-8 dt w-100 cf pv6-ns pv3 pl3 overflow-container">
        <div className="f3 fl pv3 ttu tracked fs-normal mt0 mb0">
          Who am I? / Life
        </div>

        <section className="fl w-100">
          <div className="fl w-100 w-25-m w-25-l pa3-m pa4-l">
            <p className="f6 lh-copy measure">Image of me here</p>
          </div>

          <div className="fl w-100 w-75-m w-75-l pa3-m pa4-l">
            <p className="f6 lh-copy">Things about me. Amazing things.</p>
          </div>
        </section>

        <section className='fl w-100'>

        <img onClick={this.handleRon}
        className='h3 w3'
        src='http://static1.squarespace.com/static/5337ddcde4b02a5017cff49e/534d4da6e4b0b5fb9ede1ccc/534d4dbfe4b05838eca29068/1397575103975/ron_swanson_folder+icon.png?format=300w' />

        <div className='red b code'>{this.state.ron}</div>

        </section>
      </article>
    );
  }
}

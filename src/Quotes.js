import React, { Component } from "react";

const ron = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const leslie = "https://leslie-knope-quotes.herokuapp.com/quotes";

export default class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      quote: "Click on Leslie for a quote!"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(evt) {
    const name = evt.target.title;
    const link = name === "ron" ? ron : leslie;
    evt.preventDefault();
    fetch(link)
      .then(res => res.json())
      .then(quote => this.setState({ quote }))
      .catch(err => console.log("this err", err));
  }

  render() {
    return (
      <section className="fl w-100">

        <img
          onClick={this.handleClick}
          title="leslie"
          className="mt2 h3 w3"
          src="https://78.media.tumblr.com/f9f457178d53a883deeca856eb44d8bb/tumblr_mwokngzqS31swnmv6o6_400.png"
        />
          <blockquote className="pa0 ml0 b">
            {this.state.quote}
          </blockquote>

        
      
      </section>
    );
  }
}

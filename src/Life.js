import React, { Component } from "react";
import { Link } from "react-router-dom";

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
  const linkStyle='link blue dim'
    return (
      <article className="vh-8 dt w-100 cf pv6-ns pv3 pl3 overflow-container">
        <div className="f3 fl pv3 ttu tracked fs-normal mt0 mb0">
          Who am I? 
        </div>

        <section className="fl w-100">

         
            <p className="fl pv3 ph5-ns ph-2 ma1 f5 lh-copy tracked">
            Hello there. I am Maggy! I am a Full Stack Developer interested in creating simple solutions to everyday problems. <Link to='/projects' className={linkStyle}> #firstworldproblems</Link>
            <br/>
            Previously I worked as a Research Assistant in a virology lab and was an Apple Genius before moving to the realm of programming.
            <a download className={linkStyle} > #experiences </a>
            <br />
            I enjoy finding pizza and desserts in New York City, Boomranging, and taking photos with my iPhone and posting them on <a className='no-underline gray 'href='https://www.instagram.com/maggyidk/'>Instagram</a>. <Link to='/fun' className={linkStyle}>#funthings </Link>
            <br />

            </p>
     
        </section>

        <section className='fl w-100'>

        <img onClick={this.handleRon}
        className='h3 w3'
        src='http://static1.squarespace.com/static/5337ddcde4b02a5017cff49e/534d4da6e4b0b5fb9ede1ccc/534d4dbfe4b05838eca29068/1397575103975/ron_swanson_folder+icon.png?format=300w' />

        <div className='red f7 b code'>{this.state.ron}</div>

        </section>
      </article>
    );
  }
}

import React, {Component} from 'react';

const ron = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const leslie = 'https://leslie-knope-quotes.herokuapp.com/quotes';

export default class Quotes extends Component {
    constructor(){
        super()
        this.state = {
            quote: 'Click on someone for a quote!'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt){
        const name = evt.target.title;
        const link = name === 'ron' ? ron : leslie;
        evt.preventDefault();
        fetch(link)
        .then((res) => res.json())
        .then(quote => this.setState({quote}))
        .catch(err => console.log('this err', err))



    }

    render(){
        return (
            <section className="fl w-100">

        <img
        onClick={this.handleClick}
        title="ron"
        className="h3 w3"
        src="http://static1.squarespace.com/static/5337ddcde4b02a5017cff49e/534d4da6e4b0b5fb9ede1ccc/534d4dbfe4b05838eca29068/1397575103975/ron_swanson_folder+icon.png?format=300w" />

        <img
        onClick={this.handleClick}
        title="leslie"
        className="h3 w3"
        src="https://www.indianapolismonthly.com/wp-content/uploads/sites/3/2016/02/LeslieKnope.jpg" />


        <div className="red f7 b code">{this.state.quote}</div>

        </section>
        )
    }
}

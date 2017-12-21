import React, {Component} from 'react';


export default class PojectCard extends Component{
    constructor(props){
        super(props)
    }



    render(){

        console.log(this.props.match.params.name)

        return(
            <span> in project card </span>
        )
    }
}
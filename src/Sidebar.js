import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import {Box, BlockLink, Heading} from 'rebass';

const titles = ['me','life', 'projects', 'fun', 'writing', 'contact'];
const imgUrl = require('./images/me.jpg')

export default class Navbar extends Component {
  render() {
    const btstyle =
    "f4 fw6 db pa2 no-underline tracked black";
    return (
      
      <Box bg='yellow' w={[ 1, null, 1/4 ]}>
      <div className="measure tc pv4 ph2 ph3-s">
      <img src={imgUrl} className="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" />
        <Heading f={[2]} >MAGGY PRAJAPATI </Heading>
        <div className="pa2 lh-copy db-ns flex justify-center">
          {titles.map(title => {
            return(
               <BlockLink to={`/${title}`} is={Link} p={2}> {title} </BlockLink> 
            )
          })}
        
        </div>
      </div>
      </Box>
    );
  }
}



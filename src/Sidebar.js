import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import {  Box, Flex, Heading, NavLink, Divider, Container} from 'rebass';


const titles = ['me','life', 'projects', 'fun', 'writing', 'contact'];


export default class Navbar extends Component {
  render() {
    
    return (
      
      <Flex column align={['center']}  >
        <Heading caps center fw='bold' pt={[2,2,3]} f={[4, 5, 6]} >MAGGY PRAJAPATI </Heading>
        
        <Flex wrap={['wrap', null , null]} justify='center'  > 
          {titles.map(title => {
            return(
               <NavLink to={`/${title}`} is={Link}  f={[2,2,2]} py={0} px={1} key={title} > {title} </NavLink> 
            )
          })}
        </Flex>
        <Divider w={1}/> 
    
      </Flex>
    );
  }
}



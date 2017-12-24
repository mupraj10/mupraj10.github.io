import React, { Component } from 'react';
import {  Link } from "react-router-dom";

import {  Box, Flex, Heading, NavLink, Divider, Container} from 'rebass';


const titles = ['me','life', 'projects', 'fun', 'writing', 'contact'];
const imgUrl = require('./images/me.jpg')

export default class Navbar extends Component {
  render() {
    
    return (
      
      <Box align='center' column >
        <Heading caps center pt={2} f={[2, 3, 4]} >MAGGY PRAJAPATI </Heading>
        <Flex wrap ={[1,1,2]}>
          {titles.map(title => {
            return(
               <NavLink to={`/${title}`} is={Link}  p={5} key={title}  > {title} </NavLink> 
            )
          })}
        
        </Flex>
        <Divider w={1}/> 
    
      </Box>
    );
  }
}



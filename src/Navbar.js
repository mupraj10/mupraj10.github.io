import React, { Component } from 'react';
import {  Link } from 'react-router-dom';


const titles = ['me', 'life', 'projects', 'fun', 'talking', 'writing', 'contact'];


export default class Navbar extends Component {
  render() {

    return (


  <nav className="db dt-l w-100  pa2 ph3-l">
  <div className="db dtc-l v-
  mid w-100 w-25-l tc tl-l mb2 mb0-l tracked ttu link f4"> <img
  src="http://tachyons.io/img/logo.jpg"
  className="br-100 h3 w3 dib" alt="avatar" /></div>
  

  
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
  {titles.map(title => {
          return (
            <Link className="link black-80 f5 dib mr3 mr3-l" to={`/${title}`} key={title} title={title}>{title}</Link>

          )
        })}


  </div>
</nav>


    );
  }
}



// <div> </div>
// <Flex column align={['center']}  >
//   <Heading caps center fw={900} pt={[2,2,3]} f={[4, 5, 6]}> MAGGY PRAJAPATI </Heading>

//   <Flex wrap={['wrap', null , null]} justify='center'  >
//     {titles.map(title => {
//       return(
//          <NavLink to={`/${title}`} is={Link}  f={[2,2,2]} py={0} px={1} key={title} > {title} </NavLink>
//       )
//     })}
//   </Flex>
//   <Divider w={1}/>

// </Flex>

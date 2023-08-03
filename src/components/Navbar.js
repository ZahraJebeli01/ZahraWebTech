import React from 'react';
import {Link} from 'react-router-dom'; 

function Navbar() {

    //Return a <nav> with Links to Home and About
    return(
      <div>
          <Link to= "/"> Home </Link>
          <Link to= "/showcars"> Show cars </Link>
          <Link to= "/about"> About us </Link>
          <Link to= "/contact"> contact us </Link>
        </div>
    );
  };
  
  export default Navbar;
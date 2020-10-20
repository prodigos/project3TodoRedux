import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

const navStyle = {
    color: 'white'
}


const Nav = (props) => {
  return (
   <nav>
   <h3>Logo</h3>
   <ul className="nav-links">
   <Link style={navStyle} to="/todo">
       <li>To Do</li>

   </Link>
       <Link to="/contacts">
       <li>Contacts</li>

       </Link>
   </ul>
       
   </nav>
  );
};

export default Nav;

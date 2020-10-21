import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.css";

const Nav = () => {
  return (
    <nav>
      <h3>To Do List</h3>
      <ul className="nav-links">

        <Link to="./">
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

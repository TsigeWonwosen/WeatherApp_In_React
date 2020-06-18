import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
function Header() {
  return (
    <header className='navBar-container'>
      <div className='logo f1 tc i-m'>
        <Link to='/'>
          <span>Weather App</span>
        </Link>
      </div>

      <ul className='navBar'>
        <li>
          <Link to='/'>
            {" "}
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to='/title'>
            <span>Title</span>
          </Link>
        </li>
        <li>
          <Link to='/weather'>
            {" "}
            <span>Weather</span>
          </Link>
        </li>
        <li>
          <Link to='#'>
            {" "}
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;

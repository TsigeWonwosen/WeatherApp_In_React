import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
function Header() {
  return (
    <header style={headerStyle}>
      <div className=' logo f1 tc i-m'>
        <Link to='/'>
          <span>Weather App</span>
        </Link>
      </div>
      <div style={{ width: "50%" }}>
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
      </div>
    </header>
  );
}
export default Header;

const headerStyle = {
  height: "35px",
  background: "linear-gradient(to right, #e67e22, #e74c3c)",
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  color: "#4f4f4",
  border: "none",
  padding: " 1% 10% 3%",
  borderBottom: "1px solid rgb(250, 142, 142)",
};

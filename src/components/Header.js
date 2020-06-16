import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <div
        className=' f1 tc i-m'
        style={{ color: "white", textAlign: "center", fontSize: "1.2rem" }}
      >
        Weather App
      </div>
      <div
        style={{
          margin: "3px",
          padding: "5px",
          textAlign: "center",
          color: "#444",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          width: "30%",
        }}
      >
        <Link to='/'> Home </Link> |<Link to='/title'> Titles </Link> |
        <Link to='/weather'> Weather </Link> |<Link to='#'> Contact </Link>
      </div>
    </header>
  );
}
export default Header;

const headerStyle = {
  height: "35px",
  backgroundColor: "linear-gradient(to right, #e67e22, #e74c3c)",
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  color: "#444",
  border: "none",
  padding: "5px 9px",
};

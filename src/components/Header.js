import React from "react";
import { Link } from "react-router-dom";
import HeaderBackground from "../img/beach_header.png";

function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <h1
          className=' f1 tc i-m'
          style={{ color: "white", textAlign: "center" }}
        >
          Weather App
        </h1>
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
  height: "20%",
  backgroundImage: `url(${HeaderBackground})`,
  display: "flex",
  justifyContent: "space-between",
  color: "#444",
  border: "none",
  padding: "5px 9px",
};

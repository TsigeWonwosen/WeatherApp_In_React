import React from "react";
import { Link } from "react-router-dom";
import HeaderBackground from "../img/beach_header.png";

function Header() {
  return (
    <header style={headerStyle}>
      <h1
        className=" f1 tc i-m"
        style={{ color: "white", textAlign: "center" }}
      >
        {" "}
        React Project{" "}
      </h1>

      <h4
        style={{
          margin: "3px",
          padding: "5px",
          textAlign: "center",
          color: "#444",
          cursor: "pointer"
        }}
      >
        <Link to="/"> Home </Link> |<Link to="/title"> Titles </Link> |
        <Link to="/weather"> Weather </Link> |<Link to="#"> Contact </Link>
      </h4>
    </header>
  );
}
export default Header;

const headerStyle = {
  height: "20%",
  backgroundImage: `url(${HeaderBackground})`,
  color: "#444",
  border: "nono",
  padding: "5px 9px",
  borderRadius: "2%",
  float: "center"
};

import React from "react";

function Footer() {
  return (
    <footer style={headerStyle}>
      <br />
      <hr style={{ display: "flex", width: "70%", marginLeft: "15%" }} />
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "1",
            margin: "10px",
            padding: "15px",
            textAlign: "center"
          }}
        >
          <h5>
            <p> &copy; wondeshi.com </p>{" "}
            <b>
              {" "}
              <b />{" "}
            </b>
            <p> Wonde Shi 2019 </p>
          </h5>
        </div>
        <div style={{ flex: "1" }}>
          <h5 style={{ margin: "8px", padding: "10px", textAlign: "center" }}>
            {" "}
            <b /> <b /> <b />
            <p>Mail | s192514@polito.it</p>
            <p>Adress | Torino (Italy)</p>
            <p>City | Torino</p>
          </h5>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

const headerStyle = {
  fontFamily: "Playfair Display SC, serif",
  backgroundColor: "transparent",
  color: "#222",
  border: "nono",
  padding: "5px 9px",
  borderRadius: "2%",
  float: "center"
};

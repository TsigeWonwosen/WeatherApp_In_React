import React from "react";

function Footer() {
  return (
    <footer style={headerStyle}>
      <h5>Address </h5>
      <hr
        style={{
          display: "flex",
          width: "65%",
          marginLeft: "1rem auto",
          height: "1px",
          background: "#e67e22",
        }}
      />
      <div style={{ display: "flex" }}>
        <div
          style={{
            flex: "2",
            margin: "10px",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <h6>
            <p> Copy right &copy; wondeshi.com | {new Date().getFullYear()}</p>
          </h6>
        </div>
        <div style={{ flex: "2" }}>
          <h6 style={{ margin: "8px", padding: "10px", textAlign: "center" }}>
            {" "}
            <p>Mail | s192514@polito.it</p>
            <p>Adress | Torino (Italy)</p>
            <p>City | Torino</p>
          </h6>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

const headerStyle = {
  fontFamily: "Playfair Display SC, serif",
  backgroundColor: "rgba(42,46,100,0.7)",
  color: "#F4F4F4",
  padding: "0.5rem",
  float: "center",
  textAlign: "center",
};

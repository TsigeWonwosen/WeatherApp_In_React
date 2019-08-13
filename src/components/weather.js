import React from "react";
import "../App.css";

function Weather(props) {
  return (
    <div className="App">
      {
        // <p>Country: {props.country}</p>
        // <p>City: {props.city}</p>
        // <p>Tempraure:{props.temprature}</p>
        // <p>Humidity: {props.humidity}</p>
      }
      <div>
        <table className="table table-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Country</th>
              <th scope="col">City</th>
              <th scope="col">Tempraure</th>
              <th scope="col">Humidity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.country}</td>
              <td>{props.city}</td>
              <td>{props.temprature}</td>
              <td>{props.humidity}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Icon :{"   "}
        <i className="fas fa-cloud-meatball" style={{ fontSize: "24px" }}>
          {props.icon}
        </i>
      </p>
    </div>
  );
}

export default Weather;

import React from "react";
import "../App.css";

function Form({ getWeather }) {
  return (
    <div>
      <form onSubmit={getWeather}>
        <div className="row" style={texColor}>
          <div className="col">
            <input type="text" name="city" placeholder="Enter City" />
          </div>
          <div className="col">
            <input type="text" name="country" placeholder="Enter Country" />
          </div>
          <div className="col">
            <button className="btn btn-primary" type="submit">
              Get Weather
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
const texColor = {
  color: "#fff"
};
export default Form;

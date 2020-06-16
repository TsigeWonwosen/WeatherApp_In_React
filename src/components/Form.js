import React, { useState } from "react";
import "../App.css";

function Form({ getWeather }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const getWeatherCityCountry = (e) => {
    e.preventDefault();
    getWeather(city, country);
  };
  return (
    <div>
      <form onSubmit={getWeatherCityCountry}>
        <div className='row' style={texColor}>
          <div className='col'>
            <select
              name='city'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value=''>Select City</option>
              <option value='turin'>Torino</option>
              <option value='London'>London</option>
              <option value='Addis Abeba'>Addis Abeba</option>
              <option value='Rome'>Rome</option>
              <option value='Paris'>Paris</option>
            </select>
          </div>
          <div className='col'>
            <select
              name='contry'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value=''>Select Country</option>
              <option value='it'>Italy</option>
              <option value='eth'>Ethiopia</option>
              <option value='usa'>USA</option>
              <option value='fr'>France</option>
              <option value='uk'>UK</option>
            </select>
          </div>
          <div className='col'>
            <button className='btn btn-primary' type='submit'>
              Get Weather
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
const texColor = {
  color: "#fff",
};
export default Form;

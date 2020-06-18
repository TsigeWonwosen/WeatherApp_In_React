import React, { useState } from "react";
import "../App.css";

function Form({ getWeather }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const getWeatherCityCountry = (e) => {
    e.preventDefault();
    getWeather(city, country);
    setCity("");
    setCountry("");
  };
  return (
    <form onSubmit={getWeatherCityCountry} className='weather-form'>
      <div className='row' style={texColor}>
        <div className='col col-xs-6 col-sm-6 col-md-6 col-lg-4'>
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
        <div className='col col-xs-6 col-sm-6 col-md-6 col-lg-4'>
          <select
            name='country'
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
        <div className='col col-xs-12 col-sm-12 col-md-12 col-lg-4'>
          <button className='btn-submit' type='submit'>
            Get Weather
          </button>
        </div>
      </div>
    </form>
  );
}
const texColor = {
  color: "#FFF",
};
export default Form;

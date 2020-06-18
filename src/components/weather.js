import React from "react";
import "../App.css";

function Weather({ country, city, temperature, humidity, icon, description }) {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <>
      {description ? (
        <div className='table-wrapper'>
          <div className='location-box'>
            <div className='location'>
              {city}, {country}
            </div>
            <div className='date'>{dateBuilder(new Date())}</div>
          </div>

          <div className='weather-box'>
            <div className='temp'>{Math.round(temperature)}°c</div>
            <div className='weather'>
              {description}
              <div className='date'> Humidity:{humidity}%</div>
            </div>
          </div>
        </div>
      ) : (
        <div className='weather-hide'>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
      )}
    </>
  );
}

export default Weather;

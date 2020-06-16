import React from "react";
import "../App.css";

function Titles() {
  return (
    <div className='title-'>
      <h2 className='title-container__title'> Weather App.</h2>
      <div className='title-container__subtitle'>
        <p> Call current weather data for one location</p>
        <p>
          You can call by city name or country code. API responds with a list of
          results that match a searching word. There is a possibility to receive
          a central district of the city/town with its own parameters
          (geographic coordinates/id/name) in API response.
        </p>
      </div>
    </div>
  );
}

export default Titles;

import React from "react";
import Form from "./Form";
import Titles from "./Titles";
import Weather from "./weather";
import "../App.css";

const API_KEY = "20572be333bd976b400c876f1946359e";

class Home extends React.Component {
  state = {
    city: "",
    country: "",
    temprature: "",
    humidity: "",
    icon: "",
  };
  getWeather = async (city, country) => {
    // const city = e.target.elements.city.value;

    // const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temprature: data.main.temp,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
      });
    }
  };

  render() {
    const { city, country, temprature, humidity, icon } = this.state;
    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='title-container'>
            <Titles />
          </div>

          <div className='form-container'>
            <Form getWeather={this.getWeather} />
            <Weather
              city={city}
              country={country}
              temprature={temprature}
              humidity={humidity}
              icon={icon}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

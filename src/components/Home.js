import React from "react";
import Form from "./Form";
import Titles from "./Titles";
import Weather from "./weather";
import "../App.css";

const API_KEY = "20572be333bd976b400c876f1946359e";

class Home extends React.Component {
  state = {
    city: "turin",
    country: "it",
    temperature: "",
    humidity: "",
    icon: "",
    description: "",
  };
  getWeather = async (city, country) => {
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
      });
    }
  };

  render() {
    const {
      city,
      country,
      temperature,
      humidity,
      icon,
      description,
    } = this.state;
    return (
      <div className='wrapper'>
        <div className='main'>
          <div className='title-container'>
            <Titles />
          </div>

          <div
            className={humidity > 60 ? "form-container" : "form-container cold"}
          >
            <Form getWeather={this.getWeather} />
            <Weather
              city={city}
              country={country}
              temperature={temperature}
              humidity={humidity}
              icon={icon}
              description={description}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

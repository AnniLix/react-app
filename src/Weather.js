import React, { useState } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherForecast from './WeatherForecast';
import axios from 'axios';
import './Weather.css';

export default function Weather(props) {
  const [ready, Setready] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
    Setready(true);
  }

  function search() {
    const apiKey = 'c0578053464993e45f5ff6d67e9b2dbc';
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleSityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weatherApp">
            <form onSubmit={handleSubmit} id="cityForm">
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    id="cityInfo"
                    className="form-control shadow border-0"
                    placeholder="Enter a city"
                    onChange={handleSityChange}
                  ></input>
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    id="button"
                    className="form-control btn btn-primary shadow w-100"
                    value="Search"
                  ></input>
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    id="current-button"
                    className="form-control btn btn-success shadow w-100"
                    value="Current"
                  ></input>
                </div>
              </div>
            </form>
            <WeatherSearch data={weatherData} />
            <WeatherForecast coordinates={weatherData.coordinates} />
            <br />
            <footer>Coded by Anni Lix</footer>
          </div>
          <small className="small">
            <a
              href="https://github.com/AnniLix/react-app"
              target="_blank"
              rel="noopener noreferrer"
              className="source"
            >
              Open-source code
            </a>
            , coded by Anni Lix and{' '}
            <a
              href="https://symphonious-taiyaki-117614.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="source"
            >
              hosted on Netlify
            </a>
          </small>
        </div>
      </div>
    );
  } else {
    search();
    return '...';
  }
}

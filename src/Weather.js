import React, { useState } from 'react';
import FormattedDate from './FormattedDate';
import axios from 'axios';
import './Weather.css';

export default function Weather() {
  const [ready, Setready] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
     temperature: response.data.main.temp,
    humidity: response.data.main.temp,
    date: new Date(response.data.dt * 1000),
    wind: response.data.wind.speed,
    city: response.data.name,
    description: response.data.weather[0].description
    });
    Setready(true);
  }
  let Data = {
    //city: 'Paris',
    //date: 'Thursday 15:05',
    //description: 'Sunny',
    img: 'https://www.picng.com/upload/sun/png_sun_7638.png',
    //humidity: 50,
    //wind: 6,
  };

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="weatherApp">
            <form id="cityForm">
              <div className="row">
                <div className="col-8">
                  <input
                    type="text"
                    id="cityInfo"
                    className="form-control shadow border-0"
                    placeholder="Enter a city"
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
            <div className="row">
              <div className="col-6">
                <h1 className="region">{weatherData.city}</h1>
                <ul id="date">
                  <li></li>
                  <li>
                    <FormattedDate date={weatherData.date} />
                    </li>
                </ul>
              </div>
              <div className="col-6">
                <div className="d-flex">
                  <img
                    src={Data.img}
                    alt="sun"
                    className="weather-icon float-left"
                    id="icon"
                    width="40"
                    height="40"
                  />
                  <div className="col2">
                    <span className="mainTemp" id="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="descriptions">
                      <span className="units">
                        <a href="/" id="celsius" className="active">
                          °C{' '}
                        </a>
                        |{' '}
                        <a href="/" id="fahrenheit">
                          °F
                        </a>
                      </span>
                      <div className="sky" id="description">
                        {weatherData.description}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-3">
                Wind
                <br />
                <span id="wind">{Math.round(weatherData.wind)}</span> km/h
              </div>
              <div className="col-3">
                Humidity
                <br />
                <span id="humidity">{Math.round(weatherData.humidity)}</span>%
              </div>
            </div>
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
            , by Anni Lix
          </small>
        </div>
      </div>
    );
  } else {
    const apiKey = 'c0578053464993e45f5ff6d67e9b2dbc';
    let city = "Paris"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return '...';
}

import React from 'react';
import './Weather.css';

export default function Weather() {
  let Data = {
    city: 'Paris',
    temperature: 25,
    date: 'Thursday 15:05',
    description: 'Sunny',
    img: 'https://www.picng.com/upload/sun/png_sun_7638.png',
    humidity: 50,
    wind: 6,
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="weatherApp">
          <form id="cityForm">
            <div className="row">
              <div className="col-7">
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
                  className="form-control btn btn-primary shadow"
                  value="Search"
                ></input>
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  id="current-button"
                  className="form-control btn btn-success shadow"
                  value="Current"
                ></input>
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6">
              <h1 className="region">{Data.city}</h1>
              <ul id="date">
                <li></li>
                <li>{Data.date}</li>
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
                    {Data.temperature}
                  </span>
                  <span className="units">
                    <a href="/" id="celsius" className="active">
                      °C
                    </a>
                    |
                    <a href="/" id="fahrenheit">
                      °F
                    </a>
                    <div className="sky" id="description">
                      {Data.description}
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-3">
              Wind
              <br />
              <span id="wind">{Data.wind}</span> km/h
            </div>
            <div className="col-3">
              Humidity
              <br />
              <span id="humidity">{Data.humidity}</span>%
            </div>
          </div>
          <br />
          <footer>Coded by Anni Lix</footer>
        </div>
        <small className="small">
          <a
            href="https://github.com/AnniLix/weather-react-app"
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
}

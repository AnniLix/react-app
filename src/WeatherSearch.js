import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from './WeatherIcon';

export default function WeatherSearch(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1 className="region">{props.data.city}</h1>
        <ul id="date">
          <li></li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="col-6">
        <div className="d-flex">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="col2">
            <span className="mainTemp" id="temperature">
              {Math.round(props.data.temperature)}
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
                {props.data.description}
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="col-3">
        Wind
        <br />
        <span id="wind">{Math.round(props.data.wind)}</span> km/h
      </div>
      <div className="col-3">
        Humidity
        <br />
        <span id="humidity">{Math.round(props.data.humidity)}</span>%
      </div>
    </div>
  );
}

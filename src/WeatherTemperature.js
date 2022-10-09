import React, { useState } from 'react';

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius")
  }

  if (unit === 'celsius') {
  return (
    <div>
      <span className="mainTemp" id="temperature">
        {Math.round(props.celsius)}
      </span>
      <span className="descriptions">
        <span className="units">
          <a href="/" id="celsius" className="active">
            °C{' '}
          </a>
          |{' '}
          <a
            href="/"
            onClick={convertToFahrenheit}
            id="fahrenheit"
          >
            °F
          </a>
        </span>
      </span>
    </div>
  );
  } else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
      <div>
        <span className="mainTemp" id="temperature">
          {Math.round(fahrenheit)}
        </span>
        <span className="descriptions">
          <span className="units">
            <a href="/" id="celsius" onClick={showCelsius}>
              °C{' '}
            </a>
            |{' '}
            <a href="/" id="fahrenheit" className="active">
              °F
            </a>
          </span>
        </span>
      </div>
    );
  }
}

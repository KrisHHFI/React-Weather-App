import React, { useState } from 'react';
import './App.css';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import LocationInput from './Components/LocationInput';
import clouds from './Images/Clouds.png';
import snow from './Images/Snow.png';

function App() {
  const [weatherData, setWeatherData] = useState("null"); // State to hold today's weather data
  const [forecastedWeatherData, setForecastedWeatherData] = useState("null"); // State to hold forecasted weather data

  const handleWeatherData = (todayData: any) => {
    setWeatherData(todayData);
  };

  const handleForecastedWeatherData = (forecastData: any) => {
    setForecastedWeatherData(forecastData);
  };

  return (
    <div>
      <div className="BackgroundPhotoContainer">
        <img src={snow} className="BackgroundPhoto" />
      </div>
      <div className="App">
        <WeatherToday weatherData={weatherData} /> {/* Pass weather data */}
        <WeatherForecast forecastedWeatherData={forecastedWeatherData} /> {/* Pass weather data */}
        <LocationInput
          todaysWeatherData={handleWeatherData}
          forecastedWeatherData={handleForecastedWeatherData}
        />
      </div>
    </div>
  );
}

export default App;

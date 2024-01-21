import React, { useState } from 'react';
import './App.css';
import LocationInput from './Components/LocationInput';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import Background from './Components/Background';

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
    <div className="BackgroundPhotoContainer">
      <Background weatherData={weatherData} />
      <div className="App">
        <div className="ContentContainer">
          <WeatherToday weatherData={weatherData} />
          <WeatherForecast forecastedWeatherData={forecastedWeatherData} />
          <LocationInput
            todaysWeatherData={handleWeatherData}
            forecastedWeatherData={handleForecastedWeatherData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
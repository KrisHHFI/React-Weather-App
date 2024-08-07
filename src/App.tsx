import React, { useState } from 'react';
import './App.css';
import LocationInput from './Components/LocationInput';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import AppContainer from './Components/AppContainer';

function App() {
  const [weatherData, setWeatherData] = useState("null"); // State to hold today's weather data
  const [forecastedWeatherData, setForecastedWeatherData] = useState("null"); // State to hold forecasted weather data
  // Todays weather data, from the LocationInput
  const handleWeatherData = (todayData: any) => {
    setWeatherData(todayData);
  };
  // Forecasted weather data, from the LocationInput
  const handleForecastedWeatherData = (forecastData: any) => {
    setForecastedWeatherData(forecastData);
  };

  return (
    <AppContainer weatherData={weatherData}>
      <WeatherToday weatherData={weatherData} />
      <WeatherForecast forecastedWeatherData={forecastedWeatherData} />
      <LocationInput
        todaysWeatherData={handleWeatherData}
        forecastedWeatherData={handleForecastedWeatherData}
      />
    </AppContainer>
  );
}

export default App;
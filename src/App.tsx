import React, { useState } from 'react';
import './App.css';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import LocationInput from './Components/LocationInput';

function App() {
  const [weatherData, setWeatherData] = useState("null"); // State to hold weather data

  const handleWeatherData = (data: any) => { // Specify the type as any for data
    setWeatherData(data);
  };

  return (
    <div className="App">
      <WeatherToday weatherData={weatherData} /> {/* Pass weather data */}
      <WeatherForecast weatherData={weatherData} /> {/* Pass weather data */}
      <LocationInput onWeatherData={handleWeatherData} />
    </div>
  );
}

export default App;

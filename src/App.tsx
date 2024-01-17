import React, { useState } from 'react';
import './App.css';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import LocationInput from './Components/LocationInput';

function App() {
  const [location, setLocation] = useState("Helsinki");
  const [weatherData, setWeatherData] = useState(null); // State to hold weather data

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation);
  };

  const handleWeatherData = (data: any) => { // Specify the type as any for data
    setWeatherData(data);
    console.log('Weather Data:', data);
  };

  return (
    <div className="App">
      <WeatherToday location={location} weatherData={weatherData} /> {/* Pass weather data */}
      <WeatherForecast location={location} weatherData={weatherData} /> {/* Pass weather data */}
      <LocationInput onLocationChange={handleLocationChange} onWeatherData={handleWeatherData} />
    </div>
  );
}

export default App;

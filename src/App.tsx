import React from 'react';
import './App.css';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import LocationInput from './Components/LocationInput';

function App() {
  const handleLocationChange = (location: string) => {
    console.log(`User Input: "${location}"`); // Print the location to the console
  };

  return (
    <div className="App">
      <WeatherToday />
      <WeatherForecast />
      <LocationInput onLocationChange={handleLocationChange} />
    </div>
  );
}

export default App;

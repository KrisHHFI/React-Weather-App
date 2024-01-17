import React, { useState } from 'react';
import './App.css';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import LocationInput from './Components/LocationInput';

function App() {
  //const [location, setLocation] = useState(""); // State to hold the location
  const [location, setLocation] = useState("Helsinki"); // Default location set to Helsinki

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation); // Update the location state
    console.log(`New location: "${newLocation}"`);
  };

  return (
    <div className="App">
      <WeatherToday location={location} />
      <WeatherForecast location={location}/>
      <LocationInput onLocationChange={handleLocationChange} />
    </div>
  );
}

export default App;

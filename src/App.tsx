import React from 'react';
import './App.css';
import WeatherToday from './Components/WeatherToday';
import WeatherForecast from './Components/WeatherForecast';
import LocationInput from './Components/LocationInput';

function App() {
  return (
    <div className="App">
      <WeatherToday/>
      <WeatherForecast/>
      <LocationInput/>
    </div>
  );
}

export default App;

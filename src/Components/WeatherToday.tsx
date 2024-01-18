import React from 'react';

interface WeatherTodayProps {
    weatherData: any; // Weather data prop
}

export default function WeatherToday({ weatherData }: WeatherTodayProps) {
    const locationName = weatherData?.name || "Location not available";
    const weatherIcon = weatherData?.weather?.[0]?.icon;
    const weatherIconUrl = weatherIcon ? `https://openweathermap.org/img/w/${weatherIcon}.png` : null;
    const weatherDescription = weatherData?.weather?.[0]?.main || "Weather not available";
    let temperature = weatherData?.main?.temp || "Temperature not available";
    temperature = (temperature - 273.15).toFixed(0);
    const wind = weatherData?.wind?.speed.toFixed(0);

    return (
        <div>
            <div>
                {locationName}
            </div>
            <div>
                {weatherIconUrl ? <img src={weatherIconUrl} alt="Weather icon" /> : "No icon available"}
            </div>
            <div>
                {weatherDescription}
            </div>
            <div>
                {temperature}°
            </div>
            <div>
                {wind} m/s
            </div>
        </div>
    );
}

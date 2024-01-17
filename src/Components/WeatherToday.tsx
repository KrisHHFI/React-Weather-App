import React from 'react';

interface WeatherTodayProps {
    weatherData: any; // Weather data prop
}

export default function WeatherToday({ weatherData }: WeatherTodayProps) {
    const locationName = weatherData?.name || "Location not available";
    const weatherIcon = weatherData?.weather?.[0]?.icon;
    const weatherIconUrl = weatherIcon ? `https://openweathermap.org/img/w/${weatherIcon}.png` : null;
    const weatherDescription = weatherData?.weather?.[0]?.main || "Weather not available";
    const temperature = weatherData?.main?.temp || "Temperature not available";

    return (
        <div>
            <div>
                Location: {locationName}
            </div>
            <div>
                Weather icon: {weatherIconUrl ? <img src={weatherIconUrl} alt="Weather icon" /> : "No icon available"}
            </div>
            <div>
                Weather: {weatherDescription}
            </div>
            <div>
                Temperature: {temperature}
            </div>
        </div>
    );
}

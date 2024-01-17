import React from 'react';

interface WeatherTodayProps {
    weatherData: any; // Weather data prop
}

export default function WeatherToday({ weatherData }: WeatherTodayProps) {
    return (
        <div>
            <div>
                Location: {weatherData?.name}
            </div>
            <div>
                Weather icon: {weatherData?.weather?.[0]?.icon ? `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` : "No icon available"}
            </div>
            <div>
                Weather: {weatherData?.weather[0]?.main}
            </div>
            <div>
                Temperature: {weatherData?.main?.temp}
            </div>
        </div>
    );
}

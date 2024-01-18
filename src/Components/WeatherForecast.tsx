import React from 'react';

interface WeatherForecastProps {
    forecastedWeatherData: any; // Forecasted weather data prop
  }

export default function WeatherForecast({ forecastedWeatherData }: WeatherForecastProps) {

    return (
        <>
            <div>
                The next 7 days in {forecastedWeatherData?.city?.name}
            </div>
        </>
    );
}

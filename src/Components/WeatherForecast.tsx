import React from 'react';

interface WeatherForecastProps {
    weatherData: any; // Weather data prop
}

export default function WeatherForecast({ weatherData }: WeatherForecastProps) {

    return (
        <>
            <div>
                The next 7 days in {weatherData?.name}
            </div>
        </>
    );
}

import React from 'react';

interface WeatherForecastProps {
    location: string;
    weatherData: any; // Weather data prop
}

export default function WeatherForecast({ location, weatherData }: WeatherForecastProps) {

    return (
        <>
            <div>
                The next 7 days in {weatherData?.name}
            </div>
        </>
    );
}

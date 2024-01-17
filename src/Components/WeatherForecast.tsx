import React from 'react';

interface WeatherForecastProps {
    location: string;
}

export default function WeatherForecast({ location }: WeatherForecastProps) {

    return (
        <>
            <div>
                Next 7 days in  {location}
            </div>
        </>
    );
}

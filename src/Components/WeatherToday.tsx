import React from 'react';

interface WeatherTodayProps {
    location: string;
}

export default function WeatherToday({ location }: WeatherTodayProps) {

    return (
        <>
            <div>
                <div>
                    {location}
                </div>
                <div>
                    Weather icon
                </div>
                <div>
                    weather description
                </div>
                <div>
                    temperature
                </div>
            </div>
        </>
    );
}

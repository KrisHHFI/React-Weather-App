/* 
- with the second API call, each day has 8 timestamps (one every 3 hours
*/

import React, { useRef, useEffect } from 'react';

interface LocationInputProps {
    todaysWeatherData: (weatherData: boolean) => void; // Callback for passing todays weather data
    forecastedWeatherData: (weatherForecastData: boolean) => void; // Callback for passing todays weather data
}

export default function LocationInput({ todaysWeatherData, forecastedWeatherData }: LocationInputProps) {
    const locationInput = useRef<HTMLInputElement>(null);
    let hasDefaultWeather = false;

    const weatherTodayFetch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Prevents page refresh

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput.current!.value + '%20&APPID=d3b94e0efe686baf1916cbf041859138')
            .then(response => response.json())
            .then(responseData => {
                console.log(locationInput.current!.value + " weather today", responseData);
                if (responseData.cod == "404") {
                    return;
                }
                todaysWeatherData(responseData);
                const lat = responseData.coord.lat;
                const lon = responseData.coord.lon;
                weatherForecastFetch(lat, lon);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const weatherForecastFetch = (lat: number, lon: number) => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + 'd3b94e0efe686baf1916cbf041859138')
            .then(response => response.json())
            .then(responseData => {
                console.log(locationInput.current!.value + " weather forecast", responseData);
                forecastedWeatherData(responseData);
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect(() => {
        // Set the default value for the input field
        locationInput.current!.value = "Helsinki";

        if (hasDefaultWeather === false) {
            weatherTodayFetch(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }) as any);
            hasDefaultWeather = true;
        }
    }, []);

    return (
        <>
            <div>
                <form className="LocationInput">
                    <input
                        type="text"
                        placeholder="Location"
                        ref={locationInput} // Value sets the "locationInput" variable
                        className="InputBox"
                    />
                    <button className="Button" onClick={weatherTodayFetch}>
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

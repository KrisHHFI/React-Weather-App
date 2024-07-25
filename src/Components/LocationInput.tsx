import React, { useRef, useEffect } from 'react';

interface LocationInputProps {
    todaysWeatherData: (weatherData: boolean) => void; // Callback for passing todays weather data
    forecastedWeatherData: (weatherForecastData: boolean) => void; // Callback for passing the forecasted weather data
}

export default function LocationInput({ todaysWeatherData, forecastedWeatherData }: LocationInputProps) {
    let apiCode = "98e33414352d8e6755f5d3fff5ce0484"; 
    const locationInput = useRef<HTMLInputElement>(null);
    let hasDefaultWeather = false;

    const weatherTodayFetch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Prevents page refresh

        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput.current!.value + '%20&APPID=' + apiCode)
            .then(response => response.json())
            .then(responseData => {
                if (responseData.cod === "404") {
                    locationInput.current!.value = locationInput.current!.value + " not found.";
                }
                console.log(locationInput.current!.value + " weather today", responseData);
                todaysWeatherData(responseData);
                const lat = responseData?.coord?.lat;
                const lon = responseData?.coord?.lon;
                weatherForecastFetch(lat, lon);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    const weatherForecastFetch = (lat: number, lon: number) => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiCode)
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
        locationInput.current!.value = "Helsinki"; // The default value for the input field

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

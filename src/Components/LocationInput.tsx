import React, { useRef, useEffect } from 'react';

interface LocationInputProps {
    onWeatherData: (weatherData: any) => void; // Callback for passing weather data
}

export default function LocationInput({ onWeatherData }: LocationInputProps) {
    const locationInput = useRef<HTMLInputElement>(null);

    // Passes the current value of locationInput to onLocationChange when the button is pressed
    const searchWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Prevents page refresh

        // Fetches JSON from the given URL
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationInput.current!.value + '%20&APPID=d3b94e0efe686baf1916cbf041859138')
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                if (responseData.cod == "404") {
                    return;
                }
                onWeatherData(responseData);
            })
            .catch(err => {// Something went wrong
                console.log(err);
            });
    };

    useEffect(() => {
        // Set the default value for the input field
        locationInput.current!.value = "Helsinki";
        
        // Manually trigger the search when the component mounts
        searchWeather(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }) as any);
    }, []);
    

    return (
        <>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Location"
                        ref={locationInput} // Value sets the "locationInput" variable
                    />
                    <button onClick={searchWeather}>
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

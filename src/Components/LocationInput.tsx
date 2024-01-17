import React, { useRef } from 'react';

export default function LocationInput({ onLocationChange }: { onLocationChange: (location: string) => void }) {
    const locationInput = useRef<HTMLInputElement>(null); // Hook introduced with a null value

    // Passes the current value of locationInput to onLocationChange, when the button is pressed
    const searchWeather = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault(); // Prevents page refresh
        onLocationChange(locationInput.current!.value);
    };

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

import snow from '../Images/Icons/SnowIcon.png';
import clear from '../Images/Icons/ClearIcon.png';
import cloud from '../Images/Icons/CloudIcon.png';
import rain from '../Images/Icons/RainIcon.png';
import drizzle from '../Images/Icons/DrizzleIcon.png';
import mist from '../Images/Icons/MistIcon.png';

interface WeatherTodayProps {
    weatherData: any; // Weather data prop
}

export default function WeatherToday({ weatherData }: WeatherTodayProps) {
    const locationName = weatherData?.name || "Location not available";
    const weatherDescription = weatherData?.weather?.[0]?.description || "Weather not available";
    const weather = weatherData?.weather?.[0]?.main || "Weather not available";
    let temperature = weatherData?.main?.temp || "Temperature not available";
    temperature = (temperature - 273.15).toFixed(0);
    const wind = weatherData?.wind?.speed.toFixed(0);

    let weatherIcon = "";
    
    if (weather === "Clouds") {
        weatherIcon = cloud;
    } else if (weather === "Snow") {
        weatherIcon = snow;
    }  else if (weather === "Clear") {
        weatherIcon = clear;
    } else if (weather === "Rain") {
        weatherIcon = rain;
    } else if (weather === "Drizzle") {
        weatherIcon = drizzle;
    } else if (weather === "Mist") {
        weatherIcon = mist;
    }

    return (
        <div>
            <div className="LocationTitle">
                {locationName}
            </div>
            <div>
                <img className="largeWeatherIcon" src={weatherIcon} alt="Weather icon" />
                { /*{weatherIconUrl ? <img className="largeWeatherIcon" src={weatherIconUrl} alt="Weather icon" /> : "No icon available"} */}
            </div>
            <div>
                {weatherDescription}
            </div>
            <div>
                {temperature}°
            </div>
            <div>
                {wind} m/s
            </div>
        </div>
    );
}

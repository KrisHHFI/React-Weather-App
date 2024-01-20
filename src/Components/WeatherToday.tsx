import snowIcon from '../Images/Icons/SnowIcon.png';
import clearIcon from '../Images/Icons/ClearIcon.png';
import cloudIcon from '../Images/Icons/CloudIcon.png';
import rainIcon from '../Images/Icons/RainIcon.png';
import drizzleIcon from '../Images/Icons/DrizzleIcon.png';
import mistIcon from '../Images/Icons/MistIcon.png';

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
        weatherIcon = cloudIcon;
    } else if (weather === "Snow") {
        weatherIcon = snowIcon;
    } else if (weather === "Clear") {
        weatherIcon = clearIcon;
    } else if (weather === "Rain") {
        weatherIcon = rainIcon;
    } else if (weather === "Drizzle") {
        weatherIcon = drizzleIcon;
    } else if (weather === "Mist" || weather === "Fog") {
        weatherIcon = mistIcon;
    } 

    return (
        <div className="TodaysWeatherContainer">
            <div className="LocationTitle">
                {locationName}
            </div>
            <div>
                <img className="largeWeatherIcon" src={weatherIcon} alt="Weather icon" />
            </div>
            <div className="TodaysWeatherData">
                <div>
                    {temperature}°
                </div>
                <div>
                    {weatherDescription}
                </div>
                <div>
                    {wind} m/s
                </div>
            </div>
        </div>
    );
}

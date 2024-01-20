import { getWeatherIcon } from './WeatherIcons';

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
    const weatherIcon = getWeatherIcon(weather);

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

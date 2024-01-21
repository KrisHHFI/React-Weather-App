import { getWeatherIcon } from './WeatherIcons';

interface WeatherTodayProps {
    weatherData: any; // Weather data prop
}

export default function WeatherToday({ weatherData }: WeatherTodayProps) {
    const locationName = weatherData?.name || "Loading...";
    const weatherDescription = weatherData?.weather?.[0]?.description || "";
    const weather = weatherData?.weather?.[0]?.main;
    let temperature = weatherData?.main?.temp || "Temperature not available";
    temperature = (temperature - 273.15).toFixed(0);
    const wind = weatherData?.wind?.speed.toFixed(0) || "";
    const weatherIcon = getWeatherIcon(weather);

    return (
        <div className="TodaysWeatherContainer">
            <div className="LocationTitle">
                {locationName}
            </div>
            <div>
                <img className="largeWeatherIcon" src={weatherIcon}/>
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

import { getWeatherIcon } from './WeatherIcons';
import { WeatherTodayProps } from '../Constants/Interfaces';

export default function WeatherToday({ weatherData }: WeatherTodayProps) {
    const locationName = weatherData?.name || "Loading...";
    const weatherDescription = weatherData?.weather?.[0]?.description || "";
    const weather = weatherData?.weather?.[0]?.main;
    let temperature = weatherData?.main?.temp;
    temperature = temperature !== undefined ? (temperature - 273.15).toFixed(0) + "°" : "";
    let wind = weatherData?.wind?.speed;
    wind = wind !== undefined ? wind.toFixed(0) + " m/s" : "";

    const weatherIcon = getWeatherIcon(weather);

    return (
        <div className="TodaysWeatherContainer">
            <div className="LocationTitle">
                {locationName}
            </div>
            <div>
                <img className="largeWeatherIcon" src={weatherIcon} />
            </div>
            <div className="TodaysWeatherData">
                <div>
                    {temperature}
                </div>
                <div>
                    {weatherDescription}
                </div>
                <div>
                    {wind}
                </div>
            </div>
        </div>
    );
}

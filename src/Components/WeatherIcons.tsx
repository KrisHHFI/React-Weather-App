import snowIcon from '../Images/Icons/SnowIcon.png';
import clearIcon from '../Images/Icons/ClearIcon.png';
import cloudIcon from '../Images/Icons/CloudIcon.png';
import rainIcon from '../Images/Icons/RainIcon.png';
import drizzleIcon from '../Images/Icons/DrizzleIcon.png';
import mistIcon from '../Images/Icons/MistIcon.png';

export function getWeatherIcon(weather: string): string {
    switch (weather) {
        case "Clouds":
            return cloudIcon;
        case "Snow":
            return snowIcon;
        case "Clear":
            return clearIcon;
        case "Rain":
            return rainIcon;
        case "Drizzle":
            return drizzleIcon;
        case "Mist":
        case "Fog":
        case "Haze":
        case "Smoke":
            return mistIcon;
        default:
            return "";
    }
}
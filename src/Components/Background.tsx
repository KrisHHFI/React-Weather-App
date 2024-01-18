import clouds from '../Images/Clouds.png';
import snow from '../Images/Snow.png';
import clear from '../Images/Clear.png';
import rain from '../Images/Rain.png';
import fog from '../Images/Fog.png';

interface WeatherTodayProps {
    weatherData: any; // Weather data prop
}

export default function Background({ weatherData }: WeatherTodayProps) {
    const weatherDescription = weatherData?.weather?.[0]?.main || "Weather not available";
    let BackgroundPhoto = "";

    if (weatherDescription === "Clouds") {
        BackgroundPhoto = clouds;
    } else if (weatherDescription === "Snow") {
        BackgroundPhoto = snow;
    } else if (weatherDescription === "Clear") {
        BackgroundPhoto = clear;
    } else if (weatherDescription === "Rain") {
        BackgroundPhoto = rain;
    } else if (weatherDescription === "Fog") {
        BackgroundPhoto = fog;
    }

    return (
        <div className="BackgroundPhotoContainer">
            <img src={BackgroundPhoto} className="BackgroundPhoto" alt="Background" />
        </div>
    );
}

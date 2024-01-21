import clouds from '../Images/Backgrounds/Clouds.png';
import snow from '../Images/Backgrounds/Snow.png';
import clear from '../Images/Backgrounds/Clear.png';
import rain from '../Images/Backgrounds/Rain.png';
import drizzle from '../Images/Backgrounds/Drizzle.png';
import mist from '../Images/Backgrounds/Mist.png';

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
    } else if (weatherDescription === "Drizzle") {
        BackgroundPhoto = drizzle;
    }else if (weatherDescription === "Mist" || weatherDescription === "Fog" || weatherDescription === "Haze") {
        BackgroundPhoto = mist;
    }

    return (
        <div className="BackgroundPhotoContainer">
            <img src={BackgroundPhoto} className="BackgroundPhoto" alt="Background" />
        </div>
    );
}

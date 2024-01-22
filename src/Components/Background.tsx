import clouds from '../Images/Backgrounds/Clouds.png';
import snow from '../Images/Backgrounds/Snow.png';
import clear from '../Images/Backgrounds/Clear.png';
import rain from '../Images/Backgrounds/Rain.png';
import drizzle from '../Images/Backgrounds/Drizzle.png';
import mist from '../Images/Backgrounds/Mist.png';

interface WeatherTodayProps {
  weatherData: any; // Weather data prop
}

export default function getBackground({ weatherData }: WeatherTodayProps) {
  const weatherDescription = weatherData?.weather?.[0]?.main || "Weather not available";
  let BackgroundPhoto = "";

  switch (weatherDescription) {
    case "Clouds":
      BackgroundPhoto = clouds;
      break;
    case "Snow":
      BackgroundPhoto = snow;
      break;
    case "Clear":
      BackgroundPhoto = clear;
      break;
    case "Rain":
      BackgroundPhoto = rain;
      break;
    case "Drizzle":
      BackgroundPhoto = drizzle;
      break;
    case "Mist":
    case "Fog":
    case "Haze":
      BackgroundPhoto = mist;
      break;
    default:
      BackgroundPhoto = "";
      break;
  }

  return (
    <img src={BackgroundPhoto} className="BackgroundPhoto"/>
  );
}

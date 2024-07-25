export interface BackgroundPhotoContainerProps {
    children: React.ReactNode;
    weatherData: any;
}

export interface LocationInputProps {
    todaysWeatherData: (weatherData: boolean) => void; // Callback for passing todays weather data
    forecastedWeatherData: (weatherForecastData: boolean) => void; // Callback for passing the forecasted weather data
}

export interface WeatherForecastProps {
    forecastedWeatherData: any; // Forecasted weather data prop
}

export interface WeatherTodayProps {
    weatherData: any;
}
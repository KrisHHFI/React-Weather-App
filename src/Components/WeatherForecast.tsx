import React from 'react';

interface WeatherForecastProps {
    forecastedWeatherData: any; // Forecasted weather data prop
}

export default function WeatherForecast({ forecastedWeatherData }: WeatherForecastProps) {
    const filteredData: { [key: string]: any } = {};
    const todaysDate = new Date(forecastedWeatherData?.list?.[0].dt_txt).getDate();

    forecastedWeatherData?.list?.forEach((item: any) => {
        const itemDate = new Date(item.dt_txt);
        const dateKey = itemDate.toDateString();

        if (!filteredData[dateKey]) {
            filteredData[dateKey] = item;
        }
    });

    const filteredItems = Object.values(filteredData).filter((item: any) => {
        const dayOfMonth = new Date(item.dt_txt).getDate();
        return dayOfMonth !== todaysDate && formatForecastData(item) !== null;
    });

    function formatForecastData(item: any) {
        const dayOfMonth = new Date(item.dt_txt).getDate();
        const wind = item.wind?.speed.toFixed(0);
        const description = item.weather[0].description;
        const temperature = (item.main.temp - 273.15).toFixed(0);

        // Don't return item if any the fields are empty or it's the current date
        if (dayOfMonth === todaysDate) {
            return null;
        }

        return `${dayOfMonth}th, ${description}, ${temperature}°, ${wind} m/s`;
    }

    return (
        <>
            <div>
                The next 5 days in {forecastedWeatherData?.city?.name}
            </div>
            <div>
                <ul>
                    {filteredItems.map((item: any) => (
                        <li key={item.dt}>{formatForecastData(item)}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

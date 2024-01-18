import React from 'react';

interface WeatherForecastProps {
    forecastedWeatherData: any; // Forecasted weather data prop
}

export default function WeatherForecast({ forecastedWeatherData }: WeatherForecastProps) {
    const filteredData: { [key: string]: any } = {};

    let todaysDate = forecastedWeatherData?.list?.[0].dt_txt;
    todaysDate = new Date(todaysDate);
    todaysDate = todaysDate.getDate();

    forecastedWeatherData?.list?.forEach((item: any) => {
        const itemDate = new Date(item.dt_txt);
        const dateKey = itemDate.toDateString();

        if (!filteredData[dateKey]) {
            filteredData[dateKey] = item;
        }
    });

    function formatForecastData(item: any) {
        const formattedDate = new Date(item.dt_txt);

        const dayOfMonth = formattedDate.getDate();
        const wind = item.wind?.speed.toFixed(0);

        if (dayOfMonth === todaysDate) {
            return null; // Return null for today's forecast
        }

        const description = item.weather[0].description;
        const temperature = (item.main.temp - 273.15).toFixed(0);

        // Check if any of the fields are empty
        if (!dayOfMonth || !description || !temperature) {
            return null;
        }

        return `${dayOfMonth}th, ${description}, ${temperature}°, ${wind} m/s`;
    }

    const uniqueData = Object.values(filteredData);

    return (
        <>
            <div>
                The next 5 days in {forecastedWeatherData?.city?.name}
            </div>
            <div>
                <ul>
                    {uniqueData?.map((item: any) => {
                        const formattedData = formatForecastData(item);
                        if (formattedData !== null) {
                            return <li key={item.dt}>{formattedData}</li>;
                        }
                        return null;
                    })}
                </ul>
            </div>
        </>
    );
}

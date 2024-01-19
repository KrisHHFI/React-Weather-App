interface WeatherForecastProps {
    forecastedWeatherData: any; // Forecasted weather data prop
}

export default function WeatherForecast({ forecastedWeatherData }: WeatherForecastProps) {
    const todaysDate = new Date(forecastedWeatherData?.list?.[0].dt_txt).getDate();

    function filterAndOrganizeData() {
        const filteredData: { [key: string]: any } = {};

        forecastedWeatherData?.list?.forEach((item: any) => {
            const dateKey = new Date(item.dt_txt).toDateString();
            const dayOfMonth = new Date(item.dt_txt).getDate();
            const formattedData = formatForecastData(item);

            if (!filteredData[dateKey] && dayOfMonth !== todaysDate && formattedData !== null) {
                filteredData[dateKey] = item;
            }
        });

        return Object.values(filteredData);
    }

    function formatForecastData(item: any) {
        const wind = item.wind?.speed.toFixed(0);
        const description = item.weather[0].description;
        const temperature = (item.main.temp - 273.15).toFixed(0);
        return `${new Date(item.dt_txt).getDate()}th,\n${description},\n${temperature}°,\n${wind} m/s`;
    }

    const filteredItems = filterAndOrganizeData();

    return (
        <>
            <div className="ForecastedWeatherContainer">
                <div>
                    The next 5 days in {forecastedWeatherData?.city?.name}
                </div>
                <div className="forecastedDays">
                    {filteredItems.map((item: any) => (
                        <div className="forecastedDay" key={item.dt}>
                            {formatForecastData(item)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export const fetchForecast = async (location: string) => {
    const url = `/api/forecast?location=${encodeURIComponent(location)}`;
    console.log('Fetching forecast with URL:', url);

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data from API', {
            cause: response.statusText,
        });
    }

    return await response.json();
};

export const fetchWeatherAlerts = async (location: string) => {
    const url = `/api/alerts?location=${encodeURIComponent(location)}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data from API', {
            cause: response.statusText,
        });
    }

    return await response.json();
};
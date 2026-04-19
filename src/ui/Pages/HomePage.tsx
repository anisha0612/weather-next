// import React from "react";
// import { useGeolocationWeather } from '
// import Forecast from "../layout/weather/Forecast";
// import ForecastCard from "../layout/weather/ForecastCard";
// import WeatherAlert from "../layout/weather/WeatherAlert";
// import Alert from "../shared/components/Alert";
// import Loader from "../shared/components/Loader";
// import Section from "../shared/components/Section";
// import Text from "../shared/components/Text";
// import WeatherIcon from "../shared/components/WeatherIcon";
// import Header from "../shared/Header/Header";
// import { currentWeatherStore, locationStore } from "../store/weather.store";
'use client';

import { useWeather } from "@hooks/useWeather";
import { useGeolocationWeather } from "@hooks/useGeolocationWeather";
import {  searchQueryStore } from "@store/weather.store";
import WeatherInfo from "./WeatherInfo";

function HomePage() {
    useGeolocationWeather();
    const query = searchQueryStore((state) => state.query);
    const { alert, error, forecastDays, loading } = useWeather({ query: query ?? "" });

    return (
        <div className="min-h-screen bg-[#0b0f17] text-white">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <WeatherInfo
                    alert={alert ? [alert] : []}
                    error={error}
                    forecastDays={forecastDays}
                    loading={loading}
                />
            </div>
        </div>
    );
}
export default HomePage;

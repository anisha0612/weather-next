'use client';

import Link from "next/link";
import { useWeather } from "@hooks/useWeather";
import { useGeolocationWeather } from "@hooks/useGeolocationWeather";
import { searchQueryStore } from "@store/weather.store";
import WeatherInfo from "./WeatherInfo";

function HomePage() {
    useGeolocationWeather();
    const query = searchQueryStore((state) => state.query);
    const { alert, error, forecastDays, loading } = useWeather({ query: query ?? "" });

    const alertArray = Array.isArray(alert) ? alert : alert ? [alert] : [];

    if (query === "") {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b0f17] text-white">
                <p className="mb-2 text-xl font-semibold">Location access was denied</p>
                <p className="mb-6 text-slate-400">We need your location to show weather data.</p>
                <Link
                    href="/search"
                    className="rounded-xl bg-slate-700 px-6 py-3 text-white transition-colors hover:bg-slate-600"
                >
                    Search for a location
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0b0f17] text-white">
            <div className="px-4 py-6 sm:px-6 lg:px-8">
                <WeatherInfo
                    alert={alertArray}
                    error={error}
                    forecastDays={forecastDays}
                    loading={loading}
                />
            </div>
        </div>
    );
}
export default HomePage;

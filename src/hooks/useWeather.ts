'use client';

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
	currentWeatherStore,
	forecastDayStore,
	locationStore,
} from "../store/weather.store";
import { fetchForecast, fetchWeatherAlerts } from "../utils/api/weatherApi";
import type { Alert, ForecastDay } from "../utils/models/weather";

interface Props {
	query: string;
}

export function useWeather({ query }: Props): { alert: Alert | null; error: string | null; forecastDays: ForecastDay[]; loading: boolean } {
	const setCurrent = currentWeatherStore((state) => state.setCurrent);
	const setLocation = locationStore((state) => state.setLocation);
	const setForecastDay = forecastDayStore((state) => state.setForecastDay);


	const forecastQuery = useQuery({
		enabled: !!query,
		queryFn: async () => await fetchForecast(query as string),
		queryKey: ["forecast", query],
	});

	const alertsQuery = useQuery({
		enabled: !!query,
		queryFn: async () => await fetchWeatherAlerts(query as string),
		queryKey: ["alerts", query],
	});

	useEffect(() => {
		console.log("Forecast query data:", forecastQuery.data);
		console.log("Alerts query data:", alertsQuery.data);
		if (forecastQuery.data) {
			setLocation(forecastQuery.data.location);
			setCurrent(forecastQuery.data.current);
			setForecastDay(forecastQuery.data.forecast.forecastday[0] ?? null);
		}
	}, [forecastQuery.data, alertsQuery.data, setCurrent, setForecastDay, setLocation]);

	const forecastDays = forecastQuery.data?.forecast?.forecastday ?? [];
	const alert = alertsQuery.data?.alert?.alert ?? null;
	const loading = !!query && forecastQuery.isLoading;
	const storeError =
		query && !forecastQuery.isLoading && !forecastQuery.data
			? "Unable to load weather data."
			: null;
	const error = forecastQuery.isError ? "Unable to load weather data." : storeError;

	return { alert, error, forecastDays, loading };
}

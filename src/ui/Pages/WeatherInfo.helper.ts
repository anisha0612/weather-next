import { useMemo } from "react";
import { iconDisplay, resolveWeatherIconSrc } from "../../utils/weatherIcons";
import type { Current } from "@utils/models/weather";

export function getCurrentBadge(currentWeather: Current | null) {
	return currentWeather?.condition.text?.toUpperCase() ?? "WEATHER";
}

export function getCurrentTemperature(currentWeather: Current | null) {
	return currentWeather?.temp_f?.toFixed(0) ?? "--";
}

export function getCurrentDescription(currentWeather: Current | null) {
	return currentWeather?.condition.text ?? "Loading conditions";
}

export function getCurrentIcon(currentWeather: Current | null) {
	return currentWeather
		? iconDisplay(currentWeather.condition.text.toLowerCase())
		: null;
}

export function forecastLabel(date: string, index: number) {
	if (index === 0) {
		return "TODAY";
	}

	if (index === 1) {
		return "TOMORROW";
	}

	return new Date(date)
		.toLocaleDateString("en-US", { weekday: "long" })
		.toUpperCase();
}

export function useWeatherLocation(
	location: { name: string; region: string; country: string } | null,
) {
	if (!location) {
		return "Current location";
	}

	return [location.name, location.region || location.country]
		.filter(Boolean)
		.join(", ");
}

export function getStats(currentWeather: Current | null) {
	return currentWeather
		? [
			{ icon: "💧", label: "HUMIDITY", value: `${currentWeather.humidity}%` },
			{
				detail:
					currentWeather.uv <= 2
						? "Low"
						: currentWeather.uv <= 5
							? "Moderate"
							: "High",
				icon: "☀",
				label: "UV INDEX",
				value: `${currentWeather.uv}`,
			},
			{
				icon: "🍃",
				label: "WIND SPEED",
				value: `${currentWeather.wind_mph} mph`,
			},
			{
				icon: "◌",
				label: "PRESSURE",
				value: `${currentWeather.pressure_mb} mb`,
			},
		]
		: [];
}

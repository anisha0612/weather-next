'use client';
import { useEffect } from "react";
import { searchQueryStore } from "../store/weather.store";

export function useGeolocationWeather() {
	const setQuery = searchQueryStore((state) => state.setQuery);

	useEffect(() => {
		if (!navigator.geolocation) {
			setQuery("");
			return;
		}

		navigator.geolocation.getCurrentPosition(
			(position) => {
				console.log("Geolocation obtained:");
				setQuery(`${position.coords.latitude},${position.coords.longitude}`);
			},
			() => {
				setQuery("");
			},
		);
	}, [setQuery]);
}

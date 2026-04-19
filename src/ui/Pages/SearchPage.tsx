"use client";

import { useEffect } from "react";
import { useWeather } from "@hooks/useWeather";
import SearchBox from "@shared/SearchBox";
import WeatherInfo from "./WeatherInfo";
import { searchQueryStore } from "@store/weather.store";

function SearchPage() {
	const query = searchQueryStore((state) => state.query);
	const setQuery = searchQueryStore((state) => state.setQuery);
	const { alert, error, forecastDays, loading } = useWeather({
		query: query ?? "",
	});

	useEffect(() => {
		setQuery("");
	}, [setQuery]);

	return (
		<>
			<SearchBox />
			<WeatherInfo
				alert={alert ? [alert] : []}
				error={error}
				forecastDays={forecastDays}
				loading={loading}
			/>
		</>
	);
}

export default SearchPage;

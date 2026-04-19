import { create } from "zustand";
import type { Current, ForecastDay, Location } from "../utils/models/weather";

interface WeatherStore {
	current: Current | null;
	setCurrent: (current: Current) => void;
}
interface LocationStore {
	location: Location | null;
	setLocation: (location: Location) => void;
}
interface ForecastDayStore {
	forecastDay: ForecastDay | null;
	setForecastDay: (forecastDay: ForecastDay) => void;
}
interface SearchQueryStore {
	query: string | null;
	setQuery: (query: string) => void;
}

export const currentWeatherStore = create<WeatherStore>((set) => ({
	current: null,
	setCurrent: (current: Current) => set({ current }),
}));

export const locationStore = create<LocationStore>((set) => ({
	location: null,
	setLocation: (location: Location) => set({ location }),
}));

export const forecastDayStore = create<ForecastDayStore>((set) => ({
	forecastDay: null,
	setForecastDay: (forecastDay: ForecastDay) => set({ forecastDay }),
}));

export const searchQueryStore = create<SearchQueryStore>((set) => ({
	query: null,
	setQuery: (query: string) => set({ query }),
}));

export const alertStore = create<{
	alert: string | null;
	setAlert: (alert: string) => void;
}>((set) => ({
	alert: null,
	setAlert: (alert: string) => set({ alert }),
}));
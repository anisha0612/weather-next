import { create } from "zustand";
import type { Alert, Current, ForecastDay, Location } from "../utils/models/weather";

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
interface AlertStore {
	alert: Alert[] | null;
	singleAlert: Alert | null;
	setAlert: (alert: Alert[]) => void;
	setSingleAlert: (alert: Alert) => void;
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

export const searchQueryStore = create<SearchQueryStore>((set: (arg0: { query: string; }) => any) => ({
	query: null,
	setQuery: (query: string) => set({ query }),
}));

export const alertStore = create<AlertStore>((set: (arg0: { alert?: Alert[] | null; singleAlert?: Alert | null }) => void) => ({
	alert: null,
	singleAlert: null,
	setAlert: (alert: Alert[]) => set({ alert }),
	setSingleAlert: (alert: Alert) => set({ singleAlert: alert }),
}));

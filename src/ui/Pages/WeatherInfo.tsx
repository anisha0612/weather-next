import Loader from "@shared/components/Loader";
import type { Alert, ForecastDay } from '@utils/models/weather';
import Text from "@shared/components/Text";
import WeatherAlert from "@ui/layout/weather/WeatherAlert";
import Section from "@shared/components/Section";
import WeatherIcon from "@shared/components/WeatherIcon";
import Forecast from "@ui/layout/weather/Forecast";
import { getCurrentBadge, getCurrentDescription, getCurrentIcon, getCurrentTemperature, useWeatherLocation } from "./WeatherInfo.helper";
import { currentWeatherStore, locationStore } from "@/src/store/weather.store";
import TodaysStats from "../layout/weather/TodaysStats";

interface Props {
	alert: Alert[];
	loading: boolean;
	error: string | null;
	forecastDays: ForecastDay[]; // Replace with actual type
}

function WeatherInfo({
	alert,
	loading,
	error,
	...props
}: Props) {
		const currentWeather = currentWeatherStore((state) => state.current);
		const location = locationStore((state) => state.location);
	const currentIcon = getCurrentIcon(currentWeather);
	const currentDescription = getCurrentDescription(currentWeather);
	const currentTemperature = getCurrentTemperature(currentWeather);
	const currentBadge = getCurrentBadge(currentWeather);
	const weatherLocation = useWeatherLocation(location);
	const feelsLike = currentWeather?.feelslike_f?.toFixed(0) ?? "--";

	return (
		<main className="mx-auto w-full max-w-6xl rounded-[32px] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(90,102,255,0.08),_transparent_35%),linear-gradient(180deg,_rgba(11,15,23,0.98),_rgba(9,12,18,0.98))] px-4 py-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-6 lg:px-8">
			<Loader isLoading={loading}>
				{!loading && error && (
					<Text as="div" size="lg" className="py-24 text-center text-white/70">
						{error}
					</Text>
				)}

				{!loading && !error && currentWeather && (
					<div className="space-y-8">
						<WeatherAlert alert={alert} />

						<Section className="text-center">
							<Text
								size="xs"
								className="font-semibold uppercase tracking-[0.35em] text-sky-300/70"
							>
								LIVE NOW
							</Text>
							<Text
								as="h1"
								size="3xl"
								className="mt-3 font-semibold tracking-tight text-white sm:text-4xl"
							>
								{weatherLocation}
							</Text>

							<div className="mt-8 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
								<div className="flex flex-col items-center gap-3">
									<Text
										as="span"
										size="xs"
										className="rounded-full bg-[#f4d86b] px-4 py-1 font-semibold uppercase tracking-[0.2em] text-[#332b0d] shadow-[0_10px_30px_rgba(244,216,107,0.15)]"
									>
										{currentBadge}
									</Text>
									{currentIcon && (
										<WeatherIcon
											icon={currentIcon}
											alt={currentDescription}
											className="h-28 w-28 drop-shadow-[0_20px_50px_rgba(110,156,255,0.35)] sm:h-36 sm:w-36"
										/>
									)}
								</div>

								<div className="text-center md:text-left">
									<div className="flex items-start justify-center gap-1 md:justify-start">
										<Text
											size="7xl"
											className="font-semibold tracking-tight text-white sm:text-8xl"
										>
											{currentTemperature}
										</Text>
										<Text
											size="4xl"
											className="mt-4 font-semibold text-sky-300 sm:text-5xl"
										>
											°F
										</Text>
										
									</div>
									<Text className="mt-2 text-base text-sky-300 font-bold">
										<span className="text-base">Feels like</span> {feelsLike} <span className="text-base">°F</span>
									</Text>
									<Text size="lg" className="mt-2 text-white/55 sm:text-xl">
										{currentDescription}
									</Text>
								</div>
							</div>
						</Section>
						<TodaysStats currentWeather={currentWeather} />
						<Forecast forecastDays={props.forecastDays} />
					</div>
				)}
			</Loader>
		</main>
	);
}

export default WeatherInfo;

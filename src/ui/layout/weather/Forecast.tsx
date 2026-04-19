import { forecastLabel } from "../../Pages/WeatherInfo.helper";
import Section from "../../shared/components/Section";
import Text from "../../shared/components/Text";
import type { ForecastDay } from "../../utils/models/weather";
import ForecastCard from "./ForecastCard";

interface Props {
	forecastDays: ForecastDay[];
}
function Forecast({ forecastDays }: Props) {
	return (
		<Section className="space-y-4">
			<Text as="h2" size="lg" className="font-semibold text-white">
				3-Day Forecast
			</Text>
			<div className="grid gap-4 lg:grid-cols-3">
				{forecastDays.slice(0, 3).map((day, index) => (
					<ForecastCard
						key={day.date}
						day={day}
						label={forecastLabel(day.date, index)}
					/>
				))}
			</div>
		</Section>
	);
}

export default Forecast;

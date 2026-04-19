import { getStats } from "../../Pages/WeatherInfo.helper";
import Section from "../../shared/components/Section";
import Text from "../../shared/components/Text";
import type { Current } from "../../utils/models/weather";

interface Props {
	currentWeather: Current;
}

function TodaysStats({ currentWeather }: Props) {
	const stats = getStats(currentWeather);
	return (
		<Section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
			{stats.map((item) => (
				<div
					key={item.label}
					className="rounded-[28px] border border-white/5 bg-white/[0.03] px-6 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
				>
					<Text size="xl" className="">
						{item.icon}
					</Text>
					<Text
						size="xs"
						className="mt-3 font-semibold uppercase tracking-[0.35em] text-white/45"
					>
						{item.label}
					</Text>
					<Text size="3xl" className="mt-3 font-semibold text-white">
						{item.value}
					</Text>
					{item.detail && (
						<Text size="sm" className="mt-1 text-white/55">
							{item.detail}
						</Text>
					)}
				</div>
			))}
		</Section>
	);
}

export default TodaysStats;

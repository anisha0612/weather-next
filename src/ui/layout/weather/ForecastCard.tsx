import type React from "react";
import Text from "@shared/components/Text";
import WeatherIcon from "@shared/components/WeatherIcon";
import type { ForecastDay } from "@utils/models/weather";

type ForecastCardProps = {
	day: ForecastDay;
	label: string;
	className?: string;
};

const ForecastCard: React.FC<ForecastCardProps> = ({
	day,
	label,
	className = "",
}) => {
	return (
		<article
			className={`flex min-h-[144px] items-center justify-between rounded-[28px] border border-white/5 bg-white/[0.03] px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${className}`.trim()}
		>
			<div>
				<Text
					size="xs"
					className="font-semibold uppercase tracking-[0.28em] text-sky-300/70"
				>
					{label}
				</Text>
				<Text size="lg" className="mt-2 text-white/80">
					{day.day.condition.text}
				</Text>
				<Text size="4xl" className="mt-6 font-semibold text-white">
					{Math.round(day.day.maxtemp_f)}°
				</Text>
			</div>
			<div className="flex flex-col items-end gap-5 text-right text-sm text-white/50">
				<WeatherIcon
					status={day.day.condition.text.toLowerCase()}
					alt={day.day.condition.text}
					className="h-10 w-10 opacity-80"
				/>
				<Text size="sm" className="mt-1 text-white/55">
					{Math.round(day.day.mintemp_f)}°
				</Text>
			</div>
		</article>
	);
};

export default ForecastCard;

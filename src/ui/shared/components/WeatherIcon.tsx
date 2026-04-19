/** biome-ignore-all lint/performance/noImgElement: <explanation> */
import type React from "react";
import { resolveWeatherIconSrc } from "../../../utils/weatherIcons";

type WeatherIconProps = {
	icon?: string;
	status?: string;
	alt?: string;
	className?: string;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({
	icon,
	status,
	alt = "Weather icon",
	className = "",
}) => {
	const src = resolveWeatherIconSrc(icon, status);

	return <img src={src} alt={alt} className={className} />;
};

export default WeatherIcon;

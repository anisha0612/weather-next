const clouds = "/images/cloudy.svg";
const cloudy = "/images/cloudy-day-1.svg";
const sunny = "/images/day.svg";
const fog = "/images/fog.svg";
const rainy = "/images/rainy.svg";
const snowy = "/images/snowy.svg";
const thunder = "/images/thunder.svg";

export const iconDisplay = (status: string) => {
	const normalizedStatus = status.toLowerCase();

	if (
		normalizedStatus.includes("rain") ||
		normalizedStatus.includes("drizzle")
	) {
		return rainy;
	}
	if (
		normalizedStatus.includes("cloud") ||
		normalizedStatus.includes("overcast")
	) {
		return cloudy;
	}
	if (
		normalizedStatus.includes("snow") ||
		normalizedStatus.includes("blizzard") ||
		normalizedStatus.includes("sleet")
	) {
		return snowy;
	}
	if (
		normalizedStatus.includes("thunder") ||
		normalizedStatus.includes("storm")
	) {
		return thunder;
	}
	if (
		normalizedStatus.includes("haze") ||
		normalizedStatus.includes("smoke") ||
		normalizedStatus.includes("mist")
	) {
		return fog;
	}

	switch (normalizedStatus) {
		case "clouds":
		case "partly cloudy":
		case "overcast":
			return cloudy;
		case "clear":
		case "sunny":
			return sunny;
		case "thunderstorm":
			return thunder;
		case "snow":
		case "patchy snow possible":
		case "blizzard":
			return snowy;
		case "haze":
		case "smoke":
		case "mist":
			return fog;
		default:
			return clouds;
	}
};

export const resolveWeatherIconSrc = (icon?: string, status?: string) => {
	if (icon) {
		return icon.startsWith("//") ? `https:${icon}` : icon;
	}

	return iconDisplay(status ?? "");
};

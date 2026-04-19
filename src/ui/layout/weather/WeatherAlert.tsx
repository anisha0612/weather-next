import { Alert } from "@utils/models/weather";
import { useWeatherLocation } from "../../Pages/WeatherInfo.helper";
import Banner from "@/src/ui/shared/components/Banner";
import Section from "../../shared/components/Section";
import { locationStore } from "@store/weather.store";

interface Props {
	alert: Alert[];
}
function WeatherAlert({ alert }: Props) {
	const location = locationStore((state) => state.location);
    const weatherLocation = useWeatherLocation(location);
	
    return (
        <>
            {alert.length > 0 ? (
                alert.map((a) => (
                    <Section key={`${a.event}-${a.severity}`} className="mx-auto max-w-4xl">
                        <Banner
                            variant="danger"
                            title={a?.event || a?.severity || "Weather Alert"}
                            description={
                                a?.desc ||
                                a?.instruction ||
                                "Severe weather advisory in effect for your area."
                            }
                            actionLabel="View Details"
                        />
                    </Section>
                ))
            ) : (
                <Section className="mx-auto max-w-4xl">
                    <Banner
                        variant="info"
                        title="Weather Update"
                        description={<>No active alerts for {weatherLocation}.</>}
                    />
                </Section>
            )}
        </>
    );
}

export default WeatherAlert;

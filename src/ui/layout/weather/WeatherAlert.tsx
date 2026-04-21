import { useRouter } from "next/navigation";
import { Alert } from "@utils/models/weather";
import { useWeatherLocation } from "../../Pages/WeatherInfo.helper";
import Banner from "@/src/ui/shared/components/Banner";
import Section from "../../shared/components/Section";
import { alertStore, locationStore } from "@store/weather.store";
import { useState } from "react";

interface Props {
    alert: Alert[];
}
function WeatherAlert({ alert }: Props) {
    const router = useRouter();
    const location = locationStore((state) => state.location);
    const weatherLocation = useWeatherLocation(location);
    const setSingleAlert = alertStore((state) => state.setSingleAlert);
    const [showAlerts, setShowAlerts] = useState(false);

    const handleAlertAction = (alert: Alert) => {
        setSingleAlert(alert);
        router.push(`/alert-detail?id=${alert.identifier}`);
    };

    const handleShowAlerts = () => {
        setShowAlerts((prev) => !prev);
    };


    return (
        <>
            {alert?.length > 0 ? (<>
                <Banner variant="info" className="font-extrabold" title="Weather Alerts" description={`There are ${alert.length} active weather alerts in your area.`} onAction={handleShowAlerts} actionLabel={showAlerts ? "Hide Alerts" : "Show Alerts"} />
                {showAlerts && alert.map((a: Alert) => (
                    <Section key={`${a.identifier}-${a.severity}`} className="mx-auto max-w-4xl">
                        <Banner
                            variant="danger"
                            title={a?.event || a?.severity || "Weather Alert"}
                            description={
                                a?.headline ||
                                a?.desc ||
                                "Severe weather advisory in effect for your area."
                            }
                            onAction={() => handleAlertAction(a)}
                            actionLabel="View Details"
                        />
                    </Section>
                ))}</>

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

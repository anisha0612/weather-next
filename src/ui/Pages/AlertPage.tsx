'use client';

import { alertStore } from "@/src/store/weather.store";
import Banner from "@/src/ui/shared/components/Banner";
import Section from "@/src/ui/shared/components/Section";
import Text from "@/src/ui/shared/components/Text";

const alertFields = [
    { label: "Event", key: "event" },
    { label: "Severity", key: "severity" },
    { label: "Urgency", key: "urgency" },
    { label: "Category", key: "category" },
    { label: "Certainty", key: "certainty" },
    { label: "Areas", key: "areas" },
    { label: "Effective", key: "effective" },
    { label: "Expires", key: "expires" },
    { label: "Headline", key: "headline" },
    { label: "Description", key: "desc" },
    { label: "Instruction", key: "instruction" },
    { label: "Message Type", key: "msgtype" },
    { label: "Note", key: "note" },
    { label: "Identifier", key: "identifier" },
] as const;

function AlertPage() {
    const alert = alertStore((state) => state.singleAlert);

    if (!alert) {
        return (
            <Section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
                <Banner
                    variant="warning"
                    title="No alert selected"
                    description="Choose an alert from the weather alerts list to view its details here."
                />
            </Section>
        );
    }

    return (
        <Section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm sm:p-8">
                <Text as="h1" size="3xl" className="font-semibold text-white">
                    {alert.event || "Weather Alert"}
                </Text>
                <Text as="p" size="sm" className="mt-2 text-white/70">
                    {alert.headline || "Detailed alert information for the selected weather advisory."}
                </Text>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {alertFields.map(({ label, key }) => {
                        const value = alert[key];

                        if (!value) {
                            return null;
                        }

                        return (
                            <div
                                key={key}
                                className="rounded-3xl border border-white/10 bg-black/20 p-4"
                            >
                                <Text
                                    as="h2"
                                    size="xs"
                                    className="uppercase tracking-[0.2em] text-sky-200/80"
                                >
                                    {label}
                                </Text>

                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}
export default AlertPage;
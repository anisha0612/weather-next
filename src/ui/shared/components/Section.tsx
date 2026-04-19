import type React from "react";

type SectionProps = React.PropsWithChildren<{
	className?: string;
}>;

const Section: React.FC<SectionProps> = ({ className = "", children }) => {
	return <section className={className}>{children}</section>;
};

export default Section;

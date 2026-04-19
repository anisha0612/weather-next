import type React from "react";

type TextAs = "span" | "p" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type TextSize =
	| "xs"
	| "sm"
	| "base"
	| "lg"
	| "xl"
	| "2xl"
	| "3xl"
	| "4xl"
	| "5xl"
	| "6xl"
	| "7xl"
	| "8xl";

type TextProps = React.PropsWithChildren<{
	as?: TextAs;
	size?: TextSize;
	className?: string;
}>;

const sizeClasses: Record<TextSize, string> = {
	"2xl": "text-2xl",
	"3xl": "text-3xl",
	"4xl": "text-4xl",
	"5xl": "text-5xl",
	"6xl": "text-6xl",
	"7xl": "text-7xl",
	"8xl": "text-8xl",
	base: "text-base",
	lg: "text-lg",
	sm: "text-sm",
	xl: "text-xl",
	xs: "text-xs",
};

const Text: React.FC<TextProps> = ({
	as: Component = "p",
	size = "base",
	className = "",
	children,
}) => {
	return (
		<Component className={`${sizeClasses[size]} ${className}`.trim()}>
			{children}
		</Component>
	);
};

export default Text;

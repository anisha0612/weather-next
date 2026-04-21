import type React from "react";
import Text from "./Text";

type BannerVariant = "info" | "warning" | "danger";

type BannerProps = {
	title: React.ReactNode;
	description: React.ReactNode;
	variant?: BannerVariant;
	actionLabel?: React.ReactNode;
	onAction?: () => void;
	icon?: React.ReactNode;
	className?: string;
};

const variantStyles: Record<
	BannerVariant,
	{
		container: string;
		icon: string;
		title: string;
		description: string;
		action: string;
	}
> = {
	danger: {
		action: "border-rose-300/20 text-rose-100",
		container:
			"border-rose-400/20 bg-rose-500/10 text-rose-100 shadow-[0_0_0_1px_rgba(251,113,133,0.08),0_0_40px_rgba(251,113,133,0.08)]",
		description: "text-rose-100/80",
		icon: "bg-rose-400/15 text-rose-200",
		title: "text-rose-200/90",
	},
	info: {
		action: "border-sky-300/20 text-sky-100",
		container:
			"border-sky-400/15 bg-sky-500/8 text-sky-100 shadow-[0_0_0_1px_rgba(56,189,248,0.08),0_0_40px_rgba(56,189,248,0.08)]",
		description: "text-sky-100/80",
		icon: "bg-sky-400/15 text-sky-200",
		title: "text-sky-200/90",
	},
	warning: {
		action: "border-amber-300/20 text-amber-100",
		container:
			"border-amber-400/20 bg-amber-500/10 text-amber-100 shadow-[0_0_0_1px_rgba(251,191,36,0.08),0_0_40px_rgba(251,191,36,0.08)]",
		description: "text-amber-100/80",
		icon: "bg-amber-400/15 text-amber-200",
		title: "text-amber-200/90",
	},
};

const defaultIcons: Record<BannerVariant, React.ReactNode> = {
	danger: <span className="text-lg">⚠</span>,
	info: <span className="text-lg">ℹ</span>,
	warning: <span className="text-lg">⚠</span>,
};

const Banner: React.FC<BannerProps> = ({
	title,
	description,
	variant = "info",
	actionLabel,
	onAction,
	icon,
	className = "",
}) => {
	const styles = variantStyles[variant];

	return (
		<div
			className={`flex items-center gap-4 rounded-[28px] border px-4 py-4 sm:px-5 ${styles.container} ${className}`.trim()}
		>
			<div
				className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${styles.icon}`}
			>
				{icon ?? defaultIcons[variant]}
			</div>
			<div className="min-w-0 flex-1">
				<Text
					size="sm"
					className={`font-semibold uppercase tracking-[0.2em] ${styles.title}`}
				>
					{title}
				</Text>
				<Text size="xs" className={`mt-1 ${styles.description}`}>
					{description}
				</Text>
			</div>
			{actionLabel ? (
				<button
					type="button"
					onClick={onAction}
					className={`hidden rounded-full border px-4 py-2 text-sm font-medium sm:block ${styles.action}`}
				>
					{actionLabel}
				</button>
			) : null}
		</div>
	);
};

export default Banner;

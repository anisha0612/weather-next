import Link from "next/link";

const Header = () => {
	return (
		<header className="w-full bg-[#1C1C1E] px-4 py-4 font-manrope sm:px-6">
			<div className="mx-auto flex w-full items-center gap-4">
				<Link
					className="text-lg font-bold text-white hover:text-gray-300"
					href="#"
				>
					Atmosphere
				</Link>
				<div className="ml-auto flex w-full max-w-md justify-end gap-6 mr-[15%]">
					<Link
					className="text-lg font-bold text-white hover:text-gray-300 hover:underline"
					href="/"
				>Home</Link>
					<Link
					className="text-lg font-bold text-white ml-6 hover:text-gray-300 hover:underline"
					href="/search"
				>
					Search
				</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;

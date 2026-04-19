/** biome-ignore-all lint/suspicious/noExplicitAny: <allow for this file> */
"use client";
import { useQuery } from "@tanstack/react-query";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useMemo } from "react";
import { searchQueryStore } from "@store/weather.store";
import { fetchAutocompleteResults } from "@utils/api/autocompleteApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SearchBoxProps = {
	initialValue?: string;
	onSearch?: (value: string) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({
	initialValue = "",
	onSearch,
}) => {
	const [value, setValue] = React.useState(initialValue);
	const [showDropdown, setShowDropdown] = React.useState(false);
	const [queryInput, setQueryInput] = React.useState("");
	const [highlightedIndex, setHighlightedIndex] = React.useState(-1);

	const { data: results } = useQuery({
		enabled: !!queryInput.trim(),
		queryFn: async () => await fetchAutocompleteResults(queryInput),
		queryKey: ["autocomplete", queryInput],
	});

	const suggestions = useMemo(() => {
		const features = results?.features;
		if (!features || features.length === 0) return [];
		return features.map((feature: any) => {
			const city = feature.properties.city || "";
			const state = feature.properties.state || "";
			const country = feature.properties.country || "";
			return [city, state, country].filter(Boolean).join(", ");
		});
	}, [results]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const input = event.target.value;
		setValue(input);
		if (input.trim()) {
			setQueryInput(input);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
			setQueryInput("");
		}
	};

	const setQuery = searchQueryStore((state) => state.setQuery);

	const handleSelectSuggestion = (suggestion: string) => {
		setValue(suggestion);
		setShowDropdown(false);
		setQuery(suggestion);
		onSearch?.(suggestion);
	};

	const handleSuggestionClick = (suggestion: string) => {
		handleSelectSuggestion(suggestion);
	};

	const handleSuggestionKeyDown = (
		event: React.KeyboardEvent<HTMLButtonElement>, // ← Changed from HTMLLIElement
		suggestion: string,
	) => {
		switch (event.key) {
			case "Enter":
			case " ":
				event.preventDefault();
				handleSelectSuggestion(suggestion);
				break;
			case "ArrowDown":
				event.preventDefault();
				setHighlightedIndex((prev) =>
					prev < suggestions.length - 1 ? prev + 1 : 0,
				);
				break;
			case "ArrowUp":
				event.preventDefault();
				setHighlightedIndex((prev) =>
					prev > 0 ? prev - 1 : suggestions.length - 1,
				);
				break;
			case "Escape":
				event.preventDefault();
				setShowDropdown(false);
				break;
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handleSelectSuggestion(value);
		setShowDropdown(false);
	};

	return (
		<form className="w-3/4 mx-auto mt-[10%]" onSubmit={handleSubmit}>
			<label className="sr-only" htmlFor="location-search">
				Zipcode or City
			</label>
			<div className="relative">
				<div className="flex h-14 w-full items-center gap-3 rounded-xl border border-slate-300 bg-[#111116]/50 px-4 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors focus-within:border-white/10 focus-within:bg-[#13131a]">
					<FontAwesomeIcon
						icon={faSearch}
						className="h-5 w-5 shrink-0 text-slate-300"
					/>
					<input
						id="location-search"
						type="text"
						value={value}
						onChange={handleInputChange}
						placeholder="Zipcode or City"
						className="w-full border-0 bg-transparent text-lg text-slate-100 placeholder:text-slate-300 focus:border-slate-400 outline-none"
						autoComplete="off"
						spellCheck={false}
					/>
				</div>
				{showDropdown && suggestions.length > 0 && (
					<div className="absolute top-full left-0 right-0 mt-2 bg-[#111116] border border-slate-300 rounded-xl shadow-lg z-50">
						<ul className="max-h-60 overflow-y-auto">
							{suggestions.map((suggestion: any) => (
								<li key={`suggestion-${suggestion}`}>
									<button
										type="button"
										onClick={() => handleSuggestionClick(suggestion)}
										onKeyDown={(e) => handleSuggestionKeyDown(e, suggestion)}
										className={`w-full text-left px-4 py-3 cursor-pointer text-slate-200 transition-colors ${
											highlightedIndex === suggestions.indexOf(suggestion)
												? "bg-slate-700 text-white"
												: "hover:bg-slate-700 hover:text-white"
										}`}
										role="option"
										aria-selected={
											highlightedIndex === suggestions.indexOf(suggestion)
										}
									>
										{suggestion}
									</button>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</form>
	);
};
export default SearchBox;

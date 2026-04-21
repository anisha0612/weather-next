
export const fetchAutocompleteResults = async (location: string) => {
    const url = `/api/autocomplete?location=${encodeURIComponent(location)}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch autocomplete results from API', {
            cause: response.statusText,
        });
    }

    return await response.json();
};

export const fetchAutocompleteResults = async (location: string) => {
    const url = `/api/autocomplete?location=${encodeURIComponent(location)}`;

    console.log('Fetching autocomplete results with URL:', url);
    const response = await fetch(url);
    console.log('Autocomplete API response:', response);

    if (!response.ok) {
        throw new Error('Failed to fetch autocomplete results from API', {
            cause: response.statusText,
        });
    }

    return await response.json();
};
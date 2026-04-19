export const runtime = 'nodejs';

const API_URL = 'https://api.weatherapi.com/v1';
const API_KEY = process.env.VITE_WEATHER_API_KEY;

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const location = searchParams.get('location');

    if (!location) {
        return Response.json({ error: 'Location parameter required' }, { status: 400 });
    }

    if (!API_KEY) {
        return Response.json({ error: 'Server configuration error' }, { status: 500 });
    }

    try {
        const response = await fetch(
            `${API_URL}/alerts.json?q=${encodeURIComponent(location)}&key=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error(`Weather API error: ${response.statusText}`);
        }

        const data = await response.json();

        return Response.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
            },
        });
    } catch (error) {
        console.error('Alerts fetch error:', error);
        return Response.json({ error: 'Failed to fetch alerts' }, { status: 500 });
    }
}
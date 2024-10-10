// Top 10 US cities data
const destinations = [
    { id: 1, name: 'San Francisco', state: 'California', },
    // ... (Create destinations for other cities)
];

async function getCityImage(city) {
    // Fetch image from Unsplash API
    const response = await fetch(`${UNSPLASH_API_URL}?query=${city}+city&client_id=${UNSPLASH_ACCESS_KEY}`);
    const data = await response.json();
    const image = data.results[0].urls.regular;
    return image;
}
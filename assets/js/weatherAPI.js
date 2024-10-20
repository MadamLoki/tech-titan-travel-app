// List of cities to fetch weather data for
const cities = [
    "New York",
    "Las Vegas",
    "Denver",
    "Washington D.C.",
    "Honolulu",
    "Boston",
    "Nashville",
    "New Orleans",
    "Miami",
    "San Diego",
];

// API key for OpenWeatherMap (replace with your actual API key)
const apiKey = "9cab484f4a0d57d0f76c54eca72f3fec";

// Container to display weather information
const weatherContainer = document.getElementById('weather-container');

// Function to fetch weather data for a given city
// This async function fetches weather data from the OpenWeatherMap API for the specified city.
// If the city is not found, it throws an error. Otherwise, it calls displayWeather to show the data.
async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error';
        errorDiv.textContent = `Error fetching weather for ${city}: ${error.message}`;
        weatherContainer.appendChild(errorDiv);
    }
}

// Function to display weather data
// This function creates a new div element for the city and populates it with the weather data.
// It then appends the div to the weatherContainer.
function displayWeather(data) {
    const cityDiv = document.createElement('div');
    cityDiv.className = 'city';
    cityDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °F</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
    weatherContainer.appendChild(cityDiv);
}

// Fetch weather data for each city in the cities array
cities.forEach(city => {
    fetchWeather(city);
});
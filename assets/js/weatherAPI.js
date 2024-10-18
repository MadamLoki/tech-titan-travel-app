const city = [
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

const apiKey = "9cab484f4a0d57d0f76c54eca72f3fec"; // Replace with your actual API key
const weatherContainer = document.getElementById('weather-container');

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

city.forEach(city => {
    fetchWeather(city);
});
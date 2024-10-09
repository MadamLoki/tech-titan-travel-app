// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = '592hvox9s4ckVC4mR6HUu0LTqCZlb2ChiAWDJ0UV128'; // Replace with your actual Unsplash API key
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';

// Top 10 US cities data
const destinations = [
    { id: 1, name: 'San Francisco', state: 'California',
        description: 'Known for its iconic Golden Gate Bridge, diverse neighborhoods, and thriving tech scene.',
        attractions: ['Golden Gate Bridge', 'Alcatraz Island', 'Fisherman\'s Wharf', 'Chinatown', 'Cable Cars'],
        bestTimeToVisit: 'September to November',
        funFact: 'The city is built on more than 50 hills.' },
    
    // ... (Create destinations for other cities)
];

// Fetch image from Unsplash
async function fetchCityImage(cityName) {
    const response = await fetch(`${UNSPLASH_API_URL}?query=${cityName}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=5`);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
        return data.results[Math.floor(Math.random() * data.results.length)].urls.regular;
    }
    return 'https://via.placeholder.com/400x300.png?text=' + cityName.replace(' ', '+');
}

// Populate destinations
async function populateDestinations() {
    const destinationsList = document.getElementById('destinationsList');
    for (const dest of destinations) {
        const imageUrl = await fetchCityImage(dest.name);
        const destElement = document.createElement('div');
        destElement.className = 'col';
        destElement.innerHTML = `
            <div class="card h-100 shadow-sm destination-card">
                <img src="${imageUrl}" class="card-img-top destination-image" alt="${dest.name}">
                <div class="card-body">
                    <h5 class="card-title">${dest.name}</h5>
                    <p class="card-text">${dest.state}</p>
                    <a href="city.html?id=${dest.id}" class="btn btn-primary">Explore</a>
                </div>
            </div>
        `;
        destinationsList.appendChild(destElement);
    }
}

// Load city details
async function loadCityDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const cityId = parseInt(urlParams.get('id'));
    const city = destinations.find(dest => dest.id === cityId);

    if (city) {
        const imageUrl = await fetchCityImage(city.name);
        document.title = `TravelPal - ${city.name}`;
        const cityContent = document.getElementById('cityContent');
        cityContent.innerHTML = `
            <h1 class="mb-4">${city.name}, ${city.state}</h1>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <img src="${imageUrl}" alt="${city.name}" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p class="lead">${city.description}</p>
                    <h3 class="mt-4">Top Attractions</h3>
                    <ul class="list-group list-group-flush mb-4">
                        ${city.attractions.map(attraction => `<li class="list-group-item">${attraction}</li>`).join('')}
                    </ul>
                    <p><strong>Best Time to Visit:</strong> ${city.bestTimeToVisit}</p>
                    <p><strong>Fun Fact:</strong> ${city.funFact}</p>
                </div>
            </div>
        `;
    } else {
        document.title = 'TravelPal - City Not Found';
        const cityContent = document.getElementById('cityContent');
        cityContent.innerHTML = '<h1>City Not Found</h1><p>Sorry, the requested city could not be found.</p>';
    }
}

// Populate destinations
function populateDestinations() {
    const destinationsList = document.getElementById('destinationsList');
    destinations.forEach(dest => {
        const destElement = document.createElement('div');
        destElement.className = 'col';
        destElement.innerHTML = `
            <div class="card h-100 shadow-sm destination-card">
                <img src="${dest.image}" class="card-img-top destination-image" alt="${dest.name}">
                <div class="card-body">
                    <h5 class="card-title">${dest.name}</h5>
                    <p class="card-text">${dest.state}</p>
                    <a href="city.html?id=${dest.id}" class="btn btn-primary">Explore</a>
                </div>
            </div>
        `;
        destinationsList.appendChild(destElement);
    });
}

// Populate city navigation
function populateCityNav() {
    const cityNavList = document.getElementById('cityNavList');
    destinations.forEach(dest => {
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        navItem.innerHTML = `
            <a class="nav-link" href="city.html?id=${dest.id}">${dest.name}</a>
        `;
        cityNavList.appendChild(navItem);
    });
}

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeButton(isDarkMode);
}

function updateDarkModeButton(isDarkMode) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (isDarkMode) {
        darkModeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        darkModeToggle.classList.remove('btn-outline-light');
        darkModeToggle.classList.add('btn-outline-warning');
    } else {
        darkModeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
        darkModeToggle.classList.remove('btn-outline-warning');
        darkModeToggle.classList.add('btn-outline-light');
    }
}

// Initialize the app
function init() {
    if (document.getElementById('destinationsList')) {
        populateDestinations();
    }
    populateCityNav();
    
    // Set up dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }

    // Load city details if on city page
    if (window.location.pathname.includes('city.html')) {
        loadCityDetails();
    }
}

// Load city details
async function loadCityDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const cityId = parseInt(urlParams.get('id'));
    const city = destinations.find(dest => dest.id === cityId);

    if (city) {
        const imageUrl = await fetchCityImage(city.name);
        document.title = `TravelPal - ${city.name}`;
        const cityContent = document.getElementById('cityContent');
        cityContent.innerHTML = `
            <h1 class="mb-4">${city.name}, ${city.state}</h1>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <img src="${imageUrl}" alt="${city.name}" class="img-fluid rounded shadow">
                </div>
                <div class="col-md-6">
                    <p class="lead">${city.description}</p>
                    <h3 class="mt-4">Top Attractions</h3>
                    <ul class="list-group list-group-flush mb-4">
                        ${city.attractions.map(attraction => `<li class="list-group-item">${attraction}</li>`).join('')}
                    </ul>
                    <p><strong>Best Time to Visit:</strong> ${city.bestTimeToVisit}</p>
                    <p><strong>Fun Fact:</strong> ${city.funFact}</p>
                </div>
            </div>
        `;
    } else {
        document.title = 'TravelPal - City Not Found';
        const cityContent = document.getElementById('cityContent');
        cityContent.innerHTML = '<h1>City Not Found</h1><p>Sorry, the requested city could not be found.</p>';
    }
}

async function init() {
    if (document.getElementById('destinationsList')) {
        await populateDestinations();
    }
    populateCityNav();
    
    // Set up dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
    
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }

    // Load city details if on city page
    if (window.location.pathname.includes('city.html')) {
        await loadCityDetails();
    }
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
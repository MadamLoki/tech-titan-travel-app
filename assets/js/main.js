// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = '592hvox9s4ckVC4mR6HUu0LTqCZlb2ChiAWDJ0UV128'; // Replace with your actual Unsplash API key
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';

const cityNames = [ // this is an array of selected city names to search for images
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
    "Travel", // this is a default search term in case the city names don't return any images
];

async function fetchRandomCityImage(count) { // this function fetches random city images from the Unsplash API
    try { // this try block catches any errors that occur during the fetch
        // Fetch random city image from Unsplash API
        const response = await fetch(`${UNSPLASH_API_URL}?query=${cityNames}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=${count}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) { // this catch block logs an error message if the fetch fails
        console.error('Error fetching Images:', error);
        return []; // this returns an empty array if the fetch fails
    }
}

// Event listener for DOMContentLoaded
// This event listener ensures that the script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');

    // Function to create carousel items
    // This function creates carousel items from the provided images and appends them to the carousel.
    function createCarouselItem(images) {
        images.forEach((image, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            if (index === 0) item.classList.add('active');

            const img = document.createElement('img');
            img.src = image.urls.regular;
            img.classList.add('carousel-image');

            item.appendChild(img);
            carouselInner.appendChild(item);
        });
        console.log('Carousel Items created!');
    }

    // Function to initialize the carousel
    // This async function fetches random city images, creates carousel items,
    // and initializes the Bootstrap carousel with specified options.
    async function initCarousel() { // this function initializes the carousel, fetches the images, and creates the carousel items, and initializes the carousel with the specified options
        try {
            const images = await fetchRandomCityImage(10); // this fetches the images from the unsplash API, 10 indicates the amount of images to fetch
            createCarouselItem(images); // this creates the carousel items

            // Initialize Bootstrap Carousel with options
            const carouselInterval = 6000; // this is the time in milliseconds for the carousel to change
            new bootstrap.Carousel(document.getElementById('carouselMain'), {
                interval: carouselInterval, // this calls the time in milliseconds for the carousel to change
                pause: 'hover', // this pauses the carousel when the mouse hovers over it
                wrap: true, // this loops the carousel back to the beginning when it reaches the end
            });
        }
        catch (error) {
            console.error('Error initializing Carousel:', error);
        }
    }
    
    window.addEventListener('DOMContentLoaded', initCarousel);

    //carousel event listerner for slide event
    const myCarousel = document.getElementById('carouselMain');

    myCarousel.addEventListener('slide.bs.carousel', (event) => { //active item is what is currently being displayed. 
        const activeItem = event.relatedTarget; 
    });
});

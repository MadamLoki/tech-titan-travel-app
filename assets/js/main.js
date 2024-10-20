// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = '592hvox9s4ckVC4mR6HUu0LTqCZlb2ChiAWDJ0UV128'; // Replace with your actual Unsplash API key
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';

const cityNames = [
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
    "Travel",
];

async function fetchRandomCityImage(count) {
    try {
        // Fetch random city image from Unsplash API
        const response = await fetch(`${UNSPLASH_API_URL}?query=${cityNames}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=${count}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching Images:', error);
        return [];
    }
}

// Event listener for DOMContentLoaded
// This event listener ensures that the script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselCaption = document.querySelector('.carousel-caption');

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
            img.alt = getAltTextFromUrl(image.urls.regular);

            const caption = document.createElement('div');
            caption.classList.add('carousel-caption');
            caption.textContent = image.cityNames || 'JourneySync';

            item.appendChild(img);
            item.appendChild(caption);
            carouselInner.appendChild(item);
        });
        console.log('Carousel Items created!');
    }

    // this function kinda works but kinda doesnt. it shows "JourneySync" instead of the city name from the search

    // Function to generate alt text from URL
    // This function extracts the file name from the URL, removes the file extension,
    // replaces hyphens and underscores with spaces, and capitalizes the first letter.
    function getAltTextFromUrl(url) {
        // Extract file name from URL
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        // Remove file extension and replace hyphens with spaces
        const altText = fileName.split('.')[0].replace(/[-_]/g, ' ');
        // Capitalize first letter of alt text
        return altText.charAt(0).toUpperCase() + altText.slice(1);
    }

    // Function to initialize the carousel
    // This async function fetches random city images, creates carousel items,
    // and initializes the Bootstrap carousel with specified options.
    async function initCarousel() {
        try {
            const images = await fetchRandomCityImage(10);
            createCarouselItem(images);

            // Initialize Bootstrap Carousel with options
            const carouselInterval = 100000;
            new bootstrap.Carousel(document.getElementById('carouselMain'), {
                interval: carouselInterval,
                pause: 'hover',
                wrap: true,
            });
        }
        catch (error) {
            console.error('Error initializing Carousel:', error);
        }
    }
    
    window.addEventListener('DOMContentLoaded', initCarousel);

    //carousel event listerner for slide event
    const myCarousel = document.getElementById('carouselMain');

    myCarousel.addEventListener('slide.bs.carousel', (event) => {
        const activeItem = event.relatedTarget;
        const city = activeItem.querySelector('.carousel-caption').textContent;
        carouselCaption.textContent = city;
    });
});

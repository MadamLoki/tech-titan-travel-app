// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = '592hvox9s4ckVC4mR6HUu0LTqCZlb2ChiAWDJ0UV128'; // Replace with your actual Unsplash API key
const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';

async function fetchRandomCityImage(count) {
    try {
        // Fetch random city image from Unsplash API
        const response = await fetch(`${UNSPLASH_API_URL}?query=city&client_id=${UNSPLASH_ACCESS_KEY}&per_page=${count}`);
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching Images:', error);
        return [];
    }
}

function createCarouselItems(images) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Clear existing items
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');

        const img = document.createElement('img');
        img.src = image.urls.regular;
        img.classList.add('d-block', 'w-100', 'carousel-image');
        img.alt = image.alt_description || 'Unsplash Image';

        item.appendChild(img);
        carouselInner.appendChild(item);
    });
    console.log('Carousel Items created!');
}

// Initialize carousel
async function initCarousel() {
    const images = await fetchRandomCityImage(5);
    createCarouselItems(images);
    try {
    // Initialize Bootstrap Carousel with options
    const carouselInterval = 6000;
    new bootstrap.Carousel(document.getElementById('carouselMain'), {
        interval: carouselInterval,
        pause: 'hover',
        wrap: true,
    });
    console.log('Carousel initialized!'); 
        } catch (error) {
            console.error('Error initializing Carousel:', error);
        }
}


window.addEventListener('DOMContentLoaded', initCarousel);

// Carousel event listener for slide event on Main Page
const myCarousel = document.getElementById('carouselMain');

myCarousel.addEventListener('slide.bs.carousel', (event) => {
    /* console.log('Slide event fired! Moving to slide:', event.to); */
});
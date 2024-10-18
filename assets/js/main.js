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

document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselCaption = document.querySelector('.carousel-caption');

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

    function getAltTextFromUrl(url) {
        // Extract file name from URL
        const fileName = url.substring(url.lastIndexOf('/') + 1);
        // Remove file extension and replace hyphens with spaces
        const altText = fileName.split('.')[0].replace(/[-_]/g, ' ');
        //capitalize first letter of alt text
        return altText.charAt(0).toUpperCase() + altText.slice(1);
    }

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






/* 

function createCarouselItems(images) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Clear existing items
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');

        const img = document.createElement('img');
        img.src = image.urls.regular;
        img.classList.add('carousel-image');
        img.alt = getAltTextFromUrl(image.urls.regular);

        const caption = document.createElement('div');
        caption.classList.add('carousel-caption', 'd-none', 'd-md-block');
        const captionText = document.createElement('h5');
        captionText.textContent = image.alt_description || 'City Image';
        caption.appendChild(captionText);

        item.appendChild(caption);

        item.appendChild(img);
        carouselInner.appendChild(item);
    });
    console.log('Carousel Items created!');
}

// Initialize carousel
async function initCarousel() {
    const images = await fetchRandomCityImage(10);
    createCarouselItems(images);
    try {
    // Initialize Bootstrap Carousel with options
    const carouselInterval = 100000;
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
    /* console.log('Slide event fired! Moving to slide:', event.to); 
}); */

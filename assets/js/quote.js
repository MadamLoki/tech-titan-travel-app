// Array of quote objects
// Each object contains a quote and its author
const quotes = [
    {
        quote: "Not all who wander are lost.",
        author: "J.R.R. Tolkien"
    },
    {
        quote: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
        author: "Andre Gide"
    },
    {
        quote: "The journey of a thousand miles begins with a single step.",
        author: "Lao Tzu"
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "St. Augustine"
    },
    {
        quote: "Traveling – it leaves you speechless, then turns you into a storyteller.",
        author: "Ibn Battuta"
    },
    {
        quote: "Travel makes one modest. You see what a tiny place you occupy in the world.",
        author: "Gustav Flaubert"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        author: "Mark Twain"
    },
    {
        quote: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
        author: "Anthony Bourdain"
    },
    {
        quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
        author: "Marcel Proust"
    },
    {
        quote: "Sharing adventures means enjoying them 100% more.",
        author: "Unknown"
    },
    {
        quote: "A person susceptible to ‘wanderlust’ is not so much addicted to movement as committed to transformation.",
        author: "Pico Iyer"
    },
    {
        quote: "When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.",
        author: "Susan Heller"
    }
];

// Function to display a random quote
// This function selects a random quote from the quotes array and updates the DOM elements with the quote and author.
function displayRandomQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = randomQuote.author;
}

// Event listener for DOMContentLoaded
// This event listener ensures that the script runs after the DOM is fully loaded.
// It calls the displayRandomQuote function to display a random quote when the page loads.
document.addEventListener('DOMContentLoaded', () => {
    displayRandomQuote();

    // Optional: Add a button to randomize the quote
    const randomizeButton = document.getElementById('randomizeButton');
    if (randomizeButton) {
        randomizeButton.addEventListener('click', displayRandomQuote);
    }
});
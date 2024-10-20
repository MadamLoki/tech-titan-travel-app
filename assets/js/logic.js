// Dark mode toggle button and body element
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Function to toggle dark mode
// This function toggles between light and dark modes by checking the current mode,
// applying the new mode, and saving the new mode to local storage.
function toggleMode() {
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    applyMode(newMode);
    localStorage.setItem('mode', newMode);
}

// Function to apply the mode
// This function applies the specified mode (light or dark) by adding or removing
// the 'dark-mode' class to/from the body element and updating the icon accordingly.
function applyMode(mode) {
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        document.getElementById('darkModeIcon').classList.remove('bi-brightness-high');
        document.getElementById('darkModeIcon').classList.add('bi-moon-stars');
    } else {
        body.classList.remove('dark-mode');
        document.getElementById('darkModeIcon').classList.remove('bi-moon-stars');
        document.getElementById('darkModeIcon').classList.add('bi-brightness-high');
    }
}

// Event listener for DOMContentLoaded
// This event listener ensures that the script runs after the DOM is fully loaded.
// It adds a click event listener to the toggle button and applies the saved mode from local storage.
document.addEventListener('DOMContentLoaded', () => {
    if (!toggleButton) {
        console.error('No toggle button found');
        return;
    }
    toggleButton.addEventListener('click', toggleMode);

    // Check local storage for mode
    const savedMode = localStorage.getItem('mode') || 'light';
    applyMode(savedMode);
});

// Function to prompt user for their name and email
// This function prompts the user to enter their first name, last name, and email.
// If the user cancels any of the prompts, an alert is shown, and the function returns early.
function promptUser() {
    const firstName = prompt("Please enter your first name:");
    if (firstName === null) {
        alert("You must enter your first name to continue.");
        return;
    }

    const lastName = prompt("Please enter your last name:");
    if (lastName === null) {
        alert("You must enter your last name to continue.");
        return;
    }

    const email = prompt("Please enter your email:");
    if (email === null) {
        alert("You must enter your email to continue.");
        return;
    }

    // Display the entered information
    alert(`Thank you, ${firstName} ${lastName}. Your email is ${email}.`);
}
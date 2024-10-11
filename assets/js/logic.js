// Dark mode toggle
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Function to toggle dark mode
function toggleMode() {
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    applyMode(newMode);
    localStorage.setItem('mode', newMode);
}

// Function to apply the mode
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

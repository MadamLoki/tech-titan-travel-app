const cityInfo = document.getElementById('cityInfo');
const itineraryDiv = document.getElementById('itineraryDiv');
const newAttractionsDiv = document.getElementById('newAttractionsDiv');
const saveChangesBtn = document.getElementById('saveChanges');

// Load saved itinerary from localStorage
function loadItinerary() {
    const savedItinerary = localStorage.getItem('savedItinerary');
    if (savedItinerary) {
        const itinerary = JSON.parse(savedItinerary);
        displayItinerary(itinerary);
    } else {
        alert("No saved itinerary found.");
    }
}

// Display the saved itinerary
function displayItinerary(itinerary) {
    cityInfo.innerHTML = `<h4>City: ${itinerary.city}</h4>`;
    itineraryDiv.innerHTML = `<h4>Selected Attractions</h4>`;
    
    // Display selected attractions with editable date and time
    const attractionList = itinerary.attractions.map((attr, index) => `
        <div class="attraction-item">
            <p>
                ${attr.name} on <input type="date" value="${attr.date}" id="date-${index}"> 
                at <input type="time" value="${attr.time}" id="time-${index}">
                <button class="btn btn-danger btn-sm remove-btn" data-index="${index}">Remove</button>
            </p>
        </div>
    `).join('');
    itineraryDiv.innerHTML += attractionList;

    // Display available attractions to add from the same city
    const selectedCity = cities.find(city => city.name === itinerary.city);
    if (selectedCity) {
        newAttractionsDiv.innerHTML = `<form id="addAttractionForm">
            ${selectedCity.attractions.map(attraction => `
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" value="${attraction.name}" id="${attraction.name}">
                    <label class="form-check-label" for="${attraction.name}">${attraction.name}</label>
                    <input type="date" class="form-control" placeholder="Date">
                    <input type="time" class="form-control" placeholder="Time">
                </div>
            `).join('')}
            <button type="submit" class="btn btn-success mt-2">Add Selected Attractions</button>
        </form>`;
    }

    // Add event listeners for removing attractions
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            removeAttraction(index);
        });
    });

    // Add event listener for adding new attractions
    document.getElementById('addAttractionForm').addEventListener('submit', (e) => {
        e.preventDefault();
        addAttractions(itinerary);
    });
}

// Remove an attraction from the itinerary
function removeAttraction(index) {
    const savedItinerary = JSON.parse(localStorage.getItem('savedItinerary'));
    savedItinerary.attractions.splice(index, 1); // Remove attraction
    saveItinerary(savedItinerary); // Save updated itinerary
}

// Add new attractions to the itinerary
function addAttractions(itinerary) {
    const checkboxes = document.querySelectorAll('#addAttractionForm input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const container = checkbox.closest('.form-check');
        const dateInput = container.querySelector('input[type="date"]').value;
        const timeInput = container.querySelector('input[type="time"]').value;

        if (dateInput && timeInput) {
            itinerary.attractions.push({
                name: checkbox.value,
                date: dateInput,
                time: timeInput
            });
        }
    });
    saveItinerary(itinerary); // Save updated itinerary
}

// Save itinerary to localStorage and update UI
function saveItinerary(itinerary) {
    localStorage.setItem('savedItinerary', JSON.stringify(itinerary));
    displayItinerary(itinerary); // Refresh the UI with the updated itinerary
}

// Save changes when "Save Changes" button is clicked
saveChangesBtn.addEventListener('click', () => {
    const savedItinerary = JSON.parse(localStorage.getItem('savedItinerary'));
    savedItinerary.attractions.forEach((attr, index) => {
        attr.date = document.getElementById(`date-${index}`).value;
        attr.time = document.getElementById(`time-${index}`).value;
    });
    saveItinerary(savedItinerary);
});

// Load the itinerary when the page loads
loadItinerary();


/* Profile data load */

function loadProfileData() {
    document.addEventListener('DOMContentLoaded', () => {

        function getDataFromLocalStorage(user) {
            const storedData = JSON.parse(localStorage.getItem('user'));
            return storedData || user;
        }

        function displayUserData(user) {
            const savedUser = getDataFromLocalStorage(user);

            const firstNameElement = document.getElementById('firstName');
            const lastNameElement = document.getElementById('lastName');
            const emailElement = document.getElementById('email');

            if (firstNameElement && lastNameElement && emailElement) {
                firstNameElement.textContent = savedUser.firstName;
                lastNameElement.textContent = savedUser.lastName;
                emailElement.textContent = savedUser.email;
            } else {
                console.error('One or more elements are missing in the DOM');
            }
        }

        displayUserData({ firstName: 'First Name', lastName: 'Last Name', email: 'Email' });
        console.log('Profile data loaded');
    });
}

loadProfileData();
// Event listener for DOMContentLoaded
// This event listener ensures that the script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const cityDropdown = document.getElementById("citySelect");
    const cityInfo = document.getElementById("cityInfo");
    const saveButton = document.getElementById('saveButton');
    const itineraryDiv = document.getElementById('itineraryDiv');

    // Populate city dropdown
    // This function populates the city dropdown with options from the cities array.
    cities.forEach(city => {
        const option = document.createElement("option");
        option.text = city.name;
        cityDropdown.add(option);
    });

    // Display city information
    // This event listener updates the city information section when a city is selected from the dropdown.
    cityDropdown.addEventListener('change', (event) => {
        const selectedCityName = event.target.value;
        const selectedCity = cities.find(city => city.name === selectedCityName);

        if (selectedCity) {
            // Create an object with the selected city's data
            const selectedCityData = {
                name: selectedCity.name,
                bestTimeToVisit: selectedCity.bestTimeToVisit,
                fact: selectedCity.fact,
                attractions: selectedCity.attractions
            };

            // Update the city information section with the selected city's data
            cityInfo.innerHTML = `
                <h2>${selectedCityData.name}</h2>
                <p><strong>Best Time to Visit:</strong> ${selectedCityData.bestTimeToVisit}</p>
                <p><strong>Fun Fact:</strong> ${selectedCityData.fact}</p>
                <h3>Attractions:</h3>
                <form id="attractionsForm">
                    ${selectedCityData.attractions.map(attraction => `
                        <div class="containerAttraction"> 
                            <div class="attraction">
                                <input class="form-check-input" type="checkbox" value="${attraction.name}" id="${attraction.name}">
                                <label class="form-check-label" for="${attraction.name}">${attraction.name}</label>
                            </div>
                            <div class="time-date">
                                <input type="date" placeholder="Date">
                                <input type="time" placeholder="Time">
                                ${attraction.link ? `<a href="${attraction.link}" target="_blank">More Info</a>` : ""}
                            </div>
                        </div>
                    `).join('')}
                </form>`;
            // Show the save button
            saveButton.style.display = "block";
        } else {
            // Hide the save button if no city is selected
            saveButton.style.display = "none";
        }
    });

    saveButton.addEventListener('click', () => {// Save the selected itinerary to local storage
        const selectedCity = cityDropdown.value;
        const selectedAttractions = [];
        const checkboxes = document.querySelectorAll('#cityInfo input[type="checkbox"]:checked');

        checkboxes.forEach(checkbox => {// Get the date and time for each selected attraction
            const containerAttraction = checkbox.closest('.containerAttraction');
            if (containerAttraction) {
                const dateInput = containerAttraction.querySelector('input[type="date"]');
                const timeInput = containerAttraction.querySelector('input[type="time"]');
                const date = dateInput ? dateInput.value : '';
                const time = timeInput ? timeInput.value : '';

                if (date && time) {// Add the selected attraction to the itinerary
                    selectedAttractions.push({
                        name: checkbox.value,
                        date: date,
                        time: time
                    });
                }
            }
        });

        if (selectedAttractions.length > 0) {// Display the selected itinerary
            itineraryDiv.innerHTML = `<h3>Your Selected Itinerary</h3>`;
            const itineraryList = selectedAttractions.map(attr =>
                `<p>${attr.name} on ${attr.date} at ${attr.time}</p>`
            ).join('');
            itineraryDiv.innerHTML += itineraryList;

            localStorage.setItem('savedItinerary', JSON.stringify({ city: selectedCity, attractions: selectedAttractions }));
        } else {
            alert("Please select at least one attraction and set a date and time for it.");
        }
    });

    // Load itinerary from local storage and update the UI on page load
    function loadItinerary() {
        const savedItinerary = localStorage.getItem('savedItinerary');
        if (savedItinerary) {
            const itinerary = JSON.parse(savedItinerary);
            cityDropdown.value = itinerary.city;
            itineraryDiv.innerHTML = `<h3>Your Selected Itinerary</h3>`;
            const itineraryList = itinerary.attractions.map(attr =>
                `<p>${attr.name} on ${attr.date} at ${attr.time}</p>`
            ).join('');
            itineraryDiv.innerHTML += itineraryList;

            itinerary.attractions.forEach(attraction => {// Check the checkboxes and populate the date and time inputs
                const checkbox = document.getElementById(attraction.name);
                const dateInput = document.getElementById(`date-${attraction.name}`);
                const timeInput = document.getElementById(`time-${attraction.name}`);
                if (checkbox && dateInput && timeInput) {
                    checkbox.checked = true;
                    dateInput.value = attraction.date;
                    timeInput.value = attraction.time;
                }
            });
        }
    }

    window.addEventListener('storage', (event) => {// Update the UI when the itinerary is updated in another tab
        if (event.key === 'savedItinerary') {
            const updatedItinerary = JSON.parse(event.newValue);
            cityDropdown.value = updatedItinerary.city;
            itineraryDiv.innerHTML = `<h3>Your Selected Itinerary</h3>`;// Display the updated itinerary
            const ititneraryList = updatedItinerary.attractions.map(attr =>
                `<p>${attr.name} on ${attr.date} at ${attr.time}</p>`
            ).join('');
            itineraryDiv.innerHTML += ititneraryList;

            updatedItinerary.attractions.forEach(attraction => {// Check the checkboxes and populate the date and time inputs
                const checkbox = document.getElementById(attraction.name);
                const dateInput = document.getElementById(`date-${attraction.name}`);
                const timeInput = document.getElementById(`time-${attraction.name}`);
                if (checkbox && dateInput && timeInput) {
                    checkbox.checked = true;
                    dateInput.value = attraction.date;
                    timeInput.value = attraction.time;
                }//
            });
        }
    });

    loadItinerary();// Load the itinerary when the page loads
});

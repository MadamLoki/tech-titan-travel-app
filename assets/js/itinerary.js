

//function to collect username
function firstAndLastName(fullName) {
    const firstName = prompt("Enter your first name");
    const lastName = prompt("Enter your last name:");
    const fullName = `${firstName}``${lastname}`;
}
//select start and end date
function Dates() {
    localStorage.removeItem('username');
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    if (new Date(startDate) > new Date(endDate)) {
        alert("Start date cannot be after end date.");
        return;
    }


}

const cities = [
    {
        name: "New York",
        attractions: ["Statue of Liberty", "Central Park", "Times Square", "Metropolitan Museum of Art"],
        bestTimeToVisit: "Spring (April to June) and Fall (September to November)"
    },
    {
        name: "Las Vegas",
        attractions: ["The Strip", "Bellagio Fountains", "Red Rock Canyon", "Fremont Street"],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)"
    },
    {
        name: "Denver",
        attractions: ["Red Rocks Park", "Denver Art Museum", "Denver Botanic Gardens", "Union Station"],
        bestTimeToVisit: "Spring (April to June) and Fall (September to October)"
    },
    {
        name: "Washington D.C.",
        attractions: ["National Mall", "Smithsonian Museums", "Lincoln Memorial", "U.S. Capitol"],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)"
    },
    {
        name: "Honolulu",
        attractions: ["Waikiki Beach", "Diamond Head", "Pearl Harbor", "Hanauma Bay"],
        bestTimeToVisit: "Year-round, but particularly from December to April"
    },
    {
        name: "Boston",
        attractions: ["Freedom Trail", "Boston Common", "Museum of Fine Arts", "Harvard University"],
        bestTimeToVisit: "Fall (September to November)"
    },
    {
        name: "Nashville",
        attractions: ["Country Music Hall of Fame", "The Parthenon", "Grand Ole Opry", "Broadway"],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)"
    },
    {
        name: "New Orleans",
        attractions: ["French Quarter", "Bourbon Street", "Garden District", "National WWII Museum"],
        bestTimeToVisit: "February to May (especially during Mardi Gras)"
    },
    {
        name: "Miami",
        attractions: ["Miami Beach", "Art Deco District", "Vizcaya Museum and Gardens", "Little Havana"],
        bestTimeToVisit: "Winter (December to February)"
    },
    {
        name: "San Diego",
        attractions: ["Balboa Park", "San Diego Zoo", "USS Midway Museum", "Coronado Beach"],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)"
    }
];




const cityList = document.getElementById('cityList');
cities.forEach((city, index) => {
    const cityItem = document.createElement('div');
    cityItem.className = 'city-item';
    cityItem.textContent = city.name;
    cityItem.setAttribute('data-index', index);
    //store the index for referrences

    cityList.appendChild(cityItem);
});

cityList.addEventListener('click', function (event) {
    if (event.target.classList.constains('city-item')) {
        const cityIndex = event.target.getAtrribute('data-index');

        displayAttractions(cityIndex);
    }
});
//function displays attractions
function displayAttractions(cityIndex) {
    const attractionsDiv = document.getElementById('attractionsDiv');
    const cityNameElement = document.getElementById('cityName');
    const attractionsList = document.getElementById('attractionsList');

    //get the selected city from the array
    const city = cities[cityIndex];

    //set city name and clear previous attractions
    cityNameElement.textContent = city.name;
    attractionsList.innerHTML = ""; //clears previous attractions
    //show attractions for the selected city

    city.attractions.forEach(attraction => {
        const listItem = document.createElement('li');
        listItem.textContent = attraction;

        attractionsList.appendChild(listItem);
    });
    attractionsDiv.classList.remove("hidden");
}

    

    // Validate that start date is not after end date







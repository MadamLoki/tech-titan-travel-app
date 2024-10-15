// Top 10 US cities data
const cities = [
    {
        name: "New York",
        attractions: [
            { name: "Statue of Liberty", link: "https://www.nps.gov/stli/index.htm" },
            { name: "Central Park", link: "https://www.centralparknyc.org/" },
            { name: "Times Square", link: "https://www.timessquarenyc.org/" },
            { name: "Metropolitan Museum of Art", link: "https://www.metmuseum.org/" },
            { name: "Brooklyn Bridge", link: "https://www.viator.com/New-York-City-attractions/Brooklyn-Bridge/overview/d687-a1282" },
            { name: "One World Observatory", link: "https://www.oneworldobservatory.com/" },
            { name: "Empire State Building", link: "https://www.esbnyc.com/" },
            { name: "The High Line", link: "https://www.thehighline.org/" },
            { name: "Museum of Modern Art (MoMA)", link: "https://www.moma.org/" },
            { name: "Coney Island", link: "https://www.coneyisland.com/" },
            { name: "The Bronx Zoo", link: "https://bronxzoo.com/" }
        ],
        bestTimeToVisit: "Spring (April to June) and Fall (September to November)",
        fact: "New York City is home to over 800 languages, making it the most linguistically diverse city in the world."
    },
    {
        name: "Las Vegas",
        attractions: [
            { name: "The Strip", link: "https://www.lasvegas.com/attractions/the-strip/" },
            { name: "Bellagio Fountains", link: "https://bellagio.mgmresorts.com/en/entertainment/fountains-of-bellagio.html" },
            { name: "Red Rock Canyon", link: "https://www.redrockcanyonlv.org/" },
            { name: "Fremont Street", link: "https://vegasexperience.com/" },
            { name: "High Roller Observation Wheel", link: "https://www.caesars.com/linq/high-roller" },
            { name: "The Neon Museum", link: "https://www.neonmuseum.org/" },
            { name: "Las Vegas Strip Helicopter Tour", link: "https://www.lasvegas.com/tours/helicopter-tours/" },
            { name: "The Mob Museum", link: "https://themobmuseum.org/" },
            { name: "Stratosphere Tower", link: "https://www.thestrat.com/" },
            { name: "Cirque du Soleil Shows", link: "https://www.cirquedusoleil.com/" },
            { name: "Las Vegas Natural History Museum", link: "https://www.lvnhm.org/" }
        ],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)",
        fact: "Las Vegas is known as the 'Entertainment Capital of the World' and is famous for its casinos and vibrant nightlife."
    },
    {
        name: "Denver",
        attractions: [
            { name: "Red Rocks Park", link: "https://www.redrocksonline.com/" },
            { name: "Denver Art Museum", link: "https://www.denverartmuseum.org/" },
            { name: "Denver Botanic Gardens", link: "https://www.botanicgardens.org/" },
            { name: "Union Station", link: "https://www.unionstationindenver.com/" },
            { name: "Coors Field", link: "https://www.mlb.com/rockies/ballpark" },
            { name: "Denver Museum of Nature & Science", link: "https://www.dmns.org/" },
            { name: "Denver Zoo", link: "https://www.denverzoo.org/" },
            { name: "Molly Brown House Museum", link: "https://mollybrown.org/" },
            { name: "City Park", link: "https://www.denvergov.org/content/denvergov/en/parks-and-recreation/parks/city-park.html" },
            { name: "Civic Center Park", link: "https://www.denvergov.org/content/denvergov/en/parks-and-recreation/parks/civic-center-park.html" },
            { name: "Mount Evans Scenic Byway", link: "https://www.fs.usda.gov/recarea/whiteriver/recarea/?recid=81494" }
        ],
        bestTimeToVisit: "Spring (April to June) and Fall (September to October)",
        fact: "Denver is known as the 'Mile High City' because it is exactly one mile above sea level."
    },
    {
        name: "Washington D.C.",
        attractions: [
            { name: "National Mall", link: "https://www.nps.gov/nama/index.htm" },
            { name: "Smithsonian Museums", link: "https://www.si.edu/" },
            { name: "Lincoln Memorial", link: "https://www.nps.gov/linc/index.htm" },
            { name: "U.S. Capitol", link: "https://www.visitthecapitol.gov/" },
            { name: "National Gallery of Art", link: "https://www.nga.gov/" },
            { name: "Washington Monument", link: "https://www.nps.gov/wamo/index.htm" },
            { name: "Vietnam Veterans Memorial", link: "https://www.nps.gov/vive/index.htm" },
            { name: "National World War II Memorial", link: "https://www.nps.gov/nr/travel/political_districts/washington_d_c.html" },
            { name: "Tidal Basin", link: "https://www.nps.gov/places/tidal-basin.htm" },
            { name: "The White House", link: "https://www.whitehouse.gov/about-the-white-house/tours-events/" },
            { name: "The Kennedy Center", link: "https://www.kennedy-center.org/" }
        ],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)",
        fact: "Washington D.C. is home to the world’s largest library, the Library of Congress, which contains over 170 million items."
    },
    {
        name: "Honolulu",
        attractions: [
            { name: "Waikiki Beach", link: "https://www.gohawaii.com/islands/oahu/regions/waikiki" },
            { name: "Diamond Head", link: "https://www.honolulu.gov/parks/diamond-head.html" },
            { name: "Pearl Harbor", link: "https://www.nps.gov/valr/index.htm" },
            { name: "Hanauma Bay", link: "https://www.honolulu.gov/parks-hanauma-bay.html" },
            { name: "Iolani Palace", link: "https://www.iolanipalace.org/" },
            { name: "Koko Head", link: "https://www.honolulu.gov/parks/koko-head.html" },
            { name: "Waimea Bay", link: "https://www.gohawaii.com/islands/oahu/regions/north-shore/waimea-bay" },
            { name: "Hanauma Bay Nature Preserve", link: "https://hanaumabaystatepark.com/" },
            { name: "Honolulu Museum of Art", link: "https://honolulumuseum.org/" },
            { name: "Manoa Falls", link: "https://www.honolulu.gov/parks/manoa-falls.html" },
            { name: "Aloha Tower", link: "https://www.honolulu.gov/parks/alohatower.html" }
        ],
        bestTimeToVisit: "Year-round, but particularly from December to April",
        fact: "Honolulu is the only U.S. state capital with a beach, Waikiki Beach, famous for its surf and beauty."
    },
    {
        name: "Boston",
        attractions: [
            { name: "Freedom Trail", link: "https://www.thefreedomtrail.org/" },
            { name: "Boston Common", link: "https://www.boston.gov/boston-common" },
            { name: "Museum of Fine Arts", link: "https://www.mfa.org/" },
            { name: "Harvard University", link: "https://www.harvard.edu/" },
            { name: "Fenway Park", link: "https://www.mlb.com/redsox/ballpark" },
            { name: "New England Aquarium", link: "https://www.neaq.org/" },
            { name: "Boston Tea Party Ships and Museum", link: "https://www.bostonteapartyship.com/" },
            { name: "Isabella Stewart Gardner Museum", link: "https://www.gardnermuseum.org/" },
            { name: "North End", link: "https://www.boston.gov/neighborhoods/north-end" },
            { name: "Boston Harbor Islands", link: "https://www.bostonharborislands.org/" },
            { name: "Bunker Hill Monument", link: "https://www.nps.gov/bost/learn/historyculture/bunkerhill.htm" }
        ],
        bestTimeToVisit: "Fall (September to November) and Spring (March to May)",
        fact: "Boston is home to the oldest subway system in America, the Massachusetts Bay Transportation Authority (MBTA)."
    },
    {
        name: "Nashville",
        attractions: [
            { name: "Country Music Hall of Fame", link: "https://countrymusichalloffame.org/" },
            { name: "The Parthenon", link: "https://www.nashville.gov/departments/parks/parthenon" },
            { name: "Ryman Auditorium", link: "https://rymanauditorium.com/" },
            { name: "Broadway", link: "https://www.visitmusiccity.com/things-to-do/broadway" },
            { name: "Nashville Zoo", link: "https://www.nashvillezoo.org/" },
            { name: "Johnny Cash Museum", link: "https://www.johnnycashmuseum.com/" },
            { name: "The Grand Ole Opry", link: "https://www.grandoleopry.com/" },
            { name: "The Hermitage", link: "https://thehermitage.com/" },
            { name: "Cheekwood Estate & Gardens", link: "https://cheekwood.org/" },
            { name: "Belmont Mansion", link: "https://belmont.edu/mansion/" },
            { name: "Music Row", link: "https://www.visitmusiccity.com/things-to-do/music-row" }
        ],
        bestTimeToVisit: "Spring (April to June) and Fall (September to November)",
        fact: "Nashville is known as 'Music City' and is famous for its rich country music history."
    },
    {
        name: "New Orleans",
        attractions: [
            { name: "French Quarter", link: "https://www.frenchquarter.com/" },
            { name: "Bourbon Street", link: "https://www.nola.com/bourbonstreet/" },
            { name: "Jackson Square", link: "https://www.nps.gov/jace/index.htm" },
            { name: "Garden District", link: "https://www.neworleans.com/neighborhoods/garden-district/" },
            { name: "National WWII Museum", link: "https://www.nationalww2museum.org/" },
            { name: "St. Louis Cathedral", link: "https://www.stlouiscathedral.org/" },
            { name: "Audubon Zoo", link: "https://audubonnatureinstitute.org/audubon-zoo" },
            { name: "Mardi Gras World", link: "https://www.mardigrasworld.com/" },
            { name: "Voodoo Museum", link: "http://www.voodoomuseum.com/" },
            { name: "City Park", link: "https://neworleanscitypark.com/" },
            { name: "Café du Monde", link: "https://www.cafedumonde.com/" }
        ],
        bestTimeToVisit: "February for Mardi Gras and April to May for festivals",
        fact: "New Orleans is famous for its vibrant music scene, unique cuisine, and annual celebrations like Mardi Gras."
    },
    {
        name: "Miami",
        attractions: [
            { name: "South Beach", link: "https://www.miamiandbeaches.com/places-to-see/south-beach" },
            { name: "Art Deco Historic District", link: "https://www.mdpl.org/" },
            { name: "Little Havana", link: "https://www.littlehavanaguide.com/" },
            { name: "Vizcaya Museum and Gardens", link: "https://vizcaya.org/" },
            { name: "Wynwood Walls", link: "https://wynwoodwalls.com/" },
            { name: "Bayside Marketplace", link: "https://baysidemarketplace.com/" },
            { name: "Miami Seaquarium", link: "https://www.miamiseaquarium.com/" },
            { name: "Miami Design District", link: "https://www.miamidesigndistrict.net/" },
            { name: "Miami Zoo", link: "https://www.zoomiami.org/" },
            { name: "Jungle Island", link: "https://www.jungleisland.com/" },
            { name: "Everglades National Park", link: "https://www.nps.gov/ever/index.htm" }
        ],
        bestTimeToVisit: "December to April for pleasant weather",
        fact: "Miami is known for its diverse culture, beautiful beaches, and vibrant nightlife."
    },
    {
        name: "San Diego",
        attractions: [
            { name: "Balboa Park", link: "https://www.balboapark.org/" },
            { name: "San Diego Zoo", link: "https://www.sandiegozoo.org/" },
            { name: "USS Midway Museum", link: "https://www.midway.org/" },
            { name: "Coronado Island", link: "https://www.coronadovisitorcenter.com/" },
            { name: "La Jolla Cove", link: "https://www.lajollacove.com/" },
            { name: "Gaslamp Quarter", link: "https://www.gaslamp.org/" },
            { name: "Old Town San Diego", link: "https://www.oldtownsandiegoguide.com/" },
            { name: "Point Loma", link: "https://www.pointloma.org/" },
            { name: "Cabrillo National Monument", link: "https://www.nps.gov/cabr/index.htm" },
            { name: "Mission Beach", link: "https://www.sandiego.gov/parks-and-recreation/parks/mission-beach" },
            { name: "SeaWorld San Diego", link: "https://seaworld.com/san-diego/" }
        ],
        bestTimeToVisit: "Year-round, but particularly in spring (March to May)",
        fact: "San Diego is known for its beautiful beaches, mild climate, and as the birthplace of California."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cityDropdown = document.getElementById("citySelect");
    const cityInfo = document.getElementById("cityInfo");
    const saveButton = document.getElementById('saveButton');
    const itineraryDiv = document.getElementById('itineraryDiv');

    // Populate city dropdown
    cities.forEach(city => {
        const option = document.createElement("option");
        option.text = city.name;
        cityDropdown.add(option);
    });

    // Display city information
    cityDropdown.addEventListener('change', (event) => {
        const selectedCityName = event.target.value;
        const selectedCity = cities.find(city => city.name === selectedCityName);

        if (selectedCity) {
            const selectedCityData = {
                name: selectedCity.name,
                bestTimeToVisit: selectedCity.bestTimeToVisit,
                fact: selectedCity.fact,
                attractions: selectedCity.attractions
            };
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
            saveButton.style.display = "block"; // Show save button
        } else {
            cityInfo.innerHTML = "";
            saveButton.style.display = "none"; // Hide save button
        }
        if (selectedCityName !== "Select a Location") {
            updateAttractionCarousel(selectedCityName);
        } else {
            document.querySelector('#attractionCarousel .carousel-aside').innerHTML = '';
        }
    });

    saveButton.addEventListener('click', () => {
        const selectedCity = cityDropdown.value;
        const selectedAttractions = [];
        const checkboxes = document.querySelectorAll('#cityInfo input[type="checkbox"]:checked');

        checkboxes.forEach(checkbox => {
            const containerAttraction = checkbox.closest('.containerAttraction');
            if (containerAttraction) {
                const dateInput = containerAttraction.querySelector('input[type="date"]');
                const timeInput = containerAttraction.querySelector('input[type="time"]');
                const date = dateInput ? dateInput.value : '';
                const time = timeInput ? timeInput.value : '';

                if (date && time) {
                    selectedAttractions.push({
                        name: checkbox.value,
                        date: date,
                        time: time
                    });
                }
            }
        });

        if (selectedAttractions.length > 0) {
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
    //load itinerary from local storage and update the UI on page load
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

            itinerary.attractions.forEach(attraction => {
                const checkbox = document.getElementById(attraction.name);
                const dateInput = document.getElementById(`date-${attraction.name}`);
                const timeInput = document.getElementById(`time-${attraction.name}`);
                if (checkbox && dateInput && timeInput) {
                    checkbox.checked = true;
                    dateInput.value = attraction.date;
                    timeInput.value = attraction.time;
                }
            }
            )
        }

    }
    window.addEventListener('storage', (event) => {
        if (event.key === 'savedItinerary') {
            const updatedItinerary = JSON.parse(event.newValue);
            cityDropdown.value = updatedItinerary.city;
            itineraryDiv.innerHTML = `<h3>Your Selected Itinerary</h3>`;
            const ititneraryList = updatedItinerary.attractions.map(attr =>
                `<p>${attr.name} on ${attr.date} at ${attr.time}</p>`
            ).join('');
            itineraryDiv.innerHTML += itineraryList;

            updatedItinerary.attractions.forEach(attraction => {
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


    });
    loadItinerary();
});


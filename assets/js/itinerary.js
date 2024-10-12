

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
        attractions: [
            { name: "Statue of Liberty", link: "https://www.nps.gov/stlu/index.htm" },
            { name: "Central Park", link: "https://www.centralparknyc.org/" },
            { name: "Times Square", link: "https://www.timessquarenyc.org/" },
            { name: "Metropolitan Museum of Art", link: "https://www.metmuseum.org/" }
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
            { name: "Fremont Street", link: "https://vegasexperience.com/" }
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
            { name: "Union Station", link: "https://www.unionstationindenver.com/" }
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
            { name: "U.S. Capitol", link: "https://www.visitthecapitol.gov/" }
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
            { name: "Hanauma Bay", link: "https://www.honolulu.gov/parks-hanauma-bay.html" }
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
            { name: "Harvard University", link: "https://www.harvard.edu/" }
        ],
        bestTimeToVisit: "Fall (September to November)",
        fact: "Boston is one of the oldest cities in the United States and played a key role in the American Revolution."
    },
    {
        name: "Nashville",
        attractions: [
            { name: "Country Music Hall of Fame", link: "https://countrymusichalloffame.org/" },
            { name: "The Parthenon", link: "https://www.nashville.gov/departments/parthenon" },
            { name: "Grand Ole Opry", link: "https://www.opry.com/" },
            { name: "Broadway", link: "https://www.visitmusiccity.com/things-to-do/attractions/broadway" }
        ],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)",
        fact: "Nashville is known as 'Music City' due to its vibrant music scene, especially country music."
    },
    {
        name: "New Orleans",
        attractions: [
            { name: "French Quarter", link: "https://www.frenchquarter.com/" },
            { name: "Bourbon Street", link: "https://www.neworleans.com/neighborhoods/french-quarter/" },
            { name: "Garden District", link: "https://www.neworleans.com/neighborhoods/garden-district/" },
            { name: "National WWII Museum", link: "https://www.nationalww2museum.org/" }
        ],
        bestTimeToVisit: "February to May (especially during Mardi Gras)",
        fact: "New Orleans is famous for its unique culture, jazz music, and cuisine, including gumbo and beignets."
    },
    {
        name: "Miami",
        attractions: [
            { name: "Miami Beach", link: "https://www.miamibeachfl.gov/" },
            { name: "Art Deco District", link: "https://www.mdpl.org/" },
            { name: "Vizcaya Museum and Gardens", link: "https://vizcaya.org/" },
            { name: "Little Havana", link: "https://www.littlehavanaguide.com/" }
        ],
        bestTimeToVisit: "Winter (December to February)",
        fact: "Miami is known for its vibrant nightlife and is home to the largest concentration of art deco architecture in the world."
    },
    {
        name: "San Diego",
        attractions: [
            { name: "Balboa Park", link: "https://www.balboapark.org/" },
            { name: "San Diego Zoo", link: "https://www.sandiegozoo.org/" },
            { name: "USS Midway Museum", link: "https://www.midway.org/" },
            { name: "Coronado Beach", link: "https://www.coronadobeach.org/" }
        ],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)",
        fact: "San Diego is known for its beautiful weather and has been named 'America's Finest City'."
    }
];

document.getElementById('citySelect').addEventListener('change', function() {
    const selectedCity = this.value;
    const cityInfo = cities.find(city => city.name === selectedCity);
    const infoDiv = document.getElementById('info');

    if (cityInfo) {
        let attractionsList = cityInfo.attractions.map(attraction => `<li><a href="${attraction.link}" target="_blank">${attraction.name}</a></li>`).join('');
        infoDiv.innerHTML = `
            <h2>${cityInfo.name}</h2>
            <p><strong>Best Time to Visit:</strong> ${cityInfo.bestTimeToVisit}</p>
            <p><strong>Fun Fact:</strong> ${cityInfo.fact}</p>
            <h3>Attractions:</h3>
            <ul>${attractionsList}</ul>
        `;
    } else {
        infoDiv.innerHTML = "";
    }
});
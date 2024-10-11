

//function to collect username
function firstAndLastName(fullName) {
    const firstName = prompt("Enter your first name");
    const lastName = prompt("Enter your last name:");
    const fullName = `${firstName}` + `${lastname}`;
}
//select start and end date
function Dates(){
    localStorage.removeItem('username');
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;


    // Validate that start date is not after end date
    if (new Date(startDate) > new Date(endDate)) {
        alert("Start date cannot be after end date.");
        return;
    }
}





function addToItinerary() {



    // 
    localStorage.setItem('username', 'JohnDoe');

    // Retrieve data
    const username = localStorage.getItem('username');

    // Remove data
    localStorage.removeItem('username');
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;


    // Validate that start date is not after end date
    if (new Date(startDate) > new Date(endDate)) {
        alert("Start date cannot be after end date.");
        return;
    }

    if (destination && startDate && endDate && attractions) {
        // Create a new itinerary entry
        const itineraryDiv = document.getElementById('itinerary');
        const newEntry = document.createElement('div');
        newEntry.classList.add('day-entry');

        // Set inner HTML of the new entry
        newEntry.innerHTML = `
            <h3>${destination}</h3>
            <p><strong>Date Range:</strong> ${startDate} to ${endDate}</p>
            <p><strong>Activities:</strong></p>
            <p>${activities.replace(/\n/g, '<br>')}</p>
        `;

        // Append the new entry to the itinerary
        itineraryDiv.appendChild(newEntry);

        // Clear form fields after adding
        document.getElementById('itineraryForm').reset();
    } else {
        alert("Please fill in all fields.");
    }

    const attractions = {
        new_york: [
            { name: 'Statue of Liberty', link: 'https://www.nps.gov/stli/index.htm' },
            { name: 'Central Park', link: 'https://www.centralparknyc.org/' },
            { name: `NYC City Lights Cruise`, link: `https://www.circleline.com/sightseeing-cruises/harbor-lights` },
            { name: ` Bronx Zoo`, link: `https://bronxzoo.com/` },
            { name: `Coney Island`, link: `https://www.coneyisland.com/` },
            { name: `Broadway `, link: `https://www.broadway.org/` },

        ],
        las_vegas: [
            { name: 'AREA15', link: 'https://www.area15.com/' },
            { name: 'The Neon Museum Las Vegas', link: 'https://www.neonmuseum.org/' },
            { name: `Red Rock Canyon National`, link: `https://www.blm.gov/programs/national-conservation-lands/nevada/red-rock-canyon` },
            { name: `Las Vegas Strip`, link: `https://www.visitlasvegas.com/las-vegas-strip/` },
            { name: `The Venetian Las Vegas`, link: `https://www.venetianlasvegas.com/` },
            { name: `Bellagio Conservatory & Botanical Gardens`, link: `https://www.bellagio.com/en/entertainment/conservatory-botanical-garden.html?ecid=GMB_BE` },

        ],
        denver: [
            { name: `Denver Museum of Nature & Science`, link: `https://www.dmns.org/ ` },
            { name: 'Red Rocks Park and Amphitheatre', link: 'https://www.redrocksonline.com/' },
            { name: `Wings Over the Rockies Air & Space Museum`, link: `http://wingsmuseum.org/` },
            { name: `International Church of Cannabis`, link: `http://www.elevationists.org/` },
            { name: `Garden of the Gods`, link: `https://gardenofgods.com/` },
            { name: `Rocky Mountain National Park`, link: `https://www.nps.gov/romo/index.htm` }

        ],
        washington_dc: [
            { name: `The National Mall`, link: `https://www.nps.gov/nama/index.htm` },
            { name: `The Smithsonian Institution`, link: `Visit Smithsonian](https://www.si.edu/` },
            { name: `The United States Capitol`, link: `https://www.visitthecapitol.gov/` },
            { name: `The White House`, link: `https://www.whitehouse.gov/about-the-white-house/tours-events/` },
            { name: `The Smithsonian National Zoo`, link: `Visit National Zoo](https://nationalzoo.si.edu/` },
            { name: `The National Gallery of Art`, link: `https://www.nga.gov/` },
        ],
        miami: [
            { name: `Miami Beach`, link: `https://www.miamibeachfl.gov` },
            { name: `Art Deco Historic District`, link: `https://www.mdpl.org` },
            { name: `Little Havana`, link: `https://www.miamiandbeaches.com/neighborhoods/little-havana` },
            { name: `Vizcaya Museum and Gardens`, link: `https://vizcaya.org` },
            { name: `Wynwood Walls`, link: `https://www.thewynwoodwalls.com` },
            { name: `Bayside Marketplace`, link: `https://www.baysidemarketplace.com` },
        ],
        san_diego: [
            { name: `Balboa Park`, link: `https://www.balboapark.org` },
            { name: `San Diego Zoo`, link: `https://www.sandiegozoo.org` },
            { name: `USS Midway Museum`, link: `https://www.midway.org` },
            { name: `La Jolla Cove`, link: `https://www.sandiego.gov/parks/park/ljcove` },
            { name: `Seaport Village`, link: `https://www.seaportvillage.com` },
            { name: `San Diego Maritime Museum`, link: `https://sdmaritime.org` },
        ],
        boston: [
            { name: `Freedom Trail`, link: `https://www.thefreedomtrail.org/` },
            { name: `Boston Common`, link: `https://www.boston.gov/parks/boston-common` },
            { name: `Massachusetts State House`, link: `https://www.sec.state.ma.us/ele/eleidx.htm` },
            { name: `Museum of Fine Arts`, link: `https://www.mfa.org/` },
            { name: `Boston Tea Party Ships & Museum`, link: `https://www.bostonteapartyship.com/` },
            { name: `New England Aquarium`, link: `https://www.neaq.org/` },
        ],
        nashville: [
            { name: `The Country Music Hall of Fame and Museum`, link: `https://www.countrymusichalloffame.org` },
            { name: `The Parthenon`, link: `https://www.nashville.gov/departments/parks/parthenon` },
            { name: `The Grand Ole Opry`, link: `https://www.opry.com` },
            { name: `Ryman Auditorium`, link: `https://ryman.com` },
            { name: `Nashville Zoo at Grassmere`, link: `https://nashvillezoo.org` },
            { name: `The Johnny Cash Museum`, link: `https://www.johnnycashmuseum.com` },
        ],
        new_orleans: [
            { name: `French Quarter`, link: `https://www.neworleans.com/neighborhoods/french-quarter/` },
            { name: `Jackson Square`, link: `https://www.nola.gov/parks-and-parks/parks/jackson-square/` },
            { name: `Garden District`, link: `https://www.neworleans.com/neighborhoods/garden-district/` },
            { name: `National WWII Museum`, link: `https://www.nationalww2museum.org` },
            { name: `Bourbon Street`, link: `https://www.neworleans.com/things-to-do/bourbon-street/` },
            { name: `Mardi Gras`, link: `https://www.mardigrasworld.com` },
        ],
        honolulu: [
            { name: `Diamond Head State Monument`, link: `https://dlnr.hawaii.gov/dsp/parks/oahu/diamond-head-state-monument/` },
            { name: `Waikiki Beach`, link: `https://www.gohawaii.com/islands/oahu/regions/waikiki` },
            { name: `Pearl Harbor National Memorial`, link: `https://www.nps.gov/valr/index.htm` },
            { name: `Hanauma Bay Nature Preserve`, link: `https://www.honolulu.gov/hnl/hanauma-bay.html` },
            { name: `Iolani Palace`, link: `https://iolanipalace.org/` },
            { name: `Punchbowl Crater`, link: `https://www.cem.va.gov/cems/nchp/punchbowl.asp` },
        ]
    };
}
//attractons display as checkbox

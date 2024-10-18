// Top 10 US cities data
const cities = [
    {
        name: "New York",
        attractions: [
            { name: "Summit One Vanderbilt", link: "https://summitov.com/" },
            { name: "NYC City Lights Cruise", link: "https://www.circleline.com/sightseeing-cruises/harbor-lights" },
            { name: "Central Park", link: "https://www.centralparknyc.org/" },
            { name: "Times Square", link: "https://www.timessquarenyc.org/" },
            { name: "Bronx Zoo", link: "https://bronxzoo.com/" },
            { name: "Coney Island", link: "https://www.coneyisland.com/" },
            { name: "Broadway", link: "https://www.broadway.org/" },
            { name: "The Cathedral Church of St. John the Divine", link: "https://www.stjohndivine.org/" },
            { name: "Brooklyn Botanic Garden", link: "https://www.bbg.org/" },
            { name: "Comedy Cellar", link: "https://www.comedycellar.com/" }
        ],
        restaurants: [
            { name: "The Modern", link: "https://www.themodernnyc.com/" },
            { name: "Atera", link: "http://ateranyc.com/" },
            { name: "TAO Downtown Restaurant", link: "https://taogroup.com/venues/tao-downtown-new-york/" },
            { name: "OLIO E PIÙ", link: "https://www.olioepiu.com/nyc-menu/" },
            { name: "Shuka", link: "https://www.shukanewyork.com/" },
            { name: "Boqueria W40th", link: "https://boqueriarestaurant.com/tapas-bar-nyc-west-40th/" },
            { name: "Shanghai 21", link: "https://shanghai21togo.com/" },
            { name: "Juliana's Pizza", link: "https://julianaspizza.com/" },
            { name: "Superiority Burger", link: "https://www.superiorityburger.com/" }
        ],
        bestTimeToVisit: "Spring (April to June) and Fall (September to November)",
        fact: "New York City is home to over 800 languages, making it the most linguistically diverse city in the world."
    },
    {
        name: "Las Vegas",
        attractions: [
            { name: "AREA15", link: "https://www.area15.com/" },
            { name: "The Neon Museum Las Vegas", link: "https://www.neonmuseum.org/" },
            { name: "Red Rock Canyon National", link: "https://www.blm.gov/programs/national-conservation-lands/nevada/red-rock-canyon" },
            { name: "Las Vegas Strip", link: "https://www.lasvegas.com/attractions/the-strip/" },
            { name: "The Venetian Las Vegas", link: "https://www.venetianlasvegas.com/" },
            { name: "Bellagio Conservatory & Botanical Gardens", link: "https://www.bellagio.com/en/entertainment/conservatory-botanical-garden.html?ecid=GMB_BE" },
            { name: "Sphere", link: "https://www.thespherevegas.com/" },
            { name: "Las Vegas Mini Grand Prix Family Fun Center", link: "https://www.lvmgp.com/" },
            { name: "Shark Reef Aquarium at Mandalay Bay", link: "https://mandalaybay.mgmresorts.com/en/entertainment/shark-reef-aquarium.html" },
            { name: "MGM Grand", link: "https://mgmgrand.mgmresorts.com/en.html" }
        ],
        restaurants: [
            { name: "Top of the World", link: "https://www.thestrat.com/restaurants/top-of-the-world?utm_source=gmb&utm_medium=yext" },
            { name: "Chart House", link: "https://www.chart-house.com/location/chart-house-las-vegas-nv/" },
            { name: "Benihana", link: "https://www.benihana.com/" },
            { name: "RPM Italian Las Vegas", link: "https://www.rpmrestaurants.com/rpm-italian-las-vegas/" },
            { name: "Carson Kitchen", link: "http://carsonkitchen.com/" },
            { name: "Nacho Daddy - Downtown", link: "http://www.nachodaddy.com/" },
            { name: "Evel Pie", link: "http://evelpie.com/" },
            { name: "Bucket List Las Vegas", link: "https://order.toasttab.com/online/bucket-list-707-fremont-street-1050" },
            { name: "Los Huicholes", link: "http://www.loshuicholesrestaurant.com/" }
        ],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)",
        fact: "Las Vegas is known as the 'Entertainment Capital of the World' and is famous for its casinos and vibrant nightlife."
    },
    {
        name: "Denver",
        attractions: [
            { name: "Denver Museum of Nature & Science", link: "https://www.dmns.org/" },
            { name: "Red Rocks Park and Amphitheatre", link: "https://www.redrocksonline.com/" },
            { name: "Wings Over the Rockies Air & Space Museum", link: "http://wingsmuseum.org/" },
            { name: "International Church of Cannabis", link: "http://www.elevationists.org/" },
            { name: "Washington Park", link: "" },
            { name: "Garden of the Gods", link: "https://gardenofgods.com/" },
            { name: "Rocky Mountain National Park", link: "https://www.nps.gov/romo/index.htm" },
            { name: "Dairy Block", link: "http://www.dairyblock.com/" },
            { name: "Eldorado Canyon State Park", link: "https://cpw.state.co.us/placestogo/parks/EldoradoCanyon" },
            { name: "Museum of Contemporary Art Denver", link: "http://www.mcadenver.org/" }
        ],
        restaurants: [
            { name: "Rioja", link: "http://www.riojadenver.com/" },
            { name: "Mercantile Dining and Provision", link: "https://www.mercantiledenver.com/" },
            { name: "El Five", link: "https://ediblebeats.com/restaurants/el-five/" },
            { name: "Steuben's Uptown", link: "http://www.steubens.com/" },
            { name: "The Pig & The Sprout", link: "https://www.pigandsprout.com/all-day-menu" },
            { name: "Osteria Marco", link: "https://www.bonannoconcepts.com/restaurant/osteria-marco/" },
            { name: "What The Pho", link: "http://whatthepho.epipay.com/" },
            { name: "Denver Stockyard Saloon - The Yard Bar", link: "http://www.denverstockyardsaloon.com/" },
            { name: "Torchy's Tacos", link: "https://torchystacos.com/" }
        ],
        bestTimeToVisit: "Spring (April to June) and Fall (September to October)",
        fact: "Denver is known as the 'Mile High City' because it is exactly one mile above sea level."
    },
    {
        name: "Washington D.C.",
        attractions: [
            { name: "The National Mall", link: "https://www.nps.gov/nama/index.htm" },
            { name: "The Smithsonian Institution", link: "https://www.si.edu/" },
            { name: "The United States Capitol", link: "https://www.visitthecapitol.gov/" },
            { name: "The White House", link: "https://www.whitehouse.gov/about-the-white-house/tours-events/" },
            { name: "Lincoln Memorial", link: "https://www.nps.gov/linc/index.htm" },
            { name: "The National Gallery of Art", link: "https://www.nga.gov/" },
            { name: "The Washington Monument", link: "https://www.nps.gov/wamo/index.htm" },
            { name: "The Smithsonian National Zoo", link: "https://nationalzoo.si.edu/" },
            { name: "The Martin Luther King Jr. Memorial", link: "https://www.nps.gov/mlkm/index.htm" },
            { name: "The United States Holocaust Memorial Museum", link: "https://www.ushmm.org/" }
        ],
        restaurants: [
            { name: "Le Diplomate", link: "https://lediplomaterestaurant.com/" },
            { name: "Rose's Luxury", link: "https://www.rosesluxury.com/" },
            { name: "Old Ebbitt Grill", link: "https://www.ebbitt.com/" },
            { name: "The Capital Grille", link: "https://www.thecapitalgrille.com/locations/dc/washington-dc/" },
            { name: "Founding Farmers", link: "https://www.foundingfarmers.com/" },
            { name: "Ambar", link: "https://www.ambarrestaurant.com/" },
            { name: "Komi", link: "https://komirestaurant.com/" },
            { name: "Mintwood Place", link: "https://mintwoodplace.com/" },
            { name: "Sushi Nakazawa", link: "https://sushinakazawa.com/" },
            { name: "Dauphine's", link: "https://www.dauphinesdc.com/" }
        ],
        bestTimeToVisit: "Spring (March to May) and Fall (September to November)",
        fact: "Washington D.C. is home to the world's largest library, the Library of Congress, which contains over 170 million items."
    },
    {
        name: "Honolulu",
        attractions: [
            { name: "Diamond Head State Monument", link: "https://dlnr.hawaii.gov/dsp/parks/oahu/diamond-head-state-monument/" },
            { name: "Waikiki Beach", link: "https://www.gohawaii.com/islands/oahu/regions/waikiki" },
            { name: "Pearl Harbor National Memorial", link: "https://www.nps.gov/valr/index.htm" },
            { name: "Hanauma Bay Nature Preserve", link: "https://www.honolulu.gov/hnl/hanauma-bay.html" },
            { name: "Iolani Palace", link: "https://iolanipalace.org/" },
            { name: "Punchbowl Crater (National Memorial Cemetery of the Pacific)", link: "https://www.cem.va.gov/cems/nchp/punchbowl.asp" },
            { name: "Bishop Museum", link: "https://www.bishopmuseum.org/" },
            { name: "Manoa Falls", link: "https://www.honolulu.gov/parks/hiking/manoa-falls.html" },
            { name: "Kualoa Ranch", link: "https://www.kualoa.com/" },
            { name: "Waikiki Aquarium", link: "https://www.waikikiaquarium.org/" }
        ],
        restaurants: [
            { name: "Mama's Fish House", link: "https://www.mamasfishhouse.com/" },
            { name: "Helena's Hawaiian Food", link: "https://www.helenshawaiianfood.com/" },
            { name: "Nico's Pier 38", link: "https://nicospier38.com/" },
            { name: "Alan Wong's Honolulu", link: "https://www.alanwongs.com/" },
            { name: "The Pig and the Lady", link: "https://www.thepigandthelady.com/" },
            { name: "Leonard's Bakery", link: "https://www.leonardshawaii.com/" },
            { name: "Roy's Waikiki", link: "https://www.roysrestaurant.com/locations/waikiki/" },
            { name: "Aloha Table", link: "http://www.alohatable.com/" },
            { name: "Side Street Inn", link: "https://sidestreetinn.com/" }
        ],
        bestTimeToVisit: "Year-round, but particularly from December to April",
        fact: "Honolulu is the only U.S. state capital with a beach, Waikiki Beach, famous for its surf and beauty."
    },
    {
        name: "Boston",
        attractions: [
            { name: "Freedom Trail", link: "https://www.thefreedomtrail.org/" },
            { name: "Boston Common", link: "https://www.boston.gov/parks/boston-common" },
            { name: "Massachusetts State House", link: "https://www.sec.state.ma.us/ele/eleidx.htm" },
            { name: "Museum of Fine Arts", link: "https://www.mfa.org/" },
            { name: "Boston Tea Party Ships & Museum", link: "https://www.bostonteapartyship.com/" },
            { name: "New England Aquarium", link: "https://www.neaq.org/" },
            { name: "Paul Revere House", link: "https://www.paulreverehouse.org/" },
            { name: "Fenway Park", link: "https://www.mlb.com/redsox/ballpark" },
            { name: "Harvard University", link: "https://www.harvard.edu/" },
            { name: "Boston Public Library", link: "https://www.bpl.org/" }
        ],
        restaurants: [
            { name: "Oleana", link: "https://www.oleanarestaurant.com" },
            { name: "Mamma Maria", link: "https://www.mammamaria.com" },
            { name: "No. 9 Park", link: "https://www.no9park.com" },
            { name: "Neptune Oyster", link: "https://www.neptuneoyster.com" },
            { name: "Myers + Chang", link: "http://www.myersandchang.com" },
            { name: "Uni", link: "https://www.uniboston.com" },
            { name: "The Capital Grille", link: "https://www.thecapitalgrille.com" },
            { name: "Toro", link: "http://www.tororestaurant.com" },
            { name: "Eventide Oyster Co.", link: "https://eventideoysterco.com" }
        ],
        bestTimeToVisit: "Fall (September to November) and Spring (March to May)",
        fact: "Boston is home to the oldest subway system in America, the Massachusetts Bay Transportation Authority (MBTA)."
    },
    {
        name: "Nashville",
        attractions: [
            { name: "The Country Music Hall of Fame and Museum", link: "https://www.countrymusichalloffame.org" },
            { name: "The Parthenon", link: "https://www.nashville.gov/departments/parks/parthenon" },
            { name: "The Grand Ole Opry", link: "https://www.opry.com" },
            { name: "Ryman Auditorium", link: "https://ryman.com" },
            { name: "Nashville Zoo at Grassmere", link: "https://nashvillezoo.org" },
            { name: "The Johnny Cash Museum", link: "https://www.johnnycashmuseum.com" },
            { name: "Music Row", link: "https://www.visitmusiccity.com" },
            { name: "Frist Art Museum", link: "https://fristartmuseum.org" },
            { name: "The Belle Meade Historic Site & Winery", link: "https://bellemeadeplantation.com" },
            { name: "The Hermitage", link: "https://thehermitage.com" }
        ],
        restaurants: [
            { name: "Hattie B's Hot Chicken", link: "https://www.hattieb.com" },
            { name: "The Catbird Seat", link: "https://www.thecatbirdseatrestaurant.com" },
            { name: "Etch", link: "https://www.etchrestaurant.com" },
            { name: "Puckett's Grocery & Restaurant", link: "https://www.puckettsgro.com" },
            { name: "Marche Artisan Foods", link: "https://www.marcheartisanfoods.com" },
            { name: "Rolf and Daughters", link: "https://rolfanddaughters.com" },
            { name: "The Pharmacy Burger Parlor & Beer Garden", link: "https://www.pharmacyburger.com" },
            { name: "Bastion", link: "https://www.bastionnashville.com" },
            { name: "City House", link: "https://www.cityhouseNashville.com" }
        ],
        bestTimeToVisit: "Spring (April to June) and Fall (September to November)",
        fact: "Nashville is known as 'Music City' and is famous for its rich country music history."
    },
    {
        name: "New Orleans",
        attractions: [
            { name: "French Quarter", link: "https://www.neworleans.com/neighborhoods/french-quarter/" },
            { name: "Jackson Square", link: "https://www.nola.gov/parks-and-parks/parks/jackson-square/" },
            { name: "Garden District", link: "https://www.neworleans.com/neighborhoods/garden-district/" },
            { name: "National WWII Museum", link: "https://www.nationalww2museum.org" },
            { name: "Bourbon Street", link: "https://www.neworleans.com/things-to-do/bourbon-street/" },
            { name: "Mardi Gras World", link: "https://www.mardigrasworld.com" },
            { name: "Audubon Park", link: "https://www.auduboninstitute.org/audubon-park" },
            { name: "St. Louis Cemetery No. 1", link: "https://www.historicneworleanscollection.org" },
            { name: "New Orleans Museum of Art (NOMA)", link: "https://noma.org" },
            { name: "French Market", link: "https://www.frenchmarket.org" }
        ],
        restaurants: [
            { name: "Commander's Palace", link: "https://www.commanderspalace.com" },
            { name: "Cafe du Monde", link: "https://www.cafedumonde.com" },
            { name: "Coop's Place", link: "https://www.coopsplace.net" },
            { name: "Emeril's New Orleans", link: "https://www.emerils.com" },
            { name: "Acme Oyster House", link: "https://www.acmeoyster.com" },
            { name: "Cochon", link: "https://cochonrestaurant.com" },
            { name: "Dooky Chase's Restaurant", link: "https://www.dookychaserestaurant.com" },
            { name: "K-Paul's Louisiana Kitchen", link: "https://www.kpauls.com" },
            { name: "Herbsaint", link: "https://www.herbsaint.com" }
        ],
        bestTimeToVisit: "February for Mardi Gras and April to May for festivals",
        fact: "New Orleans is famous for its vibrant music scene, unique cuisine, and annual celebrations like Mardi Gras."
    },
    {
        name: "Miami",
        attractions: [
            { name: "Miami Beach", link: "https://www.miamibeachfl.gov" },
            { name: "Art Deco Historic District", link: "https://www.mdpl.org" },
            { name: "Little Havana", link: "https://www.miamiandbeaches.com/neighborhoods/little-havana" },
            { name: "Vizcaya Museum and Gardens", link: "https://vizcaya.org" },
            { name: "Wynwood Walls", link: "https://www.thewynwoodwalls.com" },
            { name: "Bayside Marketplace", link: "https://www.baysidemarketplace.com" },
            { name: "Miami Seaquarium", link: "https://www.miamiseaquarium.com" },
            { name: "Perez Art Museum Miami (PAMM)", link: "https://www.pamm.org" },
            { name: "Everglades National Park", link: "https://www.nps.gov/ever/index.htm" },
            { name: "Frost Museum of Science", link: "https://www.frostscience.org" }
        ],
        restaurants: [
            { name: "Versailles", link: "https://www.versailescubancuisine.com" },
            { name: "Joe's Stone Crab", link: "https://www.joesstonecrab.com" },
            { name: "Zuma", link: "https://zumarestaurant.com/miami" },
            { name: "Yardbird Southern Table & Bar", link: "https://www.runchickenrun.com" },
            { name: "CVI.CHE 105", link: "https://cviche105.com" },
            { name: "La Mar by Gastón Acurio", link: "https://www.mandarinoriental.com/miami/brickell/miami-dining/la-mar" },
            { name: "The Capital Grille", link: "https://www.thecapitalgrille.com" },
            { name: "Stubborn Seed", link: "https://www.stubbornseed.com" },
            { name: "Barton G. The Restaurant", link: "https://www.bartong.com" },
            { name: "Michael's Genuine Food & Drink", link: "https://michaelsgenuine.com" }
        ],
        bestTimeToVisit: "December to April for pleasant weather",
        fact: "Miami is known for its diverse culture, beautiful beaches, and vibrant nightlife."
    },
    {
        name: "San Diego",
        attractions: [
            { name: "Balboa Park", link: "https://www.balboapark.org" },
            { name: "San Diego Zoo", link: "https://www.sandiegozoo.org" },
            { name: "USS Midway Museum", link: "https://www.midway.org" },
            { name: "La Jolla Cove", link: "https://www.sandiego.gov/parks/park/ljcove" },
            { name: "Coronado Island", link: "https://www.coronado.ca.us" },
            { name: "Old Town San Diego State Historic Park", link: "https://www.parks.ca.gov/?page_id=663" },
            { name: "Point Loma and Cabrillo National Monument", link: "https://www.nps.gov/cabr/index.htm" },
            { name: "Seaport Village", link: "https://www.seaportvillage.com" },
            { name: "San Diego Maritime Museum", link: "https://sdmaritime.org" },
            { name: "Petco Park", link: "https://www.mlb.com/padres/ballpark" }
        ],
        restaurants: [
            { name: "Juniper & Ivy", link: "https://juniperandivy.com" },
            { name: "Born and Raised", link: "https://www.bornandraisedsteak.com" },
            { name: "Hodad's", link: "http://www.hodads.com" },
            { name: "Ironside Fish & Oyster", link: "https://ironsidefishandoyster.com" },
            { name: "Puesto", link: "https://puestamexico.com" },
            { name: "The Fish Market", link: "https://www.fishmarket.com" },
            { name: "Kettner Exchange", link: "https://www.kettnerexchange.com" },
            { name: "Cucina Urbana", link: "https://cucinaurbana.com" },
            { name: "The Crack Shack", link: "https://www.crackshack.com" },
            { name: "Caffe Italia", link: "https://www.caffeitalia.com" }
        ],
        bestTimeToVisit: "March to May and September to November for mild weather",
        fact: "San Diego is known for its beautiful beaches, mild climate, and as the birthplace of California."
    }
];
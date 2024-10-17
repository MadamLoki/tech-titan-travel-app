const travelChecklistData = [
    {
    category: "Toiletries",
    items: [
        { id: "hairbrush", name: "Hair brush or comb" },
        { id: "toothbrush", name: "Toothbrush" },
        { id: "toothpaste", name: "Toothpaste" },
        { id: "floss", name: "Floss" },
        { id: "deodorant", name: "Deodorant" },
        { id: "skincare", name: "Skincare products" },
        { id: "bodywash", name: "Body wash" },
        { id: "shampoo", name: "Shampoo & conditioner" },
        { id: "shavingkit", name: "Shaving kit" },
        { id: "glasses", name: "Glasses" },
        { id: "contacts", name: "Contact lenses" },
        { id: "tweezers", name: "Tweezers" },
        { id: "nailclippers", name: "Nail clippers" },
        { id: "hairdryer", name: "Hair dryer" },
        { id: "hairproducts", name: "Hair products" },
        { id: "perfume", name: "Perfume/cologne" }
    ]
    },
    {
    category: "Travel Health",
    items: [
        { id: "painrelief", name: "Pain reliever" },
        { id: "feverreducers", name: "Fever reducers" },
        { id: "coldmeds", name: "Cold medicines" },
        { id: "stomachmeds", name: "Diarrhea/laxative medicines" },
        { id: "prescriptions", name: "Personal prescriptions" },
        { id: "vitamins", name: "Vitamins" },
        { id: "lozenges", name: "Throat lozenges" },
        { id: "sunscreen", name: "Sunscreen" },
        { id: "sunburnrelief", name: "Sunburn relief" },
        { id: "insectrepellent", name: "Insect repellent" },
        { id: "antibacterial", name: "Antibacterial ointment" },
        { id: "handsanitizer", name: "Hand sanitizer" },
        { id: "firstaid", name: "First aid kit" }
    ]
    },
    {
    category: "Everyday Basics",
    items: [
        { id: "phone", name: "Phone and charger" },
        { id: "umbrella", name: "Umbrella" },
        { id: "waterbottle", name: "Water bottle" },
        { id: "travelpillow", name: "Travel pillow" },
        { id: "eyemask", name: "Eye mask" },
        { id: "earplugs", name: "Ear plugs" },
        { id: "camera", name: "Camera and charger" },
        { id: "adapters", name: "Electric converters & adapters" },
        { id: "watch", name: "Watch" },
        { id: "journal", name: "Travel journal & pen" },
        { id: "reading", name: "Reading materials" }
    ]
    },
    {
    category: "Documents",
    items: [
        { id: "passport", name: "Passport/visa" },
        { id: "driverslicense", name: "Driver's license" },
        { id: "healthinsurance", name: "Health insurance documents" },
        { id: "tickets", name: "Transportation tickets" },
        { id: "emergencyinfo", name: "Emergency information" },
        { id: "reservations", name: "Reservation information" },
        { id: "hotelinfo", name: "Hotel information" },
        { id: "studentid", name: "Student id" },
        { id: "money", name: "Cash & credit/ATM card" },
        { id: "guidebooks", name: "Guide books & maps" },
        { id: "copies", name: "Copies of tickets/passports" }
    ]
    },
    {
    category: "Travel Gear",
    items: [
        { id: "mainbag", name: "Main travel bag" },
        { id: "packingcubes", name: "Pack-It™ packing cubes" },
        { id: "comfortitems", name: "Comfort & security items" },
        { id: "daybag", name: "Day bag & travel wallet" }
    ]
    },
    {
    category: "Clothing",
    subcategories: [
        {
        name: "Tops",
        items: [
            { id: "tshirts", name: "T-shirts" },
            { id: "tanktops", name: "Tank tops" },
            { id: "blouses", name: "Blouses" },
            { id: "buttonups", name: "Button-up shirts" },
            { id: "sweaters", name: "Sweaters" }
        ]
        },
        {
        name: "Bottoms",
        items: [
            { id: "shorts", name: "Shorts" },
            { id: "pants", name: "Pants" },
            { id: "skirts", name: "Skirts" },
            { id: "dresses", name: "Dresses" }
        ]
        },
        {
        name: "Outerwear",
        items: [
            { id: "lightjacket", name: "Lightweight jacket" },
            { id: "raincoat", name: "Raincoat" },
            { id: "winterjacket", name: "Winter jacket" }
        ]
        },
        {
        name: "Undergarments",
        items: [
            { id: "underwear", name: "Underwear" },
            { id: "bras", name: "Bras" },
            { id: "socks", name: "Socks" },
            { id: "sleepwear", name: "Sleepwear" }
        ]
        },
        {
        name: "Footwear",
        items: [
            { id: "comfyshoes", name: "Comfortable shoes" },
            { id: "sandals", name: "Sandals" },
            { id: "dressshoes", name: "Dress shoes" }
        ]
        },
        {
        name: "Swimwear",
        items: [
            { id: "swimsuits", name: "Swimsuits" },
            { id: "coverups", name: "Coverups" }
        ]
        },
        {
        name: "Accessories",
        items: [
            { id: "sunglasses", name: "Sunglasses" },
            { id: "hat", name: "Hat" },
            { id: "scarf", name: "Scarf" },
            { id: "belt", name: "Belt" }
        ]
        },
        {
        name: "Active Wear",
        items: [
            { id: "athleticclothes", name: "Athletic clothes" },
            { id: "athleticshoes", name: "Athletic shoes" }
        ]
        }
    ]
    }
];

// Function to render the checklist

function renderChecklist() {
    const checklist = document.getElementById('checklist');
    checklist.innerHTML = travelChecklistData.map(category => `
        <div class="category">
            <h2>${category.category}</h2>
            ${category.items ? category.items.map(item => `
                <div class="item d-flex">
                    <input class="form-check-input" type="checkbox" id="${item.id}">
                    <label class="form-check-label" for="${item.id}">${item.name}</label>
                </div>
            `).join('') : ''}
            ${category.subcategories ? category.subcategories.map(subcategory => `
                <h3>${subcategory.name}</h3>
                ${subcategory.items.map(item => `
                    <div class="item d-flex">
                        <input class="form-check-input" type="checkbox" id="${item.id}">
                        <label class="form-check-label" for="${item.id}">${item.name}</label>
                    </div>
                `).join('')}
            `).join('') : ''}
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderChecklist);

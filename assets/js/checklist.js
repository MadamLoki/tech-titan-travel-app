// Array of categories and items for the travel packing checklist
// Each category contains a name and an array of items with id and name properties
const checklistCategories = [
    {
        name: "Tops",
        items: [
            { id: "tshirts", name: "T-shirts" },
            { id: "shirts", name: "Shirts" },
            { id: "sweaters", name: "Sweaters" },
            { id: "jackets", name: "Jackets" }
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
        name: "Toiletries",
        items: [
            { id: "toothbrush", name: "Toothbrush" },
            { id: "toothpaste", name: "Toothpaste" },
            { id: "shampoo", name: "Shampoo" },
            { id: "conditioner", name: "Conditioner" },
            { id: "soap", name: "Soap" },
            { id: "deodorant", name: "Deodorant" }
        ]
    },
    {
        name: "Electronics",
        items: [
            { id: "phone", name: "Phone" },
            { id: "charger", name: "Charger" },
            { id: "camera", name: "Camera" },
            { id: "headphones", name: "Headphones" }
        ]
    },
    {
        name: "Documents",
        items: [
            { id: "passport", name: "Passport" },
            { id: "id", name: "ID" },
            { id: "tickets", name: "Tickets" },
            { id: "itinerary", name: "Itinerary" }
        ]
    }
];

// Function to create and display the checklist
// This function iterates over the checklistCategories array and creates HTML elements
// for each category and item, then appends them to the checklist container in the DOM.
function createChecklist() {
    const checklistContainer = document.getElementById('checklist');
    checklistCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        const itemsList = document.createElement('ul');
        category.items.forEach(item => {
            const itemLi = document.createElement('li');
            const itemCheckbox = document.createElement('input');
            itemCheckbox.type = 'checkbox';
            itemCheckbox.id = item.id;
            itemCheckbox.name = item.name;

            const itemLabel = document.createElement('label');
            itemLabel.htmlFor = item.id;
            itemLabel.textContent = item.name;

            itemLi.appendChild(itemCheckbox);
            itemLi.appendChild(itemLabel);
            itemsList.appendChild(itemLi);
        });

        categoryDiv.appendChild(itemsList);
        checklistContainer.appendChild(categoryDiv);
    });
}

// Event listener for DOMContentLoaded
// This event listener ensures that the script runs after the DOM is fully loaded.
// It calls the createChecklist function to display the checklist when the page loads.
document.addEventListener('DOMContentLoaded', createChecklist);

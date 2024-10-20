// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createBudgetBtn').addEventListener('click', createBudget);
    document.getElementById('addExpenseBtn').addEventListener('click', addExpense);
    document.getElementById('adjustBudgetBtn').addEventListener('click', adjustBudget);
    
    //buttons to save, load, clear and delete budget
    document.getElementById('saveBudgetBtn').addEventListener('click', saveBudget);
    document.getElementById('loadBudgetBtn').addEventListener('click', loadBudget);
    document.getElementById('deleteBudgetBtn').addEventListener('click', deleteBudget);
    document.getElementById('clearBudgetBtn').addEventListener('click', clearBudget);

    // Load the budget when the page loads
    loadBudget();
    updateCurrentTripDisplay();
});

// Global objects to store budget and expense data
let budgets = {};
let expenses = {};
let currentTripName = '';

function createBudget() {
    const tripName = document.getElementById('tripName').value.trim();
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const currency = document.getElementById('currency').value;
    
    if (!tripName || isNaN(totalAmount) || totalAmount <= 0) {
        alert("Please enter valid trip name and total amount.");
        return;
    }

    if (budgets[tripName]) {
        alert(`A budget for "${tripName}" already exists. Please use a different name or adjust the existing budget.`);
        return;
    }

    budgets[tripName] = { totalAmount, currency, remainingAmount: totalAmount };
    expenses[tripName] = [];
    currentTripName = tripName;
    localStorage.setItem('budgets', JSON.stringify(budgets));

    alert(`Budget for "${tripName}" created successfully!`);
    updateCurrentTripDisplay();
    displaySummary(tripName);
    clearInputs(['tripName', 'totalAmount']);

    saveBudget();
}

function addExpense() {
    if (!currentTripName) {
        alert("Please create or select a trip first.");
        return;
    }

    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value.trim();

    if (isNaN(amount) || amount <= 0 || !category) {
        alert("Please enter valid expense amount and category.");
        return;
    }

    expenses[currentTripName].push({ amount, category });
    budgets[currentTripName].remainingAmount -= amount;

    alert(`Expense added: ${amount} ${budgets[currentTripName].currency} for ${category}`);
    displaySummary(currentTripName);
    clearInputs(['expenseAmount', 'expenseCategory']);

    saveBudget();
}

function adjustBudget() {
    if (!currentTripName) {
        alert("Please create or select a trip first.");
        return;
    }

    const newAmount = parseFloat(document.getElementById('newAmount').value);

    if (isNaN(newAmount) || newAmount <= 0) {
        alert("Please enter a valid new budget amount.");
        return;
    }

    const totalSpent = calculateTotalSpent(currentTripName);
    budgets[currentTripName].totalAmount = newAmount;
    budgets[currentTripName].remainingAmount = newAmount - totalSpent;

    alert(`Budget adjusted to ${newAmount} ${budgets[currentTripName].currency}`);
    displaySummary(currentTripName);
    clearInputs(['newAmount']);

    saveBudget();
}

function calculateTotalSpent(tripName) {
    return expenses[tripName].reduce((total, expense) => total + expense.amount, 0);
}

function displaySummary(tripName) {
    const summaryElement = document.getElementById('summary');
    if (budgets[tripName]) {
        const totalSpent = calculateTotalSpent(tripName);
        const summary = `
                    <h4>Budget Summary for "${tripName}"</h4>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Budget</td>
                                <td>${budgets[tripName].totalAmount.toFixed(2)} ${budgets[tripName].currency}</td>
                            </tr>
                            <tr>
                                <td>Total Spent</td>
                                <td>${totalSpent.toFixed(2)} ${budgets[tripName].currency}</td>
                            </tr>
                            <tr>
                                <td>Remaining Budget</td>
                                <td>${budgets[tripName].remainingAmount.toFixed(2)} ${budgets[tripName].currency}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>Expenses:</h4>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Amount</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${expenses[tripName].map(exp => `
                            <tr>
                                <td>${exp.amount.toFixed(2)} ${budgets[tripName].currency}</td>
                                <td>${exp.category}</td>
                            </tr>
                            `).join('')}
                        </tbody>
                    </table>`;
        summaryElement.innerHTML = summary;
    }
}

function saveBudget() {
    localStorage.setItem('budgets', JSON.stringify(budgets));
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('currentTripName', currentTripName);

    console.log('Budget saved:', budgets);
    console.log('Expenses saved:', expenses);

    if (currentTripName) {

        alert('Budget saved successfully!');
    }
    
}

function loadBudget() {
    const savedBudgets = JSON.parse(localStorage.getItem('budgets'));
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));
    const savedCurrentTripName = localStorage.getItem('currentTripName');
        if (savedBudgets && savedExpenses) {

            budgets = savedBudgets;
            expenses = savedExpenses;
            currentTripName = savedCurrentTripName || '';
            updateCurrentTripDisplay();

            if (currentTripName) {
                displaySummary(currentTripName);
            
            console.log('Budgets:', budgets);
            console.log('Expenses:', expenses);

            alert(`Budget for "${currentTripName}" loaded successfully!`);

            } else {     
            alert('No saved budgets found.');
        }

        if (currentTripName && budgets[currentTripName]) {
            displaySummary(currentTripName);
        } else {
            console.log('No current trip, or invalid trip name.');
        }
    }
};

function deleteBudget() {
    if (!currentTripName) {
        alert("Please create or select a trip first.");
        return;
    }

    // Function to delete the budget for the current trip
    // This function confirms the deletion, removes the budget and expenses for the current trip from local storage,
    // updates the display, and alerts the user.
    if (confirm(`Are you sure you want to delete the budget for "${currentTripName}"?`)) {
        delete budgets[currentTripName];
        delete expenses[currentTripName];
        localStorage.setItem('budgets', JSON.stringify(budgets));
        localStorage.setItem('expenses', JSON.stringify(expenses));

        localStorage.removeItem('currentTripName');
        
        alert(`Budget for "${currentTripName}" deleted successfully!`);
        currentTripName = '';
        updateCurrentTripDisplay();

        document.getElementById('summary').innerHTML = '';

        displaySummary(currentTripName);
    }
}

// Function to clear all budgets and expenses
// This function confirms the action, removes all budgets and expenses from local storage,
// clears the budgets and expenses objects, updates the display, and alerts the user.
function clearBudget() {
    if (confirm('Are you sure you want to clear all budgets and expenses?')) {
        localStorage.removeItem('budgets');
        localStorage.removeItem('expenses');
        Object.keys(budgets).forEach(key => delete budgets[key]);
        Object.keys(expenses).forEach(key => delete expenses[key]);

        alert('Budgets and expenses cleared successfully!');
        currentTripName = '';
        updateCurrentTripDisplay();
        displaySummary(currentTripName);
    }
}

// Function to clear input fields
// This function takes an array of input field IDs and clears their values.
function clearInputs(ids) {
    ids.forEach(id => document.getElementById(id).value = '');
}

// Function to update the display of the current trip name
// This function updates the text content of the element with the ID 'currentTripName'
// to show the current trip name or a blank space if no trip is selected.
function updateCurrentTripDisplay() {
    document.getElementById('currentTripName').textContent = currentTripName || ' ';
}

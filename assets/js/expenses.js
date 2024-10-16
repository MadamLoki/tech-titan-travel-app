// Global objects to store budget and expense data
const budgets = {};
const expenses = {};
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

    alert(`Budget for "${tripName}" created successfully!`);
    updateCurrentTripDisplay();
    displaySummary(tripName);
    clearInputs(['tripName', 'totalAmount']);
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
}

function calculateTotalSpent(tripName) {
    return expenses[tripName].reduce((total, expense) => total + expense.amount, 0);
}

function displaySummary(tripName) {
    const summaryElement = document.getElementById('summary');
    if (budgets[tripName]) {
        const totalSpent = calculateTotalSpent(tripName);
        const summary = `
            <h3>Budget Summary for "${tripName}"</h3>
            <p>Total Budget: ${budgets[tripName].totalAmount.toFixed(2)} ${budgets[tripName].currency}</p>
            <p>Total Spent: ${totalSpent.toFixed(2)} ${budgets[tripName].currency}</p>
            <p>Remaining Budget: ${budgets[tripName].remainingAmount.toFixed(2)} ${budgets[tripName].currency}</p>
            <h4>Expenses:</h4>
            <ul>
                ${expenses[tripName].map(exp => `<li>${exp.amount.toFixed(2)} ${budgets[tripName].currency} - ${exp.category}</li>`).join('')}
            </ul>
        `;
        summaryElement.innerHTML = summary;
    } else {
        summaryElement.innerHTML = '<p>No budget found. Please create a budget first.</p>';
    }
}

function clearInputs(ids) {
    ids.forEach(id => document.getElementById(id).value = '');
}

function updateCurrentTripDisplay() {
    document.getElementById('currentTripName').textContent = currentTripName || 'No Trip Selected';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createBudgetBtn').addEventListener('click', createBudget);
    document.getElementById('addExpenseBtn').addEventListener('click', addExpense);
    document.getElementById('adjustBudgetBtn').addEventListener('click', adjustBudget);
    updateCurrentTripDisplay();
});
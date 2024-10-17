// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createBudgetBtn').addEventListener('click', createBudget);
    document.getElementById('addExpenseBtn').addEventListener('click', addExpense);
    document.getElementById('adjustBudgetBtn').addEventListener('click', adjustBudget);
    
    //buttons to save, load, clear and delete budget
    document.getElementsById('saveBudgetBtn').addEventListener('click', saveBudget);
    document.getElementsById('loadBudgetBtn').addEventListener('click', loadBudget);
    document.getElementsById('deleteBudgetBtn').addEventListener('click', deleteBudget);
    document.getElementsById('clearBudgetBtn').addEventListener('click', clearBudget);
    updateCurrentTripDisplay();
});

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
    localStorage.setItem('budgets', JSON.stringify(budgets));

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
    if (!currentTripName) {
        alert("Please create or select a trip first.");
        return;
    }

    localStorage.setItem('budgets', JSON.stringify(budgets));
    localStorage.setItem('expenses', JSON.stringify(expenses));
    alert(`Budget for "${currentTripName}" saved successfully!`);
    console.log('Budgets:', budgets);
}

function loadBudget() {
    const savedBudgets = JSON.parse(localStorage.getItem('budgets'));
    const savedExpenses = JSON.parse(localStorage.getItem('expenses'));

    if (savedBudgets && savedExpenses) {
        Object.assign(budgets, savedBudgets);
        Object.assign(expenses, savedExpenses);
        alert('Budgets loaded successfully!');
        console.log('Budgets:', budgets);
    } else {
        alert('No saved budgets found.');
    }
}

function deleteBudget() {
    if (!currentTripName) {
        alert("Please create or select a trip first.");
        return;
    }

    if (confirm(`Are you sure you want to delete the budget for "${currentTripName}"?`)) {
        delete budgets[currentTripName];
        delete expenses[currentTripName];
        localStorage.setItem('budgets', JSON.stringify(budgets));
        localStorage.setItem('expenses', JSON.stringify(expenses));
        alert(`Budget for "${currentTripName}" deleted successfully!`);
        currentTripName = '';
        updateCurrentTripDisplay();
        displaySummary(currentTripName);
    }
}

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

function clearInputs(ids) {
    ids.forEach(id => document.getElementById(id).value = '');
}

function updateCurrentTripDisplay() {
    document.getElementById('currentTripName').textContent = currentTripName || ' ';
}




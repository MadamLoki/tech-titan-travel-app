const budgets = {};
const expenses = {};

function createBudget(budgets) {
    const tripName = document.getElementById('tripName').value;
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const currency = document.getElementById('currency').value;
    

    budgets[tripName] = {
        totalAmount: totalAmount,
        currency: currency,
        remainingAmount: totalAmount
    };
    expenses[tripName] = [];

    console.log('Budget Created', {tripName, totalAmount, currency});
    console.log(budgets);

    alert(`Budget for "${tripName}" created successfully!`);
    clearInputs();
}

function addExpense() {
    const tripName = document.getElementById('tripName').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const category = document.getElementById('expenseCategory').value;

    if (budgets[tripName]) {
        expenses[tripName].push({ amount, category });
        budgets[tripName].remainingAmount -= amount;

        console.log('Expense Added', {tripName, amount, category});
        console.log('Updated Budgets', budgets[tripName]);

        alert(`Expense added: ${amount} ${budgets[tripName].currency} for ${category}`);
        clearExpenseInputs();
        displaySummary(tripName);
    } else {
        console.log('Budget not found', tripName);
        alert("Budget not found. Please create a budget first.");
    }
} 

function adjustBudget() {
    const tripName = document.getElementById('tripName').value;
    const newAmount = parseFloat(document.getElementById('newAmount').value);

    if (budgets[tripName]) {
        budgets[tripName].totalAmount = newAmount;
        budgets[tripName].remainingAmount = newAmount - calculateTotalSpent(tripName);
        alert(`Budget adjusted to ${newAmount} ${budgets[tripName].currency}`);
        displaySummary(tripName);
    } else {
        alert("Budget not found. Please create a budget first.");
    }
}

function calculateTotalSpent(tripName) {
    return expenses[tripName].reduce((total, expense) => total + expense.amount, 0);
}

function displaySummary(tripName) {
    const totalSpent = calculateTotalSpent(tripName);
    const summary = `
        <h3>Budget Summary for "${tripName}"</h3>
        <p>Total Budget: ${budgets[tripName].totalAmount} ${budgets[tripName].currency}</p>
        <p>Total Spent: ${totalSpent} ${budgets[tripName].currency}</p>
        <p>Remaining Budget: ${budgets[tripName].remainingAmount} ${budgets[tripName].currency}</p>
        <h4>Expenses:</h4>
        <ul>
            ${expenses[tripName].map(exp => `<li>${exp.amount} ${budgets[tripName].currency} - ${exp.category}</li>`).join('')}
        </ul>
    `;
    document.getElementById('summary').innerHTML = summary;
}

function clearInputs() {
    document.getElementById('tripName').value = '';
    document.getElementById('totalAmount').value = '';
    document.getElementById('currency').value = '';
}

function clearExpenseInputs() {
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseCategory').value = '';
}
// Set the total budget as a constant
const TOTAL_BUDGET = 1500; // Total budget in dollars

// Define individual component prices
let gpuPrice = 500; // Price of GPU
let cpuPrice = 300; // Price of CPU
let monitorPrice = 200; // Price of Monitor
let peripheralsPrice = 100; // Price of peripherals

// Function to calculate the remaining budget
function calculateRemainingBudget(totalBudget, totalExpense) {
    return totalBudget - totalExpense;
} 

// Arrow function to calculate the percentage of budget used
const calculatePercentageUsed = (totalBudget, totalExpense) => (totalExpense / totalBudget) * 100;

// Discount value to be subtracted from total expense
let discount = 50; // Discount amount in dollars

// Calculate total expense and apply discount
let totalExpense = gpuPrice + cpuPrice + monitorPrice + peripheralsPrice;
totalExpense -= discount;

// Check if expenses exceed the budget
if (totalExpense > TOTAL_BUDGET) {
    console.error("Error: Expenses exceed the total budget!");
}

// Calculate percentage of budget used
let percentageUsed = calculatePercentageUsed(TOTAL_BUDGET, totalExpense);

// Log a warning if over 90% of the budget is used
if (percentageUsed > 90) {
    console.warn("Warning: Over 90% of the budget has been used!");
}

// Calculate the remaining budget
let remainingBudget = calculateRemainingBudget(TOTAL_BUDGET, totalExpense);

// Print a detailed summary of all costs
console.log("Budget Summary:");
console.log(`Total Budget: $${TOTAL_BUDGET}`);
console.log(`GPU Price: $${gpuPrice}`);
console.log(`CPU Price: $${cpuPrice}`);
console.log(`Monitor Price: $${monitorPrice}`);
console.log(`Peripherals Price: $${peripheralsPrice}`);
console.log(`Discount Applied: -$${discount}`);
console.log(`Total Expense: $${totalExpense}`);
console.log(`Percentage of Budget Used: ${percentageUsed.toFixed(2)}%`);
console.log(`Remaining Budget: $${remainingBudget}`);

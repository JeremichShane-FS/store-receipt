// Shane Jeremich
// October 31st, 2023
// Code Exercise 03: Let's Go Shopping

// Displays a welcome alert to the user when the page loads
alert("Welcome to our store! We're delighted to have you as our valued customer. To better assist you, we'll be asking a few questions.");

// Initialize an empty array to store receipt items
let receipt = [];

// First Item
// prompting the user for the first item to buy
let item1 = prompt("What is the name of the first item you would like to buy?");
// prompting the user for the cost of the first item their buying
let item1Cost = parseFloat(prompt("How much does the " + item1 + " cost?"));
// ask the user for the number of that item they want to purchase
let item1Quantity = parseInt(prompt("How many " + item1 + " would you like to buy?"));

// Add the first item to the receipt array - this is just for fun
receipt.push({
  name: item1,
  cost: item1Cost,
  quantity: item1Quantity,
});

// Second Item
// prompting the user for the second item to buy
let item2 = prompt("What is the name of the second item you would like to buy?");
// prompting the user for the cost of the second item their buying
let item2Cost = parseFloat(prompt("How much does the " + item2 + " cost?"));
// ask the user for the number of that item they want to purchase
let item2Quantity = parseInt(prompt("How many " + item2 + " would you like to buy?"));

// Add the second item to the receipt array - this is just for fun
receipt.push({
  name: item2,
  cost: item2Cost,
  quantity: item2Quantity,
});

// the subtotal of both items
let subtotal = item1Cost * item1Quantity + item2Cost * item2Quantity;
// storing the sales tax rate and calculating the sales tax amount
let salesTax = parseFloat(prompt("What is the sales tax percentage?"));
let salesTaxTotal = parseFloat(subtotal * (parseFloat(salesTax) / 100));
// variable to store total cost (subtotal + sales tax)
let total = parseFloat(subtotal + salesTaxTotal);

// with that information, we will be creating a receipt that will show the total cost spent for each item
// I would normally do write this in a loop, but I'm not sure if we are allowed to use loops yet, not sure if we're allowed to use template literals yet
// receipt.forEach(item => {
//   console.log("(" + item.quantity + ") " + item.name.toLowerCase() + "(s) @ $" + item.cost.toFixed(2) + " = $" + (item.cost * item.quantity).toFixed(2));
// });

// Writing it this way as this is what we have learned so far
console.log("(" + item1Quantity + ") " + item1.toLowerCase() + "(s) @ $" + item1Cost.toFixed(2) + " = " + "$" + (item1Cost * item1Quantity).toFixed(2));
console.log("(" + item2Quantity + ") " + item2.toLowerCase() + "(s) @ $" + item2Cost.toFixed(2) + " = " + "$" + (item2Cost * item2Quantity).toFixed(2));
// the subtotal of both items
console.log("\n\nSubtotal Before Tax = $" + subtotal.toFixed(2));
// the sales tax amount and rate
console.log(salesTax.toFixed(3) + "% Sales Tax = $" + salesTaxTotal.toFixed(2));
// the total with tax.
console.log("Grand Total = $" + total.toFixed(2));

alert("Please check the console for your receipt.  Thank you and have a wonderful day!");

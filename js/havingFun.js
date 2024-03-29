/**
 * This is extra code to have fun with the project
 * and is not directed towards MVP or my grade
 * This is just to visualize the receipt in the DOM
 */

// Display information in the DOM
const receiptItems = document.getElementById("receipt-items");
const totalsList = document.getElementById("totals");

receipt.forEach(item => {
  // Generate a random 6-digit item code for fake UPC number
  const itemCode = Math.floor(100000 + Math.random() * 900000);
  // Calculate the total cost for the item
  const totalCost = item.cost * item.quantity;

  // Create the item line and quantity line for the receipt
  const itemLine = `
    <li class="receipt-item">
      <p>UPC ${itemCode}</p> 
      <p>${item.name.substring(0, 30).toUpperCase()}
      </p>
    </li>
    `;

  const quantityLine = `
    <li class="receipt-item">
      <p>&nbsp&nbsp&nbsp(${item.quantity}) @ $${item.cost.toFixed(2)}</p> 
      <p>$${totalCost.toFixed(2)}</p>
    </li>
    `;

  const receiptItem = itemLine + quantityLine;

  // Append both lines to the receiptItems element
  receiptItems.innerHTML += receiptItem;
});

totalsList.innerHTML = `
  <li class="receipt-item">
    <p>Subtotal:</p>
    <p>$${subtotal.toFixed(2)}</p>
  </li>
  <li class="receipt-item">
    <p>Sales Tax ${salesTax.toFixed(3)}%:</p>
    <p>$${salesTaxTotal.toFixed(2)}</p>
  </li>
  <li class="receipt-item">
    <p>Total:</p>
    <p>$${total.toFixed(2)}</p>
  </li>
`;

// Generate a random tender type (cash, debit card, or credit card)
const tenderTypes = ["cash", "debit card", "credit card"];
const randomTenderType = tenderTypes[Math.floor(Math.random() * tenderTypes.length)];

// Create variables for cash tendered and card charge
let cashTendered;
let cardCharge;

// Generate a random credit card number (16 digits, with last 4 digits revealed)
const randomCreditCard =
  "************" +
  Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

if (randomTenderType === "cash") {
  // Generate a random cash amount equal to or higher than the total
  cashTendered = Math.ceil(total);
  // For the "tender" section, display "Cash Tendered" and the realistic cash amount
  tender.innerHTML += `
    <li class="receipt-item">
      <p>Tender Type:</p>
      <p>Cash</p>
    </li>
    <li class="receipt-item">
      <p>Total:</p>
      <p>$${total.toFixed(2)}</p>
    </li>
    <li class="receipt-item">
      <p>Cash Tendered:</p>
      <p>$${cashTendered.toFixed(2)}</p>
    </li>
    <li class="receipt-item">
      <p>Change Due:</p>
      <p>$${(cashTendered - total).toFixed(2)}</p>
    </li>
  `;
} else {
  // For card tender types, set card charge to the total amount
  cardCharge = total;
  // Determine the "total" label based on the tender type
  let totalLabel = randomTenderType === "debit card" ? "Charge" : "Charge";
  // For the "tender" section, display "Charge" and the total amount for card payments
  tender.innerHTML += `
    <li class="receipt-item">
      <p>Tender Type:</p>
      <p>${randomTenderType}</p>
    </li>
    <li class="receipt-item">
      <p>${totalLabel}:</p>
      <p>$${cardCharge.toFixed(2)}</p>
    </li>
    <li class="receipt-item">
      <p>Card Number:</p>
      <p>${randomCreditCard}</p>
    </li>
  `;
}

const dateTime = document.getElementById("transaction-date");

// Create a Date object for the current date and time
const currentDate = new Date();

// Format the date as MM/DD/YYYY
const day = currentDate.getDate().toString().padStart(2, "0");
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const year = currentDate.getFullYear();

// Format the time as HH:MM:SS AM/PM
const hours = currentDate.getHours() % 12 || 12; // Convert to 12-hour format
const minutes = currentDate.getMinutes().toString().padStart(2, "0");
const seconds = currentDate.getSeconds().toString().padStart(2, "0");
const ampm = currentDate.getHours() < 12 ? "AM" : "PM";

// Create a formatted date and time string
const formattedDate = `${month}/${day}/${year}`;
const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

dateTime.innerHTML = `
<p>${formattedDate}</p>
<p>${formattedTime}</p>
`;

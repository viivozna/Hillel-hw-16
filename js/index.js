// 1
const price = Number(prompt("Enter the price of one product:"));
const quantity = Number(prompt("Enter the number of products:"));

const startingPrice = price * quantity;
let finalPrice = startingPrice;
finalPrice -= startingPrice * 0.15;

console.log("Starting price: ", startingPrice);
console.log("Price with discount: ", finalPrice);

console.log("Type of price:", typeof price);
console.log("Type of quantity:", typeof quantity);
console.log("Is the result NaN?", Number.isNaN(finalPrice));

// 2
const city = prompt("Enter your city:").trim();
const country = prompt("Enter your country:").trim();

console.log("City:", city.toUpperCase());
console.log("Country:", country.toLowerCase());

console.log("City length:", city.length);
console.log("Country length:", country.length);

const cityLower = city.toLowerCase();

console.log("Contains a:", cityLower.includes("a"));
console.log("First index of a:", cityLower.indexOf("a"));
console.log("Last index of a:", cityLower.lastIndexOf("a"));

console.log(`I live in ${city}, ${country}.`);

// 3, 4
const firstNumber = 15;
const secondNumber = 8;

const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = firstNumber / secondNumber;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

console.log("Round:", Math.round(quotient));
console.log("Floor:", Math.floor(quotient));
console.log("Ceil:", Math.ceil(quotient));

console.log("Larger number:", Math.max(firstNumber, secondNumber));
console.log("Smaller number:", Math.min(firstNumber, secondNumber));

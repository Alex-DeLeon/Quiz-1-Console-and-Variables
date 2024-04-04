const prompt = require('prompt-sync')();

// Asks user for a Year
let year = prompt("Enter a year:");

// Check if it's a leap year
if (year % 4 === 0){
// This uses the modulus operation, since if there's no remainder, there's a leap year
    console.log("The year", year, "is a leap year.") 
}
else{
    // If remainder is not 0, it means it is not a leap year
    console.log("The year", year, "is not a leap year.") 
}
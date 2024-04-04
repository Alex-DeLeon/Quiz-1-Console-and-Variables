const prompt = require('prompt-sync')();

//Program 1: Temperature Converter

// This lets the person enter their temperature
let fahrenheit = prompt("Enter the temperature in Fahrenheit");
// This is how we convert the celsius to Fahrenheit 
let celsius = (fahrenheit-32)* 1.8;
// This is what you recieve if you inputed a temperature in Fahrenheit
console.log = ("This is the temperature ")
console.log = ("Temperature in Celsius:" + celsius);

//Program 2: Grade Checker

// Asking the User for a score
let percentage = prompt("Enter your percentage score:");

// Enter the Variable
let grade;

// Assign the grade through this process
if (percentage >= 90) grade = 'A';
else if (percentage >= 80) grade = 'B';
else if (percentage >= 70) grade = 'C';
else if (percentage >= 60) grade = 'D';
else grade = 'F';

// Displays the grade
console.log = ("Your grade is: " + grade);

//Program 3: Geap Year

// Asks user for a Year
let year = prompt("Enter a year:");

// Check if it's a leap year
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) 
   console.log = (year + " is a leap year."); 
   else 
   console.log = (year + " is not a leap year.");

//Program 4: Largest Number Finder


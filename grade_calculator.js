const prompt = require('prompt-sync')();

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
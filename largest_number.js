const prompt = require('prompt-sync')();

console.log("This is a largest number checker!!! \n\n")

first = prompt("Enter the first value: ")
second = prompt("Enter the sceond number: ")
third = prompt("Enter the third number: ")

if (second > first) {
    temp = first
    first = second
    second = temp
}
if (third > first){
    temp = first
    first = third
    third = second
    second = temp
}
console.log("\nThe largest value is: "+first+"\nThe second largest value is: "+second+"\nThe third largest value is: "+third)
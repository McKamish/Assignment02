/*
Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. 
Then, display only the larger of the two within the browser window. 
Don’t forget to handle the fact that the two could be equal.
*/

let num1 = parseInt(prompt('Pick a number'))
let num2 = parseInt(prompt('Pick another number'))

if (num1 > num2) {
    console.log(num1)
} else if (num1 < num2) {
    console.log(num2)
} else if (num1 == num2) {
    console.log(num1)
}

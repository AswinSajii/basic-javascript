var readlineSync = require('readline-sync');
let number1=parseInt(readlineSync.question('Enter the first number : '));
let number2=parseInt(readlineSync.question('Enter the second number : '));
let result=number1+number2;
console.log(" Sum of the numbers =",result);
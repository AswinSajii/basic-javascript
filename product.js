var readlineSync = require('readline-sync');
let x=parseInt(readlineSync.question('Enter the first number : '));
let y=parseInt(readlineSync.question('Enter the second number : '));
let Product=x*y;
console.log(" Product of the numbers =",Product);
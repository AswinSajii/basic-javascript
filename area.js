var readlineSync = require('readline-sync');
let length=parseInt(readlineSync.question('Enter the length of the rectangle(cm) : '));
let width=parseInt(readlineSync.question('Enter the width of the rectangle(cm) : '));
let area=length*width;
console.log("The area of the rectangle =",area,"cm^2");
var readlineSync = require('readline-sync');
let number=parseInt(readlineSync.question('Enter a number : '));
if(number>0){
    console.log("The number is Positive")
}else if(number<0){
    console.log("The number is Negative")
}else{
    console.log("You have entered zero")
}
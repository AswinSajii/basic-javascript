var readlineSync = require('readline-sync');
let grade1=parseInt(readlineSync.question('Enter English grade  : '));
let grade2=parseInt(readlineSync.question('Enter Hindi grade : '));
let grade3=parseInt(readlineSync.question('Enter Malayalam grade  : '));

let result=grade1+grade2+grade3;
if(result>=60){
    console.log("You are Passed")
}else{
    console.log("You are failed")
}
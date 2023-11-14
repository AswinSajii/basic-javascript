var readlineSync = require('readline-sync');
let a=parseInt(readlineSync.question(' enter your age : '));

if(a>=18){
    console.log("you are eligible to vote")
}else{
    console.log("you are not eligible to vote")
}
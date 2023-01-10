// To write a program to find the square root of a number 
const prompt=require("prompt-sync")({sigint:true}); 

function sqrtNumber(x){
   return Math.sqrt(x);
}

console.log(sqrtNumber(10));
console.log(sqrtNumber(20));
console.log(sqrtNumber(33));
console.log(sqrtNumber(99));
console.log(sqrtNumber(11));
console.log(sqrtNumber(1));
console.log(sqrtNumber(101));

// take the input from the user


function sqrtInputNumber(){
   const number = prompt('Enter the number: ');
   return Math.sqrt(number);
}


console.log(sqrtInputNumber());
console.log(sqrtInputNumber());
console.log(sqrtInputNumber());
console.log(sqrtInputNumber());
console.log(sqrtInputNumber());

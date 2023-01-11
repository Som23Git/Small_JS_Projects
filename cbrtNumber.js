// Find the cube root of a number
const prompt=require("prompt-sync")({sigint:true}); 

for(let i=0;i<5;i++){
function cbrtNumber(){
    const getInput = prompt("Enter the Number: ");
    return Math.cbrt(getInput);
    
};
console.log(cbrtNumber());
}

// Output
/* 

Enter the Number: 90
4.481404746557165
Enter the Number: 678
8.785029643636326
Enter the Number: 45678
35.74667842059347
Enter the Number: 9876
21.454926303164232
Enter the Number: 99
4.626065009182742

*/
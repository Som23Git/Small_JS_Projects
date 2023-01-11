const prompt=require("prompt-sync")({sigint:true}); 
var array1 = [1,2,3,5,6,'hello'];


function randArray(){
    // const array = new Array();
    // const addArray = parseInt(prompt("Enter the Array: "));;
    const randomIndex = Math.floor(Math.random() * array1.length);
    console.log(`this is an array - ${array1}`);
    console.log(`this is an random number - ${randomIndex}`);
    return randomIndex;
}


let x = randArray();
console.log(`This is the random array - ${array1[x]}`);

//Output
/* 

this is an array - 1,2,3,5,6,5
this is an random number - 2
This is the random array - 3

this is an array - 1,2,3,5,6,hello
this is an random number - 5
This is the random array - hello

*/
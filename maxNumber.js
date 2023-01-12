//Get all the numbers from the customer and find the max number.
const prompt=require("prompt-sync")({sigint:true}); 

var array = new Array();
var y;

function x(){
for(i=0;i<5;i++){
        const getInput1 = prompt("Enter the Number: ");
        array[i] = getInput1;
        console.log(array);
    }
    console.log(`this is the console log of ${array}`);
    y = Math.max(...array)
    console.log(`The maximum number is ${y}`);
}

x();




/* 

Enter the Number: 12
[ '12' ]
Enter the Number: 1
[ '12', '1' ]
Enter the Number: 257
[ '12', '1', '257' ]
Enter the Number: 34
[ '12', '1', '257', '34' ]
Enter the Number: 1
[ '12', '1', '257', '34', '1' ]
this is the console log of 12,1,257,34,1
The maximum number is 257

*/
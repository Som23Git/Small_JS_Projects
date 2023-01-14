// Program to find the area of the Parallelogram
const prompt=require("prompt-sync")({sigint:true}); 

let side1 = new Array();
// let mul = new Array();
var mul = 1;

function areaParellogram(){
for(i=0;i<4;i++){
let input = parseInt(prompt('Enter side: '));
side1[i] = input;
mul = mul * side1[i];
console.log(`The total area of the Parallelogram - ${mul}`);
// console.log(side1);
    }
    return side1;
};

console.log("The all sides of the parallelogram: " + areaParellogram());

/* 

Enter side: 2
The total area of the Parallelogram - 2
Enter side: 10
The total area of the Parallelogram - 20
Enter side: 20
The total area of the Parallelogram - 400
Enter side: 20
The total area of the Parallelogram - 8000
the all sides of the parallelogram: 2,10,20,20

*/


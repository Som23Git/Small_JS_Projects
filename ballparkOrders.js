/*  ---------------------------------------------------------------------------------------------------------------------

You and three friends go to a baseball game and you offer to go to the concession stand for everyone. 
They each order one thing, and you do as well. Nachos and Pizza both cost $6.00. A Cheeseburger meal costs $10. 
Water is $4.00 and Coke is $5.00. Tax is 7%.

Task 
Determine the total cost of ordering four items from the concession stand. If one of your friend’s orders 
something that isn't on the menu, you will order a Coke for them instead.

Input Format
You are given a string of the four items that you've been asked to order that are separated by spaces.

Output Format 
You will output a number of the total cost of the food and drinks.

Sample Input 
'Pizza Cheeseburger Water Popcorn'

Sample Output 
26.75

Explanation
Because Popcorn is not on the menu, this friend gets a coke which brings the subtotal to $25.00 and $26.75 with tax.
--------------------------------------------------------------------------------------------------------------------- */

bpOrder = (x) => {
let text = x;
text = text.toLocaleLowerCase();
// console.log(text); To check whether the words are converted to lowercase.
const myArray = text.split(" ");
console.log(myArray);
let sum = 0;
for(i=0; i<myArray.length; i++){
switch(myArray[i]){
    case "nachos":
    case "pizza":
        sum = sum + 6;
        break;
    case "cheeseburger":
        sum = sum + 10;
        break;
    case "water":
        sum = sum + 4;
        break;
    case "coke":
        sum = sum + 5;
        break;
    default:
        sum = sum + 5;
        break;
}
console.log(sum);
}
sum = sum + (sum * 0.07);
console.log(`The total is ${sum}`);
}

bpOrder("Pizza Cheeseburger Water Popcorn");
bpOrder("nachos CheeseBurger POPCorn Coke");


/* OUTPUT */
/* 
[ 'pizza', 'cheeseburger', 'water', 'popcorn' ]
6
16
20
25
The total is 26.75

[ 'nachos', 'cheeseburger', 'popcorn', 'coke' ]
6
16
21
26
The total is 27.82

*/

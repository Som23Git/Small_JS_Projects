/* ---------------------------------------------------------------------------------------------------------------------

You have a box of popsicles and you want to give them all away to a group of brothers and sisters. 
If you have enough left in the box to give them each an even amount you should go for it! If not, 
they will fight over them, and you should eat them yourself later.

Task
Given the number of siblings that you are giving popsicles to, determine if you can give them each an even amount or 
if you shouldn't mention the popsicles at all.

Input Format
Two integer values, the first one represents the number of siblings, and the second one represents the number of popsicles 
that you have left in the box.

Output Format
A string that says 'give away' if you are giving them away, or 'eat them yourself' if you will be eating them yourself.

Sample Input
3 9

Sample Output
give away

--------------------------------------------------------------------------------------------------------------------- */
var a,b;
popSicles = (a,b) => {
    if((a-b) > 0){
        console.log(`Siblings are ${a} - greater than the Popsicles - ${b}: Eat them yourself`);
    } else if(a==1) {
        console.log(`Give Away: There is only ${a} sibling`);
    } else if (a == b){
        console.log(`Give Away: Both the Popsicles ${b} and the number of Siblings ${a} are same`);
    } else if ((b%a) == 0){
        console.log(`Give Away: We can give each sibling equally of ${b/a} Popsicles`);
    } else if((b%a) != 0){
        console.log(`Eat them yourself ${Math.ceil(b/a)} is not equal to Zero`);
    }
};

popSicles(1,9);     // 3 is the number of siblings and 9 is the number of popsicles
popSicles(3,9); 
popSicles(1,1); 
popSicles(1,5); 
popSicles(10,9); 
popSicles(100,9); 
popSicles(99,101); 
popSicles(99,100); 
popSicles(99,99);

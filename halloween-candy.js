/* ---------------------------------------------------------------------------------------------------------------------

You go trick or treating with a friend and all but three of the houses that you visit are giving out candy. 
One house that you visit is giving out toothbrushes and two houses are giving out dollar bills. 

Task
Given the input of the total number of houses that you visited, what is the percentage chance that one random 
item pulled from your bag is a dollar bill? 

Input Format 
An integer (>=3) representing the total number of houses that you visited. 

Output Format
A percentage value rounded up to the nearest whole number.

Sample Input
4

Sample Output 
50

Explanation 
If you visited four houses, one would be candy, two would be dollars, and one would be a toothbrush. A 2 in 4 chance is 50%.

--------------------------------------------------------------------------------------------------------------------- */

var y;
var b;

calcDollar = (x) => {
    if(x==3){
        console.log(`The total number of houses that gave candies - 66.6%`)
    } else{
    y = x - 3;
    console.log(`The total number of houses that gave candies - ${y}`);
    b = ((2/x) * 100);
    b = Math.round(b);
    console.log(`The total percentage of houses that gave Dollar Bills - ${b}%`);
}
};

calcDollar(4);
calcDollar(10);
calcDollar(100);
calcDollar(45);
calcDollar(89);
calcDollar(123);
calcDollar(288);
calcDollar(42);
calcDollar(421);
calcDollar(458);
calcDollar(42);
calcDollar(5);
calcDollar(8);
calcDollar(3);


/* OUTPUT */
/*
The total number of houses that gave candies - 1
The total percentage of houses that gave Dollar Bills - 50%
The total number of houses that gave candies - 7
The total percentage of houses that gave Dollar Bills - 20%
The total number of houses that gave candies - 97
The total percentage of houses that gave Dollar Bills - 2%
The total number of houses that gave candies - 42
The total percentage of houses that gave Dollar Bills - 4%
The total number of houses that gave candies - 86
The total percentage of houses that gave Dollar Bills - 2%
The total number of houses that gave candies - 120
The total percentage of houses that gave Dollar Bills - 2%
The total number of houses that gave candies - 285
The total percentage of houses that gave Dollar Bills - 1%
The total number of houses that gave candies - 39
The total percentage of houses that gave Dollar Bills - 5%
The total number of houses that gave candies - 418
The total percentage of houses that gave Dollar Bills - 0%
The total number of houses that gave candies - 455
The total percentage of houses that gave Dollar Bills - 0%
The total number of houses that gave candies - 39
The total percentage of houses that gave Dollar Bills - 5%
The total number of houses that gave candies - 2
The total percentage of houses that gave Dollar Bills - 40%
The total number of houses that gave candies - 5
The total percentage of houses that gave Dollar Bills - 25%
The total number of houses that gave candies - 66.6%
*/
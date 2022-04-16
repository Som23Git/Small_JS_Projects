/* 

You need to calculate the sum of all the multiples of 3 or 5 below a given number.

Task: 
Given an integer number, output the sum of all the multiples of 3 and 5 below that number. 
If a number is a multiple of both, 3 and 5, it should appear in the sum only once.

Input Format: 
An integer.

Output Format: 
An integer, representing the sum of all the multiples of 3 and 5 below the given input.

Sample Input: 
10

Sample Output:
23

Explanation: 
The numbers below 10 that are multiples of 3 or 5 are 3, 5, 6 and 9.
The sum of these numbers is 3+5+6+9=23

*/

multiples = (x) => {
    var sum = 0;
    var targetPtr = x;
    // var myArray = new Array();
    const object = {
        myArray: [],
    }
    for(let i = 1; i<targetPtr; i++){
        if((i%3 == 0) || (i%5 ==0)){
            // console.log(i);
            myArray = object.myArray.push(i);
            sum = sum + i;
        }
    }
    return (console.log("Total sum of multiples: " + sum + " = " + object.myArray));
}

multiples(10);
multiples(23);
multiples(11);
multiples(12);
multiples(14);

/* OUTPUT */
/*

Total sum of multiples: 23 = 3,5,6,9
Total sum of multiples: 119 = 3,5,6,9,10,12,15,18,20,21
Total sum of multiples: 33 = 3,5,6,9,10
Total sum of multiples: 33 = 3,5,6,9,10
Total sum of multiples: 45 = 3,5,6,9,10,12

*/
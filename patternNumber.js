/* Print the pattern

You have given a number N. You need to print the pattern for the given value of N.
for N = 2 the pattern will be 
2 2 1 1
2 1
for N = 3 the pattern will be 
3 3 3 2 2 2 1 1 1
3 3 2 2 1 1
3 2 1

Example 1:

Input: 2
Output:
2 2 1 1 $2 1 $

Example 2:

Input: 3
Output:
3 3 3 2 2 2 1 1 1 $3 3 2 2 1 1 $3 2 1 $
 

Your Task:
Since this is a function problem, you don't need to worry about the testcases. 
Your task is to complete the function printPat which takes one argument 'N' denoting the length of the pattern.
Note : Instead of printing new line print a "$" without quotes.

*/

var n = 3;
var temp = n;
var k = n;
for(let j = n; j > 0; j--){
    for(let i=1; i <= n*k; i++){
        if(i%k === 0){
            // console.log("temp changed" + temp);
            console.log(temp);
            temp--;
        }else{
            console.log(temp);
        }
    }console.log("$");
i = 0;
k--;
temp = n;
}


/* OUTPUT */
/*
3
3
3
2
2
2
1
1
1
$
3
3
2
2
1
1
$
3
2
1
$
*/
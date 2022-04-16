/* 

Task:
Count the number of ones in the binary representation of a given integer.

Input Format:
An integer.

Output Format: 
An integer representing the count of ones in the binary representation of the input.

Sample Input:
9

Sample Output:
2

Explanation: 
The binary representation of 9 is 1001, which includes 2 ones.

*/

binaryConverter = (a) => {
    var x = a;
    var sum = 0;
    for(let i=0; i < a && x != 0; i++){
        y = Math.ceil(x%2);
        console.log("y:" + y);
        sum = sum + y;
        x = Math.floor(x/2);
        console.log("x:" + x);
    }
    console.log(sum + " Sum ");

}

binaryConverter(1);
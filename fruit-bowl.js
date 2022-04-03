/* ---------------------------------------------------------------------------------------------------------------------

You have a bowl on your counter with an even number of pieces of fruit in it. Half of them are bananas, 
and the other half are apples. You need 3 apples to make a pie. 

Task 
Your task is to evaluate the total number of pies that you can make with the apples that are 
in your bowl given to total amount of fruit in the bowl.

Input Format
An integer that represents the total amount of fruit in the bowl.

Output Format
An integer representing the total number of whole apple pies that you can make.

Sample Input
26 

Sample Output 
4

Explanation 
If you have 26 pieces of fruit, you have 13 apples, which makes 4 pies, and leaves one apple left over.
--------------------------------------------------------------------------------------------------------------------- */

calcApple = (x) => {
    var a = x/2;
    b = Math.round(a/3);        // The integer 3 is the number of apples required to make a pie
    console.log(`The total pies that we can make with ${x} fruits i.e. ${a} apple(s) and ${a} banana(s) is ${b}`);
}

calcApple(26);
calcApple(100);
calcApple(33);
calcApple(23);
calcApple(6);
calcApple(29);
calcApple(14);
calcApple(27);
calcApple(21);
calcApple(2);

/* OUTPUT */
/* 
The total pies that we can make with 26 fruits i.e. 13 apple(s) and 13 banana(s) is 4
The total pies that we can make with 100 fruits i.e. 50 apple(s) and 50 banana(s) is 17
The total pies that we can make with 33 fruits i.e. 16.5 apple(s) and 16.5 banana(s) is 6
The total pies that we can make with 23 fruits i.e. 11.5 apple(s) and 11.5 banana(s) is 4
The total pies that we can make with 6 fruits i.e. 3 apple(s) and 3 banana(s) is 1
The total pies that we can make with 29 fruits i.e. 14.5 apple(s) and 14.5 banana(s) is 5
The total pies that we can make with 14 fruits i.e. 7 apple(s) and 7 banana(s) is 2
The total pies that we can make with 27 fruits i.e. 13.5 apple(s) and 13.5 banana(s) is 5
The total pies that we can make with 21 fruits i.e. 10.5 apple(s) and 10.5 banana(s) is 4
The total pies that we can make with 2 fruits i.e. 1 apple(s) and 1 banana(s) is 0
*/
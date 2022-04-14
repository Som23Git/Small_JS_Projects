/* 

As headmaster of the post office, sometimes people write zip codes that don't exist or zip codes that are not valid.  
You are tasked with making a system to check if the inputted zip code is a valid zip code. 

Task:
Write a program that takes in a string representing a zip code. Output true or false if it is a valid zip code or not. 
A valid zip code is only numbers, must be 5 characters in length, and contain no spaces.

Input Format: 
A string containing a zip code.

Output Format: 
A string: true is the input is a valid zip code, or false, if it is not. 

Sample Input: 
752f78

Sample Output: 
false

Explanation: 
A valid zip code contains 5 digits, and no letters or spaces.
The input is 6 characters long and contains letters, making it an invalid zip code.

*/

/* Checks 

Length - 5 characters
No letters, or spaces

*/

zipValidate = (x) => {
    var getNumber = x;
    var storeValue = isNaN(x);
    var counter = 0;
    while (x > 0) {
        x = (x - (x % 10)) / 10;
        // console.log(x);
        counter = counter + 1;
        // console.log("Counter : " + counter);
    }
    if(storeValue == false && counter == 5){
        console.log(`VALID ZIPCODE with ${counter} digits and all numbers - ${getNumber}`);
        }else{
        console.log(`NOT VALID ZIPCODE, kindly check the ${getNumber} code`);
    }
}


zipValidate(12345);
zipValidate("12Z45");
zipValidate(2345);

/* OUTPUT */

/*

VALID ZIPCODE with 5 digits and all numbers - 12345
NOT VALID ZIPCODE, kindly check the 12Z45 code
NOT VALID ZIPCODE, kindly check the 2345 code

*/

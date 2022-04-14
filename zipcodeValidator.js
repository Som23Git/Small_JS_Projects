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
    var checkType = x;
    // var myArray = new Array();
    // myArray = x;
    // myArray = myArray.split("");
    // for(let i = 0; i<myArray.length;i++){
    //     console.log(myArray.length);
        
    //     if(myArray.length == 5 && typeof myArray[i] == "number"){
    //         console.log(`true - ${myArray[i]}`);
    //     }else{
    //         console.log(`false - ${myArray[i]}`);
    //     }
    if(isNaN(checkType) == true){
        console.log(`VALID ZIPCODE`);
    }else{
        console.log(`NOT A VALID ZIPCODE`);
    }
}




zipValidate(12345);

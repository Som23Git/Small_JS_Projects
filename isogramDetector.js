/*

An isogram is a word that has no repeating letters, whether they are consecutive or non-consecutive.  
Your job is to find a way to detect if a word is an isogram.

Task: Write a program that takes in a string as input, detects if the string is an isogram and outputs true or false based on the result.
 
Input Format: 
A string containing one word.

Output Format: 
A string: true or false.

Sample Input: 
turbulence

Sample Output: 
false

Explanation: 
The word turbulence has multiple "u" and "e" in it, which would mean it is not an isogram.

*/

isogramDetector = (y) => {
    var myArray = new Array();
    myArray = y;
    myArray = myArray.split("");
    // console.log(myArray);
    // console.log(myArray.length);
    let x = myArray.length;
    for(let i = 0; i<myArray.length-1; i++){
        var counter = 0;
        for(let j = 0; j<(x-1);j++){
            let initialVal = myArray[j];
            let comparingVal = myArray[j+1];
            if(comparingVal !== initialVal){
                // console.log(comparingVal + ":" + initialVal);
                temp = comparingVal;
                myArray[j] = temp;
                myArray[j+1] = initialVal;
            }else{
                console.log(`Recurring Value Found in ${y}`);
                counter = counter + 1;
                return console.log(counter);

            }
        }
    }
    (counter == 0) ? console.log(`There is no Recurring Values in ${y}`) : null;
}

isogramDetector("turbulence");
isogramDetector("AXIOS");
isogramDetector("Balcony");
isogramDetector("Malayalam");
isogramDetector("Youth");

/* OUTPUT */
/*

Recurring Value Found in turbulence
1
There is no Recurring Values in AXIOS
There is no Recurring Values in Balcony
Recurring Value Found in Malayalam
1
There is no Recurring Values in Youth

*/

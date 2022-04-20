/* ---------------------------------------------------------------------------------------------------------------------

Medium - Level - 01
You have two friends who are speaking Pig Latin to each other! Pig Latin is the same words in the same order except 
that you take the first letter of each word and put it on the end, then you add 'ay' to the end of that. ("road" = "oadray") 

Task
Your task is to take a sentence in English and turn it into the same sentence in Pig Latin! 

Input Format 
A string of the sentence in English that you need to translate into Pig Latin. (no punctuation or capitalization)

Output Format 
A string of the same sentence in Pig Latin.

Sample Input 
"nevermind youve got them"

Sample Output 
"evermindnay ouveyay otgay hemtay"

Explanation
The output should be the original sentence with each word changed so that they 
first letter is at the end and then -ay is added after that.

--------------------------------------------------------------------------------------------------------------------- */

pigLatinOne = (x) => {
    var myArray = new Array();
    myArray = x;
    myArray = myArray.split("");
    // console.log(myArray);                            // [ 'H', 'o', 'w', 'd', 'y' ]
    myArray[myArray.length] = myArray[0];
    myArray.shift();
    // console.log(myArray);                            // [ 'o', 'w', 'd', 'y', 'H' ]
    myArray = myArray.join("");
    console.log(myArray + "ay");                     // owdyHay
}

pigLatinOne("Howdy");

console.log("----------")

pigLatinMulti = (x) => {
    var sum = "";
    var myArray = new Array();
    myArray = x;
    myArray = myArray.split(" ");
    // console.log(myArray);                                [ 'nevermind', 'youve', 'got', 'them' ]                   
    for(i = 0; i < myArray.length; i++){
        var tempArray = new Array();
        tempArray = myArray[i];
        tempArray = tempArray.split("");
        // console.log(tempArray);                          ['n', 'e', 'v','e', 'r', 'm','i', 'n', 'd']                        
        tempArray[tempArray.length] = tempArray[0];
        tempArray.shift();
        // console.log(tempArray);                          ['e', 'v','e', 'r', 'm','i', 'n', 'd', 'n']           
        tempArray = tempArray.join("");
        sum = sum + (tempArray + "ay ");
    }
    console.log(sum);
}

pigLatinMulti("nevermind youve got them");
pigLatinMulti("how are you?");
pigLatinMulti("where is your planet");
pigLatinMulti("do not worry");

/* OUTPUT */
/*

Single Array Output

owdyHay
----------

Multi-Array Output

evermindnay ouveyay otgay hemtay 
owhay reaay ou?yay 
hereway siay ouryay lanetpay 
oday otnay orryway 

*/
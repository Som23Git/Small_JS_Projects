/*

You meet a group of aliens, and their language is just like English except that they say every word backwards. 
How will you learn to communicate with them?

Task: 
Take a word in English that you would like to say, and turn it into language that these aliens will understand.

Input Format: 
A string of a word in English.

Output Format: 
A string of the reversed word that represents the original word translated into alien language.

Sample Input: 
howdy

Sample Output: 
ydwoh

Explanation: 
If you flip howdy backwards you get ydwoh.

*/

alienLanguage = (x) => {
    var myArray = new Array();
    var temp = new Array();
    var myArray = x;
    console.log(myArray.length);
    var x = myArray.length;
    for(i = x; i>0 ; i--){
        temp[x-1] =  myArray[myArray.length - i];
        x = x - 1;
    }
    var joinedArray = temp.join("");
    console.log(joinedArray);
}


alienLanguage("howdy");
alienLanguage("how");
alienLanguage("are");
alienLanguage("you?");
alienLanguage("Alien");

/* OUTPUT */
/*

5
ydwoh
3
woh
3
era
4
?uoy
5
neilA

*/
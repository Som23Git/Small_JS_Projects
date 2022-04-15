/* 

You are in an English class, your teacher tells the class that vowels are the glue that hold words and sentences together. 
They want to make sure you understand the importance of vowels in a sentence.  
You are given example sentences and are to give a total amount of vowels that are in each sentence.

Task: 
Write a program that takes in a string as input, counts and outputs the number of vowels (A, E, I, O, U).

Input Format: 
A string (letters can be both uppercase or lower case).

Output Format: 
A number which represents the total number of vowels in the string.

Sample Input: 
this is a sentence

Sample Output: 
6

Explanation:  
There are 6 vowels in the sentence: this is a sentence.

*/

vowelCounter = (x) => {
    var myArray = new Array();
    myArray = x;
    // console.log(myArray);
    myArray = myArray.toLocaleLowerCase();
    // console.log(myArray);
    myArray = myArray.split("");
    // console.log(myArray);
    // console.log(myArray.length);
    let k = 0
    for(let i = 0; i< myArray.length;i++){
        // console.log(myArray[i]);
        switch(myArray[i]){
            case 'a':
                k++;
                break;
            case 'e':
                k++;
                break;
            case 'i':
                k++;
                break;
            case 'o':
                k++;
                break;
            case 'u':
                k++;
                break;
            default:
                break;
        }
    }
    console.log(k + ' : Total Vowels Counts in the Input');
}

vowelCounter("this is a sentence");
vowelCounter("How are you");
vowelCounter("Can I know your name?");
vowelCounter("What can I do for you?");
vowelCounter("JavaScript is awesome");

/* OUTPUT */
/*

6 : Total Vowels Count in the Input
5 : Total Vowels Count in the Input
7 : Total Vowels Count in the Input
7 : Total Vowels Count in the Input
8 : Total Vowels Count in the Input

*/


/* Given a String , print the reverse of the string as output. */

function stringReversal(inputVal){
    var myArray = new Array();
    var temp = new Array();
    var myArray = inputVal;
    console.log(myArray.length);
    var x = myArray.length;
    for(i = x; i>0 ; i--){
        temp[x-1] =  myArray[myArray.length - i];
        x = x - 1;
    }
    console.log(temp);
}

stringReversal("SOMZ");
stringReversal("GeeksforGeeks");
stringReversal("Twitter");
stringReversal("Facebook");
stringReversal("Malayalam");

/* OUTPUT */

/* 

4
[ 'Z', 'M', 'O', 'S' ]
13
[
  's', 'k', 'e', 'e',
  'G', 'r', 'o', 'f',
  's', 'k', 'e', 'e',
  'G'
]
7
[
  'r', 'e', 't',
  't', 'i', 'w',
  'T'
]
8
[
  'k', 'o', 'o',
  'b', 'e', 'c',
  'a', 'F'
]
9
[
  'm', 'a', 'l',
  'a', 'y', 'a',
  'l', 'a', 'M'
]

*/
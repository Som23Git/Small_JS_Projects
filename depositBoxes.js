/* 

Medium Level - 02 Problem
Safety Deposit Boxes

You are robbing a bank, but you’re not taking everything. You are looking for a specific item in the safety deposit 
boxes and you are going to drill into each one in order to find your item. Once you find your item you can make your escape, 
but how long will it take you to get to that item?

Task
Determine the amount of time it will take you to find the item you are looking for if it takes you 5 minutes 
to drill into each box.

Input Format 
A string that represent the items in each box that will be drilled in order (items are separated by a comma), 
and secondly, a string of which item you are looking for.

Output Format 
An integer of the amount of time it will take for you to find your item.

Sample Input
'gold,diamonds,documents,Declaration of Independence,keys'
'Declaration of Independence'

Sample Output 
20

Explanation
It will take you 20 minutes before you drill into the 4th box, which contains your item, the Declaration of Independence.

*/

depositBoxes = (x,y) => {
    var myArray = new Array();
    myArray = x;
    myArray = myArray.split(",");
    console.log(myArray); 
    var findItem = y;
    for(let i = 1; i<=myArray.length; i++){
    if(myArray[i] == findItem){
        i++;
        return console.log(`${y} - Item found within ${i * 5} mins`)
    }
}

}

depositBoxes('gold,diamonds,documents,Declaration of Independence,keys', 'Declaration of Independence');
depositBoxes('gold,diamonds,documents,Declaration of Independence,keys', 'keys');
depositBoxes('gold,diamonds,documents,Declaration of Independence,keys', 'gold');
depositBoxes('gold,diamonds,documents,Declaration of Independence,keys', 'diamonds');

/* OUTPUT */
/* 

[
  'gold',
  'diamonds',
  'documents',
  'Declaration of Independence',
  'keys'
]

Declaration of Independence - Item found within 20 mins

[
  'gold',
  'diamonds',
  'documents',
  'Declaration of Independence',
  'keys'
]
keys - Item found within 25 mins

[
  'gold',
  'diamonds',
  'documents',
  'Declaration of Independence',
  'keys'
]
diamonds - Item found within 10 mins

*/
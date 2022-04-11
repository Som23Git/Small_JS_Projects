/* Find the maximum value or sort the values in an array using BubbleSort */

sortTheArrayDesc = (x) => {
    let myArray = new Array();
    myArray = x;
    // console.log(myArray.length);
    for(let i = 0; i<myArray.length-1; i++){
        for(let j = 0; j<myArray.length;j++){
            let initialVal = myArray[j]
            let comparingVal = myArray[j+1];
            if(initialVal < comparingVal){
                temp = comparingVal;
                myArray[j] = temp;
                myArray[j+1] = initialVal;
                // console.log(comparingVal + ":" + initialVal);
            }
        }
    }
    console.log(myArray);
}

sortTheArrayDesc([12,34,56,11,10]);
sortTheArrayDesc([120,342,56,11,110]);
sortTheArrayDesc([122,34,560,11,11]);

console.log("------  NEXT  --------");

sortTheArrayAsc = (y) => {
    let myArray = new Array();
    myArray = y;
    // console.log(myArray.length);
    for(let i = 0; i<myArray.length-1; i++){
        for(let j = 0; j<myArray.length;j++){
            let initialVal = myArray[j]
            let comparingVal = myArray[j+1];
            if(initialVal > comparingVal){
                temp = comparingVal;
                myArray[j] = temp;
                myArray[j+1] = initialVal;
                // console.log(comparingVal + ":" + initialVal);
            }
        }
    }
    console.log(myArray);
}

sortTheArrayAsc([12,34,56,11,10]);
sortTheArrayAsc([120,342,56,11,110]);
sortTheArrayAsc([122,34,560,11,11]);

/* OUTPUT */
/* 

[ 56, 34, 12, 11, 10 ]
[ 342, 120, 110, 56, 11 ]
[ 560, 122, 34, 11, 11 ]
------  NEXT  --------
[ 10, 11, 12, 34, 56 ]
[ 11, 56, 110, 120, 342 ]
[ 11, 11, 34, 122, 560 ]

*/

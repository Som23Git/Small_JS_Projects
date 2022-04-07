/* ---------------------------------------------------------------------------------------------------------------------

You are trying to determine which of two apartments has a larger balcony. Both balconies are rectangles, 
and you have the length and width, but you need the area.

Task 
Evaluate the area of two different balconies and determine which one is bigger.

Input Format 
Your inputs are two strings where the measurements for height and width are separated by a comma. 
The first one represents apartment A, the second represents apartment B.

Output Format: 
A string that says whether apartment A or apartment B has a larger balcony.

Sample Input 
'5,5'
'2,10'

Sample Output 
Apartment A

Explanation 
Since the area of apartment A's balcony is 25 and the area of apartment B's balcony is 20, Apartment A is the correct answer.

--------------------------------------------------------------------------------------------------------------------- */

largeBalconies = (x,y) => {
    var balconyX = x;
    var myArrayX = balconyX.split(",");
    console.log(myArrayX);
    var balconyY = y;
    var myArrayY = balconyY.split(",");
    let areaX = 1;
    let areaY = 1;
    console.log(myArrayY);
    for(let i=0; i<myArrayX.length; i++){
        areaX = areaX * myArrayX[i];
        areaY = areaY * myArrayY[i];
    }
    console.log(`The total area of Apartment A Balcony is : ${areaX} sq. ft`)
    console.log(`The total area of Apartment B Balcony is : ${areaY} sq. ft`)
    if(areaX > areaY){
        console.log(`The largest balcony is Apartment A : ${areaX} sq. ft`);
    } else if(areaX < areaY){
        console.log(`The largest balcony is Apartent B : ${areaY} sq. ft`);
    }else{
        console.log(`Both the apartment balconies A & B are equal : ${areaY} sq. ft`);
    }
}

largeBalconies('5,5' /*Apartment A*/,'2,10'/*Apartment B*/);
largeBalconies('3,2' /*Apartment A*/,'2,10'/*Apartment B*/);
largeBalconies('5,5' /*Apartment A*/,'5,5'/*Apartment B*/);
largeBalconies('10,5' /*Apartment A*/,'2,10'/*Apartment B*/);
largeBalconies('10,5' /*Apartment A*/,'23,10'/*Apartment B*/);


/* OUTPUT */
/* 

[ '5', '5' ]
[ '2', '10' ]
The total area of Apartment A Balcony is : 25 sq. ft
The total area of Apartment B Balcony is : 20 sq. ft
The largest balcony is Apartment A : 25 sq. ft
[ '3', '2' ]
[ '2', '10' ]
The total area of Apartment A Balcony is : 6 sq. ft
The total area of Apartment B Balcony is : 20 sq. ft
The largest balcony is Apartent B : 20 sq. ft
[ '5', '5' ]
[ '5', '5' ]
The total area of Apartment A Balcony is : 25 sq. ft
The total area of Apartment B Balcony is : 25 sq. ft
Both the apartment balconies A & B are equal : 25 sq. ft
[ '10', '5' ]
[ '2', '10' ]
The total area of Apartment A Balcony is : 50 sq. ft
The total area of Apartment B Balcony is : 20 sq. ft
The largest balcony is Apartment A : 50 sq. ft
[ '10', '5' ]
[ '23', '10' ]
The total area of Apartment A Balcony is : 50 sq. ft
The total area of Apartment B Balcony is : 230 sq. ft
The largest balcony is Apartent B : 230 sq. ft

*/
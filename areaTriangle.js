//Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, and 7.


//Declaring Variables for the triangle based on the sides
var ab = 5;
var bc = 6;
var ca = 7;
areaTri(ab,bc,ca);

//Get Parameters as an input, we can get the same using input fields and parse it to the areaTri Function.

function areaTri(x,y,z) {
    var u = x * y * z;
    console.log("The area of the triangle is : "+ u);
}

/* Output */

/* The area of the triangle is : 210 */
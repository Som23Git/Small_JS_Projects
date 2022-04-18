//This is just a representation of how to call objects using Call Method, Apply Method, and the Bind Method.

const person1 = {
    name: "Somesh",
    age: 25,
};

const person2 = {
    name: "Tsu-haoung",
    age: 32,
};

function showDetails(city,state){
    console.log(`I'm ${this.name}, ${this.age} years old. I live in ${city}, ${state}`);
};

//1. Call Method

showDetails.call(person1, "Chennai", "TamilNadu");

//2. Apply Method

showDetails.apply(person2, ["Chennai", "TamilNadu"]);

//3. Bind Method

let showDetailsBind = showDetails.bind(person1, "Chennai","TamilNadu");
showDetailsBind();


/* OUTPUT */

/* 

I'm Somesh, 25 years old. I live in Chennai, TamilNadu
I'm Tsu-haoung, 32 years old. I live in Chennai, TamilNadu
I'm Somesh, 25 years old. I live in Chennai, TamilNadu


*/


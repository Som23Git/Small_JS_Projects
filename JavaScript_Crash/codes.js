// alert('hello world');

/* --------------------------------------------------------------------------*/
//Console properties
/* --------------------------------------------------------------------------*/

console.log("This is warn");
console.info("This is just information log");
console.warn("this is warning");
console.error("This is error");

/* --------------------------------------------------------------------------*/
// var, let, and const
/* --------------------------------------------------------------------------*/
// Const and Let - Block level scope, you can define this within a function/closure.
let currentAge = 30;
currentAge = 31;

console.log(currentAge);

// Var -> It is globally scoped so even if you define within a function, it is accessible outside.
function varFunc(){
    x = 100;
    console.log(x);
}
var x = 10;
varFunc();
console.log(x);

/* --------------------------------------------------------------------------*/
// Datatype -> String, Numbers, Boolean, null, undefined, symbol.
/* --------------------------------------------------------------------------*/

const name = "John";
const isAge = 30;
const isCool = true;
const rating = 10.30;
const isX = null;
const isY = undefined;
const stringValue = "Hello World!";

console.log(typeof name);
console.log(typeof isAge);
console.log(typeof rating);
console.log(typeof isX); // It will show as Object but this is Not right
console.log(typeof isY);

/* --------------------------------------------------------------------------*/
// Concatenation
/* --------------------------------------------------------------------------*/

console.log(name + " is my friend and I'm " + isAge ); // John is my friend and I'm 30

// Easiest to use Template strings to replace concatenation

const hello = `my name is ${name} and I'm ${isAge}`; // my name is John and I'm 30
console.log(hello);

// Let's say we wanted to get the length of a string -> Using built-in methods in JavaScript.
// Methods are nothing but the function that is associated with an object.

console.log(stringValue.toUpperCase()); // HELLO WORLD!
console.log(stringValue.toLowerCase()); // hello world!
console.log(stringValue.substring(0,5)); // Hello
console.log(stringValue.toUpperCase().substring(0,9)); // HELLO WOR

// To split a string to Array
console.log(stringValue.split(' ')); // ['Hello', 'World!']
console.log(stringValue.split('')); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']

/* --------------------------------------------------------------------------*/
// Arrays - variables that hold multiple values
/* --------------------------------------------------------------------------*/

// You need to use Array Constructor and define it. 
// JavaScript Array does not matter whether it is a Number datatype or string

const numbers = new Array(1,2,3,4,5);
console.log(numbers); // [1, 2, 3, 4, 5]

let fruits = new Array();
fruits = ["technology", "code", "Javascript", "testing","array", 10, 20, 50];
console.log(fruits); // ['technology', 'code', 'Javascript', 'testing', 'array', 10, 20, 50]

// Fetching from the array using the index values
console.log(fruits[4]); // array

// If you wanted to GET the index of a specific value that you know
// If the value is not present, it will throw a value "-1"

console.log(fruits.indexOf("Javascript")); // 2

// Using push() method to push a value to the end of the array

fruits.push("managoes");
console.log(fruits); // ['technology', 'code', 'Javascript', 'testing', 'array', 10, 20, 50, 'managoes']

// Using unshift() method to add a value to the starting of the array

fruits.unshift("Grapes");
console.log(fruits); // ['Grapes', 'technology', 'code', 'Javascript', 'testing', 'array', 10, 20, 50, 'managoes']

// Using pop() method to removes the last element from the array

fruits.pop();
console.log(fruits); ['Grapes', 'technology', 'code', 'Javascript', 'testing', 'array', 10, 20, 50]


// Check to see something is an Array()?

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(stringValue)); // false

/* --------------------------------------------------------------------------*/
// Object Literals -> It is just a key value pairs
// declaring a object called Person with the key value pairs
/* --------------------------------------------------------------------------*/

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["playing","movies","reading"],
    address: {
        street: "5th main st",
        city: "New York",
        state: "New York"
    }

}



console.log(person); // {firstName: 'John', lastName: 'Doe', age: 30, hobbies: Array(3), address: {…}}
console.log(person.address); // {street: '5th main st', city: 'New York', state: 'New York'}
console.log(person.firstName, person.age, person.address); // John 30 {street: '5th main st', city: 'New York', state: 'New York'}
console.log(person.hobbies[2]); // reading
console.log(person.address.city); // New York

// You can also "pull out" the values using the De-Structuring, this is a part of advanced ES6
// For object within an object like the value "address"

const { firstName, lastName, age, address: {street, city, state} } = person;
console.log(firstName); // John
console.log(street); // 5th main st

// To add a property or key value within an object, note you would need to use the equal operator ( = ) 

person.email = "johndoe@gmail.com";
console.log(person); // {firstName: 'John', lastName: 'Doe', age: 30, hobbies: Array(3), address: {…}, email: 'johndoe@gmail.com' }

// Arrays of Objects

const todos = [
    {
        id: 1,
        text: 'This is a one',
        isCompleted: true
    },
    {
        id: 2,
        text: 'This is a two',
        isCompleted: false
    },
    {
        id: 3,
        text: 'This is a three',
        isCompleted: true
    },
    {
        id: 4,
        text: 'This is a four',
        isCompleted: false
    }
];

console.log(todos);

// [IMPORTANT] 
// Convert array of objects to JSON directly so you can send this data to the SERVERS
// Notice the text string ' '(single quotes) had been changed to " " (double quotes)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // [{"id":1,"text":"This is a one","isCompleted":true},{"id":2,"text":"This is a two","isCompleted":false},{"id":3,"text":"This is a three","isCompleted":true},{"id":4,"text":"This is a four","isCompleted":false}]

/* --------------------------------------------------------------------------*/
// Loops
// For Loops
/* --------------------------------------------------------------------------*/

//Simple for() loop

for(let i=0;i<10;i++){
    console.log(i);
}

/* 

OUTPUT

0
1
2
3
4
5
6
7
8
9

*/

//Simple While loop

let i = 1;
while(i<5){
    console.log(i);
    i++; // this is important otherwise the while loop will stuck/hang in the same condition eventually you'll end up in OOM(out of memory)
}

/* 

OUTPUT

0
1
2
3
4

*/

// Loop through Arrays

console.log(`The length of the todos array - ${todos.length}`); 
// Output --> The length of the todos array - 4

for(i=0;i<todos.length;i++){
    console.log(i);
}

/* 

OUTPUT

0
1
2
3

*/

// Log the todos.text -> the text within the todos - Not Recommended

for(i=0;i<todos.length;i++){
    console.log(todos[i].text);
}

/* 

OUTPUT

This is a one
This is a two
This is a three
This is a four

*/


// This is the recommended way of looping all the objects with an Array
// todo -> just a random variable, we can use even x or y or anythingToDo
// todos -> It is the array

for(let anythingTodo of todos){
    console.log(anythingTodo.text);
}

/* --------------------------------------------------------------------------*/
// The High Order Array needs a callback function
// forEach -> which just loops through the arrays
// map -> which will allow us to create a new array from an array
// filter -> which will allow us to create a new array based on a condition
/* --------------------------------------------------------------------------*/

// forEach vanilla JS function

todos.forEach(function(todo){
    console.log(todo.text);
});

// forEach arrow function

todos.forEach = (x) => {
    console.log(x.id);
};

// map function -> This will return an array of the texts alone and will map it to an array named "todoText"

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText); // ['This is a one', 'This is a two', 'This is a three', 'This is a four']

// filter function

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted); // [{'This is a one'}, {'This is a three'}]

// You can use map() and filter together to filter and create a new array

const todoFilterPlusMap = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoFilterPlusMap); // ['This is a one', 'This is a three']

/*----------------
    Conditionals 
-----------------*/


//If Statement

const isA = 10;
const isB = "10";
const isC = 12;

// '==' using double equal to 
if(isA == 10 && isB == 10){
    console.log('A is 10 & B is 10' );
}

// '===' using triple equal to 

if(isA === 10 && isB === 10){
    console.log('A is 10 & B is 10');
} else{
    console.log('No, something is Not equal to 10');
}

// Else if

if(isA == 10 && isC > 12 ){
    console.log('A is 10 & B is 10' );
}else if(isB == 10){
    console.log('B is 10' );
}else {
    console.log('No, something is Not equal to 10' );
}

// If (Ternary Operator)

const color = (isC > 10) ? "red" : "yellow";
console.log(color);

// Switch Statement

switch(color){
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is NOT Red or Blue');
        break;
};

/* --------------------------------------------------------------------------*/
// Functions
/* --------------------------------------------------------------------------*/

//Sum the two numbers using function()

function sum(num1,num2){
    sum = num1+num2;
    console.log(sum); // 3
    return sum;
};

sum(1,2);

//Sum the two numbers using function() without passing any arguments in the function(), you can use any default integers

function sum1(num1,num2){
    sum = num1+num2;
    console.log(sum); // NaN
    return sum;
};

sum1();

// Assign a default integers to avoid prompting "NaN" -> Not a Number

function sum2(num1 = 2,num2 = 5){
    sum = num1+num2;
    console.log(sum); // 7
    return sum;
};

sum2(); // Eventhough there is no arguments passed within the function call, it had produced the result using the default integers or values assigned to them.

// Arrow function
// Always, the function variable will be assigned to a datatype "const"

const addNums = (num1,num2) => {
    sum = num1+num2;
    console.log(sum); // 26
    return sum;
}

addNums(3,23);


/* --------------------------------------------------------------------------*/
// Constructor -> It is used to create an object with the existing properties.
// Good practice to name constructor functions with an upper-case first letter.
// Objects of the same type and properties are created by calling the constructor function with the new keyword
// @drawbacks Refer to the drawbacks below
/* --------------------------------------------------------------------------*/

function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dobString = dob; // Takes Date as a String Value
    this.dobDate = new Date(dob); // Converts the Date String Value to the actual Date value. new Date() it is a built-in constructor.
    this.getBirthYear = function (){
        return this.dobDate.getFullYear(); // Note: the getFullYear() method will only work with the Date object i.e. dobDate otherwise it will not recognize the dobString
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

// Try adding a object using the new keyword i.e. "Instantiate Object"

const person1 = new Person('john','manikkam','03-06-1980');
console.log(person1); // Person {firstName: 'john', lastName: 'manikkam', dobString: '03-06-1980', dobDate: Thu Mar 06 1980 00:00:00 GMT+0530 (India Standard Time)}

const person2 = new Person('Raja','vikraman','03-06-1996');
console.log(person2); // Person {firstName: 'Raja', lastName: 'vikraman', dobString: '03-06-1996', dobDate: Wed Mar 06 1996 00:00:00 GMT+0530 (India Standard Time)}
console.log(person2.dobDate.getFullYear()); // 1996

console.log(person2.getBirthYear()); // 1996
console.log(person2.getFullName()); // Raja vikraman

console.log(person1); 

/* 

// @drawbacks 

When `console.log(person1)` -> Below is the output but you can see the functions getBirthYear() and getFullName() within it which is NOT a cleanest way to write CONSTRUCTORS, you push those function() into the prototype object.

Person {firstName: 'john', lastName: 'manikkam', dobString: '03-06-1980', dobDate: Thu Mar 06 1980 00:00:00 GMT+0530 (India Standard Time), getBirthYear: ƒ, …}
dobDate: Thu Mar 06 1980 00:00:00 GMT+0530 (India Standard Time) {}
dobString: "03-06-1980"
firstName: "john"
getBirthYear: ƒ ()
getFullName: ƒ ()

*/

// The cleanest way to write a CONSTRUCTOR, instead of adding those functions within the CONSTRUCTOR, we can add it in the Prototype object.
// Recommended


function PersonConstructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
};

PersonConstructor.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
};

PersonConstructor.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
};

const person3 = new PersonConstructor('john','manikkam','03-06-1980');
console.log(person3);

/*

PersonConstructor {firstName: 'john', lastName: 'manikkam', dob: '03-06-1980'}
dob:"03-06-1980"
firstName:"john"
lastName: "manikkam"
[[Prototype]]: Object
getBirthYear:ƒ ()
getFullName:ƒ ()

*/

// In ES6, i.e. ES2015 they have introduced "Classes" but it does the same thing as the above code
// Classes - Similar to Constructor

class PersonClass{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    //Instead of writing as .prototype syntax for methods() or functions()
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person4 = new PersonClass('john','manikkam','03-06-1980');
console.log(person4);

/*

PersonClass {firstName: 'john', lastName: 'manikkam', dob: '03-06-1980'}
dob:"03-06-1980"
firstName:"john"
lastName: "manikkam"
[[Prototype]]: Object
constructor: class PersonClass
getBirthYear:ƒ ()
getFullName:ƒ ()

*/








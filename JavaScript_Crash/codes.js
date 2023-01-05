// alert('hello world');

console.log("This is warn");
console.info("This is just information log");
console.warn("this is warning");
console.error("This is error");


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

// Datatype -> String, Numbers, Boolean, null, undefined, symbol.

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

// Concatenation

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

// Arrays - variables that hold multiple values


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

// Object Literals -> It is just a key value pairs
// declaring a object called Person with the key value pairs

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
// Convert to JSON directly so you can send this data to the SERVERS
// Notice the text string ' '(single quotes) had been changed to " " (double quotes)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // [{"id":1,"text":"This is a one","isCompleted":true},{"id":2,"text":"This is a two","isCompleted":false},{"id":3,"text":"This is a three","isCompleted":true},{"id":4,"text":"This is a four","isCompleted":false}]


// Loops
// For Loops

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

// The High Order Array needs a callback function
// forEach -> which just loops through the arrays
// map -> which will allow us to create a new array from an array
// filter -> which will allow us to create a new array based on a condition

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














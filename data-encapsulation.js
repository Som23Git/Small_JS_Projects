//Closures

// Concept One where we use var
function outer(){
    var x = 10;
    return function inner(){
        console.log(x);
    }
}

x = 12;         //This will be skipped by JS Engine because as per closure, the variable within the closure has high priority compared to the Global Scope.
outer()();

// let allows you to declare variables that are limited to the scope of a block statement, 
// or expression on which it is used, unlike the var keyword, 
// which declares a variable globally, or locally to an entire function regardless of block scope.


// Concept Two where we use var and it takes the global scope

function outer1(){
    // var x = 10;    Removing the variable declared within the scope to test the JS Engine refer the global scope.
    return function inner1(){
        console.log(x);
    }
}

var x = 12;         
outer1()();

//The output for the above Two Closure would be 10 and 12.


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

//Now, if you check the below "Count" -> the variable is encapsulated within the closure so whenever
// someone declares the count variable outside the scope, it will NOT take it or will NOT override.
// This method is also called as DATA HIDING.

function outer2(){
    var count = 2;
    return function inner2(){
        count++;
        console.log(count);
    }
}

outer2()();     
//The reason why we have two functional brackets, 
//it is to call the returned function within the outer2 function otherwise the inner function will not be called.


// // Let's create a Constructor so that the code will be scalable.

// function outer3(a){
//     var x = a;
//     return function inner3(){
//         x++;
//         console.log(x);
//     }
// }

// outer3(6)();

// Returning a variable within a closure and can check whether it is accessible to the global scope.

function a(){
    var z = 100;
    return function b(){
        console.log(z);     // This line will print Z because as it invokes lexical parameters from its parent i.e. a(), and forms a closure.
    }
}

a();
console.log(z);     //This will not be printed and it will showcase it as not defined as per the lexical scope, it is under Global and cannot find any variable declarion for Z.


//Creating the same function using the scalable method.

function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.incrementCounter();

//Basic Syntax of Promises, every promise will have two parameters, 1. Resolve -> Under this, you get .then function
// 2. Reject -< Under this, you get .catch function to handle exceptions and errors from the Resolve and from the Promise itself.

/* Multiple Syntax 

calling the resolve Directly
calling the reject Directly

*/

const a1 = new Promise((resolve, reject) => {
    //if(false)
    if(true){
        resolve("Resolved Successfully");
    }else{
        reject("error");
    }
});

let a2 = Promise.resolve('a2: Resolved');
let a3 = () => Promise.resolve(null);
let a4 = () => Promise.reject('a3 Reject');


a1.then((result) => {
    console.log('a1: ', result);
}).catch((error)=> {
    console.log("Caught Error", error)
})
a2.then((result) => {
    console.log('a2: ', result);
});
a3().then((result) => {
    console.log('a3: ', result);
});
a4().then((result) => {
    console.log('a4: ', result);
}).catch((result) => {
    console.log('a4 Rejected with Error: ', result);
});

/* OUTPUT 1 */
/* 

a1:  Resolved Successfully
a2:  a2: Resolved
a3:  null
a4 Rejected with Error:  a3 Reject

If the "if Condition is False" then,

"Caught Error error" -> will be the output for a1.reject

*/

//Example 1
const p1 = new Promise((resolve,reject) => {
    let x = 5;
    //resolve(x); You can get only one answer out of a Promise so either it should be Resolve or should be Reject.
    reject(x);
});

p1.then((ex) => {
    console.log(`We can get the value from the resolve function and can use it in .then here ${ex}`);
    return ex;
}).then((y) => {
    console.log(`Returned value from .then can be chained with the other then ${y}`);
}).catch((exx) => {
    console.log('caught ',exx);
});


// Example 2: With a Actual Aysnc Function that will be executed in the Future

rand = () => {
    return Math.round(Math.random() * 10);
}


const p2 = new Promise((resolve,reject) => {
    let num = rand();
    setTimeout(resolve, 1500, num);
})

p2.then((x) => {
    console.log(`We can get the value from the resolve function p2 Promise and can use it in .then here ${x}`);
    return x;
}).then((y) => {
    console.log(`Returned value from .then can be chained with the other then ${y * 2}`);
}).catch((error) => {
    console.log("caught error - ", error);
});

/* OUTPUT 2 */
/* 

Example 1
The Below Line Will Be Executed Immediately As There Are No Async Function Associated
caught  5 


Example 2
The Below Line Will Be Executed by taking a time of 1500ms delay As "setTimeout" Is The Async Function

We can get the value from the resolve function p2 Promise and can use it in .then here 4
Returned value from .then can be chained with the other then 8

*/

//Promise.all() -> When you want to run your code once all your promises had been resolved.

let c1 = () => Promise.resolve("c1 is Resolved"); // Taking Promise as a Function
let c2 = () => Promise.resolve("c2 is Resolved");
let c3 = Promise.resolve("c3 is Resolved"); // Taking Promise directly as a Variable

Promise.all([c1(),c2(),c3]).then((result)=>{
    console.log(result);
    console.log(result[1]);
    console.log(result[0]);
    console.log(result[2]);
});

/* OUTPUT 3 */
/* 

[ 'c1 is Resolved', 'c2 is Resolved', 'c3 is Resolved' ]
c2 is Resolved
c1 is Resolved
c3 is Resolved

*/

//Promise.race() -> When you want the result only from first the resolved Promise

let d1 = () => Promise.resolve("d1 is Resolved"); // Taking Promise as a Function
let d2 = () => Promise.reject("d2 is Resolved");
let d3 = Promise.resolve("d3 is Resolved"); // Taking Promise directly as a Variable
let d4 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "d4 is Resolved");
});

Promise.race([d1(),d2(),d3,d4]) // We can interchange the position of the array items so that it works first
    .then((result)=>{
        console.log('Winning: ', result);
    })
    .catch((result) => {
        console.log('Failed: ', result);
    });

/* OUTPUT 4 */

/* Winning:  d1 is Resolved */


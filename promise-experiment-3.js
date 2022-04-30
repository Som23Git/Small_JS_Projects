//Basic Syntax of Promises, every promise will have two parameters, 1. Resolve -> Under this, you get .then function
// 2. Reject -< Under this, you get .catch function to handle exceptions and errors from the Resolve and from the Promise itself.

/* Multiple Syntax 

calling the resolve Directly
calling the reject Directly

*/

const a1 = new Promise((resolve, reject) => {
    if(false){
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
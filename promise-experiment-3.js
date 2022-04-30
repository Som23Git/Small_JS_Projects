//Basic Syntax of Promises, every promise will have two parameters, 1. Resolve -> Under this, you get .then function
// 2. Reject -< Under this, you get .catch function to handle exceptions and errors from the Resolve and from the Promise itself.

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
});
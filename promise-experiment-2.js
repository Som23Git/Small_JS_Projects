/* Promise Experiment and Instructions from Codecademy

**Basic Constructor of Promises**

const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);

**Example**

const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);

*/

/* --------------------------------------------
Usecase and Instructions to contruct a Promise
---------------------------------------------- */
/* Follow the below instruction and create a program to orderSunglasses from the inventory object */

/*

1. We’re going to create a promise representing ordering sunglasses from an online store. 
First, create the function, myExecutor(). Later on, you’ll pass this function into the Promise constructor.

myExecutor() should:

Have two parameters: resolve and reject
Check if the sunglasses property on the inventory object has a value greater than zero
If it does, myExecutor() should invoke resolve() with the string 'Sunglasses order processed.'
If it does not, myExecutor() should invoke reject() with the string 'That item is sold out.'

2. Create a function, orderSunglasses(). This function should have no parameters. 
It should return a new promise constructed by passing your myExecutor() function into the Promise constructor.

3. Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.

4. At the bottom of your app.js file, log orderPromise to the console.

5. In this exercise and throughout the lesson, you can use the terminal to execute your code. 
To run the program, you’ll type node programName.js in the terminal and hit enter (or return). 
You’ll be able to see the output of the program in the terminal.

Let’s try it! 

If you’d like, you can see an alternate output by changing the sunglasses property 
in the inventory object to 0 and executing app.js from the terminal again.

*/


/* Program */

const inventory = {
sunglasses: 1900,
pants: 1088,
bags: 1344
};

// Write your code below:
const myExecutor = (resolve,reject) => {
    // if(inventory.sunglasses > 0){
        if(inventory.sunglasses = 0){
        resolve('Sunglasses order processed.');
    }else{
        reject('That item is sold out.');
    }
}

const myFirstPromise = new Promise(myExecutor);

const orderSunglasses = () => {
    return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();
console.log(orderPromise);  


/* OUTPUT */

/* 

1. If Promise is pushed from Pending to Resolved

Promise { 'Sunglasses order processed.' } 

2. If Promise is pushed from Pending to Rejected

Promise { <rejected> 'That item is sold out.' }

*/


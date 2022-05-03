//Synchronous JavaScript

let log = console.log;

let a1 = 5;
let a2 = 50;

let a3 = function (){return 5};
let a4 = function (){return 50};

log(a3());
log(a4());

let a5 = function(num){return 5*num};
let a6 = function(){return 50};

log(a5(a6()));

//Asynchronous JavaScript -> callbacks, setTimeout, Promises are regular AJAX.

let b1 = 50;
console.log(b1);
setTimeout(function(){b1++; log(b1)},0);
console.log(b1+10);

let p = new Promise((resolve,reject) => {
    resolve("Yo!")
});
log(p);


/* OUTPUT */
/* 

5
50
250
50
60
Promise { 'Yo!' }
51

*/
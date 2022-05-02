//Synchronous and Asynchronous JavaScript

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

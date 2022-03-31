//Working on Promises

//Additional Information
/*

setTimeout(function|code, delay(ms), argsfordeclaredfns.[],argsfordeclaredfns.[])


*/

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("Work 1") // Task 1 -- Initiating the promise


/* ---------------------------------------
Handling the result from the first promise
------------------------------------------*/
.then(function(result) {
    console.log(result);
    return asyncFunc("Work 2"); // Task 2 -- Initiating the promise again
}, function(error) {
    console.log(error);
})

/* ---------------------------------------
Handling the result from the second promise
------------------------------------------*/
.then(function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});

console.log("End");
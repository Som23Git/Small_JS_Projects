const p1 = new Promise((resolve,reject) => {
    let x = 5;
    resolve(x);
});

p1.then((ex) => {
    console.log(ex);
});
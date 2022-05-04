//Using the Fetch and Promise.all together to create/update an HTML element using JavaScript

let log = console.log;      //This is a shortcut for console.log
let file1 = fetch("./data.json");
let file2 = fetch("./data.json");

Promise.all([file1,file2])
.then((data) => {
    data.forEach(file => {
        process(file.json());
    })
})
.catch((error) => {
    log("error");
})

let process = (prom) => {
    prom.then((data => {
        let p = document.createElement('p');
        p.textContent = data.numbers.join(', ');
        document.getElementById('output').appendChild(p);
    }))
}






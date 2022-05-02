//JavaScript to Handle Fetch Method

let url = "http://jsonplaceholder.typicode.com/comments?postId=42";


fetch(url)

//Handle the response from fetch now
.then((response) => response.json())
.then((data) => {
    console.log(data);
    console.log(typeof data);
    let str = JSON.stringify(data, null, '\t');
    document.querySelector("#output").textContent = str;
})
.catch((error) => {
    let nm = error.name;
    let msg = error.message;
    alert(`The catch error is ${nm} ${msg}`);
});

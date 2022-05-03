//We are using Promise.all() to make sure that the page is loaded with all the CSS and then, the user can take control of page.

let log = console.log;
let warn = console.log;
const url1 = "./style_1.css";
const url2 = "./style_2.css";

//This will NOT work because the event had loaded just One Attribute and Not all the Attributes

/*

let link = document.createElement('link');
link.setAttribute('type','text/css');
link.setAttribute('rel','stylesheet');
link.addEventListener('load',function(ev){
    //The CSS had been loaded in the style tag
    log("The CSS had been loaded successfully");
});
link.addEventListener('error',function(){
    //If something goes wrong
    warn("Something Went Wrong, there is an error");
});
link.href = url1;
document.head.appendChild(link);

*/

//INSTEAD we use promise to load all the attributes

let p1 = new Promise((resolve,reject) => {
    let link = document.createElement('link');
link.setAttribute('type','text/css');
link.setAttribute('rel','stylesheet');
link.addEventListener('load',function(ev){
    //The CSS had been loaded in the style tag
    log("The CSS had been loaded successfully");
    resolve(link);
});
link.addEventListener('error',function(err){
    //If something goes wrong
    warn("Something Went Wrong, there is an error");
    reject(err);
});
link.href = url1;
document.head.appendChild(link);
});


let p2 = new Promise((resolve,reject) => {
    let link = document.createElement('link');
link.setAttribute('type','text/css');
link.setAttribute('rel','stylesheet');
link.addEventListener('load',function(ev){
    //The CSS had been loaded in the style tag
    log("The CSS had been loaded successfully");
    resolve(link);
});
link.addEventListener('error',function(err){
    //If something goes wrong
    warn("Something Went Wrong, there is an error");
    reject(err);
});
link.href = url2;
document.head.appendChild(link);
});


Promise.all([p1,p2]).then((things) => {
    log("Both the CSS Loaded Successfully");
})
.catch((things)=>{
    warn("There was an issue");
});



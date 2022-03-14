window.addEventListener('storage', () => {
   const xlogs = localStorage.getItem('myObj');
   console.log(xlogs);
   document.getElementById("database_1").innerHTML = document.getElementById("database_1").innerHTML + xlogs + '</br>';
}); 

window.addEventListener('load', () => {
    const xlogs = localStorage.getItem('myObj');
    console.log(xlogs);
    document.getElementById("database_1").innerHTML = document.getElementById("database_1").innerHTML + xlogs + '</br>';
 }); 

//function getLogs(){
//    xlogs = localStorage.getItem('myObj');
//    console.log(xlogs);
 //   document.getElementById("database_1").innerHTML = xlogs;
// }
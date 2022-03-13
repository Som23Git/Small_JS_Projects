window.addEventListener('storage', () => {
   const xlogs = localStorage.getItem('myObj');
   console.log(xlogs);
   document.getElementById("database_1").innerHTML = xlogs;
}); 

//function getLogs(){
//    xlogs = localStorage.getItem('myObj');
//    console.log(xlogs);
 //   document.getElementById("database_1").innerHTML = xlogs;
// }
window.addEventListener('storage', () => {
    var newDataItems = localStorage.getItem("myStoreData");
    console.log("NewDataItems:" + newDataItems);
    document.getElementById("database_1").innerHTML = newDataItems + '</br>';
}); 



// window.addEventListener('load', () => {
//     const xlogs = localStorage.getItem('myObj');
//     console.log(xlogs);
//     document.getElementById("database_1").innerHTML = document.getElementById("database_1").innerHTML + xlogs + '</br>';
//  }); 

//function getLogs(){
//    xlogs = localStorage.getItem('myObj');
//    console.log(xlogs);
 //   document.getElementById("database_1").innerHTML = xlogs;
// }
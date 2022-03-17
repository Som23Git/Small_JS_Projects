window.addEventListener('storage', () => {
    var newDataItems = localStorage.getItem("myStoreData");
    console.log("NewDataItems:" + newDataItems);
    document.getElementById("database_1").innerHTML = newDataItems + '</br>';
}); 

function fetchLogs(){
    if(document.getElementById("database_1").innerHTML == "Click Fetch Logs"){
        alert("Loading logs...");
        var newDataItems = localStorage.getItem("myStoreData");
        console.log("NewDataItems:" + newDataItems);
        document.getElementById("database_1").innerHTML = newDataItems + '</br>';
    }else if(document.getElementById("database_1").innerHTML !== "Click Fetch Logs"){
        alert("There are no new logs found");
    }else{
        alert("Loading Logs...");
    }
}

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
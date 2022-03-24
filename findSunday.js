// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

console.log("Starting....");

// function findSun(){
//     var date = new Date(2022, 00, 01);
//     var whatDay = date.getDay();
//     console.log(whatDay);
//     let weekDays = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
//     console.log(weekDays[whatDay]);
// }

function findSun(){
for(var i=2014; i<=2050; i++){
    var date = new Date(i, 00, 01);
    var whatDay = date.getDay();
    // console.log(whatDay);
    let weekDays = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    // console.log(weekDays[whatDay] + " : " +i);
    if(weekDays[whatDay] == "Sunday" ){
        console.log(weekDays[whatDay] + " : " +i);
    }else{
        continue;
    }
}
}

findSun();
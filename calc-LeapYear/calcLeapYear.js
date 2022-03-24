// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.


console.log("starting...");

function calcLeap(){
    var x = document.getElementById("inputYear").value;
    if(x % 4 == 0 && x % 100 == 0 && x % 400 == 0){
        document.getElementById("displayOp").innerHTML = "It's a century leap year";
        console.log("It's a century leap year");
    }
    else if (x % 4 == 0 && x % 100 == 0 && x % 400 != 0){
        document.getElementById("displayOp").innerHTML = "It's a century but not a leap year";
        console.log("It's a century but not a leap year");
    }
    else if(x % 4 == 0 && x % 100 != 0 && x % 400 != 0) {
        document.getElementById("displayOp").innerHTML = "It's a leap year";
        console.log("It's a leap year");
    }
    else {
        document.getElementById("displayOp").innerHTML = "It's NOT a leap year";
        console.log("It's NOT a leap year");
    }
}


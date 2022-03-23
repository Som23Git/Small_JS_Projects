console.log("starting...");


function calcLeap(){
    var x = document.getElementById("inputYear");
    if(x % 4 == 0 && x % 100 == 0 && x % 400 == 0){
        document.getElementById("displayOp").innerHTML = "It's a century leap year";
        console.log("It's a century leap year");
    }
    else if (x % 4 == 0 && x % 100 == 0 && x % 400 != 0){
        document.write("It's a century but not a leap year");
    }
    else if(x % 4 == 0 && x % 100 != 0 && x % 400 != 0) {
        document.write("It's a leap year");
    }
    else {
        document.write("It's NOT a leap year");
    }
}


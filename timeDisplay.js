//Display Time

setInterval(timeDisplay, 1000);
//console.log(timeDisplay());

function timeDisplay(){
    var time = new Date();
    var x = time.getDay();
    var y = new Array('Sunday','Monday','Tuesday','Wedneday', 'Thursday', 'Friday', 'Saturday');
    var z = y[x];
    var timeHours = time.getHours();
    var timeMins = time.getMinutes();
    var timeSecs = time.getSeconds();
    var amPm;
    if(timeHours >=12){
        amPm = "PM";
    } else {
        amPm = "AM";
    }
    console.log ("Today is - " + z + "\n" + "Current Time is - " + timeHours + ":" + timeMins+ ":"+ timeSecs + " " + amPm);

}



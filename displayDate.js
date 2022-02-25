// Write a JavaScript program to get the current date. 
// Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function displayDate() {
    var getDate = new Date();
    var xDd = getDate.getUTCDate();
    var yMm = getDate.getUTCMonth();
    if (yMm < 10) {
        yMm = "0" + yMm;
    }
    var zYy = getDate.getUTCFullYear();
    console.log("mm-dd-yyyy - " + yMm+"-"+xDd+ "-"+zYy);
    console.log("mm/dd/yyyy - " + yMm+"/"+xDd+ "/"+zYy);
    console.log("mm:dd:yyyy - "+ yMm+":"+xDd+ ":"+zYy);
}

displayDate();

/* OUTPUT */

/*
mm-dd-yyyy - 01-25-2022
mm/dd/yyyy - 01/25/2022
mm:dd:yyyy - 01:25:2022 
*/
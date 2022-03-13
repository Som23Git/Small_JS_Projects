/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] */

function celSius() {
    var num1 = document.getElementById("calcCelsius").value;
    var resFheit = ((num1/5) * 9) + 32;
    var roundCels = resFheit.toFixed(2);
    var test;
    if (roundCels <= 50){
        test = roundCels + ' <span>&#8457;</span>' + ' <i class="fa fa-regular fa-snowflake fa-1x"></i>';
    }else if(roundCels > 50 && roundCels <=100){
        test = roundCels + ' <span>&#8457;</span>' + ' <i class="fa fa-cloud fa-1x"></i>';
    }else {
        test = roundCels + ' <span>&#8457;</span>' + ' <i class="fas fa-cloud-sun fa-1x"></i>';
    }
    document.getElementById("result").innerHTML = test;
}

function fahrHeit() {
    var num2 = document.getElementById("calcFheit").value;
    var resCels = (((num2-32)/9) * 5);
    var roundFahr = resCels.toFixed(2);
    if (roundFahr <= 50){
        test = roundFahr + ' <span>&#8451;</span>' + ' <i class="fa fa-regular fa-snowflake fa-1x"></i>';
    }else if(roundFahr > 50 && roundFahr <=75){
        test = roundFahr + ' <span>&#8451;</span>' + ' <i class="fa fa-cloud fa-1x"></i>';
    }else {
        test = roundFahr + ' <span>&#8451;</span>' + ' <i class="fas fa-cloud-sun fa-1x"></i>';
    }
    document.getElementById("result").innerHTML = test;
    
    
    
    let xTime = new Date();
    let myObj = {
        fahrenheit: num2,
        celsius: roundFahr,
        time: xTime
    };

    let myObj_serialized = JSON.stringify(myObj);

    let logArray = new Array();
    logArray = [12,123];
    logArray.push(myObj_serialized);
    console.log(logArray);
    console.log(logArray.length);
    localStorage.setItem("myObj",logArray);

    document.getElementById("database").innerHTML = document.getElementById("database").innerHTML + logArray + logArray.length + '</br>'; //To  store log lines

    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
    console.log(myObj_deserialized);

    

}

    

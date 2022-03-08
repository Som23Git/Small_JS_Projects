/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] */

function celSius() {
    var num1 = document.getElementById("calcCelsius").value;
    var resFheit = ((num1/5) * 9) + 32;
    var roundCels = resFheit.toFixed(2);
    document.getElementById("result").innerHTML = roundCels + ' <span>&#8457;</span>' + ' <i class="fa-regular fa-snowflake fa-1x"></i>';
}

function fahrHeit() {
    var num2 = document.getElementById("calcFheit").value;
    var resCels = (((num2-32)/9) * 5);
    var roundFahr = resCels.toFixed(2);
    document.getElementById("result").innerHTML = roundFahr + ' <span>&#8451;</span>';
}
    

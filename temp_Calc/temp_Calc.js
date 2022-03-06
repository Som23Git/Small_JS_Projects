/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] */

function celSius() {
    var num1 = document.getElementById("calcCelsius").value;
    var resFheit = ((num1/5) * 9) + 32;
    document.getElementById("result").innerHTML = resFheit + ' <span>&#8457;</span>';
}

function fahrHeit() {
    var num2 = document.getElementById("calcFheit").value;
    var resCels = Math.round(((num2-32)/9) * 5);
    document.getElementById("result").innerHTML = resCels + ' <span>&#8451;</span>';
}
    

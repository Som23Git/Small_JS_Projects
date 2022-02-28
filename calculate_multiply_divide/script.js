//This function multiplies the given numbers
function multiplyBy()
{
        num1 = document.getElementsByClassName("numberOne").value;
        num2 = document.getElementsByClassName("numberTwo").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
    num1 = document.getElementsByClassName("numberOne").value;
    num2 = document.getElementsByClassName("numberTwo").value;
document.getElementById("result").innerHTML = num1 / num2;
}

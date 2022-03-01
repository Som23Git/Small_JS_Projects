//This function multiplies the given numbers
function multiplyBy()
{
    num1 = document.getElementById("numberOne").value;
    num2 = document.getElementById("numberTwo").value;
    valMutiply = num1 * num2;
    console.log(valMutiply);
    decisionNum = isNaN(valMutiply);
    if(decisionNum == true) {
    document.getElementById("result").innerHTML = "Please Enter a Valid Number Input";
    } else {
    document.getElementById("result").innerHTML = valMutiply; 
    }
}

function divideBy() 
{ 
    num1 = document.getElementById("numberOne").value;
    num2 = document.getElementById("numberTwo").value;
    valDivide = num1 / num2;
    console.log(valDivide);
    decisionNum = isNaN(valDivide);
    if(decisionNum == true) {
        document.getElementById("result").innerHTML = "Please Enter a Valid Number Input";
    } else {
        document.getElementById("result").innerHTML = valDivide; 
    }
}

//Factorial;
var number = 10; 
// var number = prompt("Enter the number you want to factorize: ",);   // You can use this to receive the numbers from the user input.
factorial(number);

function factorial(x){
    for(b=1, a=x; a>0; a--){
        b=b*a;
        console.log("This is the factorial of 5: " + b);
    }
}
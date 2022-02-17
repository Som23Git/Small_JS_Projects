//Factorial;
var number = 10; 
// var number = prompt("Enter the number you want to factorize: ",);   // You can use this to receive the numbers from the user input.
factorial(number);

//Using Arrays to find the Prime Number to a specific number
var y = 25;
var z = new Array(y);
primeNumberSeries();

function factorial(x){
    for(b=1, a=x; a>0; a--){
        b=b*a;
        console.log("This is the factorial of 5: " + b);
    }
}

function primeNumberSeries(){
    for(i=0;i<y;i++){
        z[i] = i;
        if(z[i]%2 !=0){
            console.log("It is a prime number: "+ z[i]);
        }else{
            console.log("It is NOT a prime number: "+ z[i]);
        }
    }
}
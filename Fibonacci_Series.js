//Fibonacci Series

console.log("It is Fibonacci Series "+fibonacci());


function fibonacci(){
    var n = 10;
    var z = 0;
    for (x=1,y=0,i=2;i<=n;i++){
        console.log(z);
        z=x+y;
        x=y;
        y=z;
    } return z;
}
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

/*

function fibonacci(){
    let n = prompt("Enter a value for n",);
    var z = 0;
    for (x=1,y=0,i=2;i<=n;i++){
        document.write(z,",");
        z=x+y;
        x=y;
        y=z;
    } return z;
}

document.write("It is Fibonacci Series "+fibonacci());  */
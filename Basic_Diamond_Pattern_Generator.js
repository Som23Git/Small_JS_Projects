//BASIC Diamond Pattern Generator

console.log(star_generator());    //Logging the function
console.log("\n");
console.log(star2_generator());

function star_generator(){
    var k = "*"
    for(var i=1, j=1;i<=10;i++){
        j = k.repeat(i);
        console.log(j);
    }
};

function star2_generator(){
    var k = "*"
    for(j=10,i=1;j!=0;j--){
        i = k.repeat(j);
        console.log(i);
    }
}
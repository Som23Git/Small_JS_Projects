//Star Patter Generator

console.log(star_generator());

function star_generator(){
    var k = "*"
    var y = "*"
    for(var i=1, j=1;i<=5;i++){
        j = k.repeat(i);
        console.log(j);
        if (i==5){
         for(var z=5,x=1;z!=0;z--){
            x = y.repeat(z);
        console.log(x);
        }
      }
    }
}
//Palindrome

var arr = "PALINDROAP";
var y = arr.length;
palinFunc(arr);

function palinFunc(x){
    for(i=0;i<=x.length/2;i++){                 //Dividing the string into Half to make it efficent and faster
        if(x[i] == x[x.length-1 - i])           // x.length-1 - i = 9 - 1 - 0 = 8. 
        {
            console.log("It is a Palindrome: "+x[i]);
        }
        else{
            console.log("It is not a Palindrome: "+x[i]);
            return;
        }
    } 
}
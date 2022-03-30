//JavaScript code will go here    
    var images = [
   "http://www.sololearn.com/uploads/slider/1.jpg", 
   "http://www.sololearn.com/uploads/slider/2.jpg", 
   "http://www.sololearn.com/uploads/slider/3.jpg"
];

var num = 0;

function prevBtn(){
    if(num <= 0){
        num = 2;
        document.getElementById("slider").src = images[num];
    }else{
        num--;
        document.getElementById("slider").src = images[num];
    }
}

function nextBtn(){
    if(num >= images.length){
        num = 0;
        document.getElementById("slider").src = images[num];
    }else{
        num++;
        document.getElementById("slider").src = images[num];
    }
}
    

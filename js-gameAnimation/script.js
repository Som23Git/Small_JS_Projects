//Important Function to work on Canvas -> lineTo, moveTo, fillStyle(), strokeStyle(), fillText(), stroke(), fill(), clearRect();


window.onload = function(){
    let btn = document.getElementById("jump");
    let count = 0;
    btn.onclick = function(){
        var x = 300;
        var y = 350;
        count++;
        // document.getElementById("count").innerHTML = count;
        var can = document.getElementById("canvas");
        var context = can.getContext("2d");

        function draw(){

        y = y - (count * 10);
        document.getElementById("count").innerHTML = y;
        context.clearRect(0,0,600,400);

        context.beginPath();
        context.arc(x,y,50,0,2*Math.PI);
        // context.stroke();
        context.fillStyle="red";
        context.fill();
        context.strokeStyle = "white";
        context.strokeText("Count: "+count,20,30);
        if(y <= 0){
            y = 500;
            count = 0;
        }
        }
        draw();
    }
}


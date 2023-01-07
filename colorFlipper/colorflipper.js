function changeColor(){
    const btnColor = document.querySelector('#button1');
    if(btnColor.style.background == 'red'){
        btnColor.style.background = 'green';
        console.log(`changed to red`);
    }else{
        btnColor.style.background = 'red';
        console.log(`changed to green`);
    }
};
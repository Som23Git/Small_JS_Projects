function changeColor(){
    const btnColor = document.querySelector('#button1');
    console.log(btnColor);


  //Using if Statement
    // if(btnColor.style.background == 'red'){
    //     btnColor.style.background = 'green';
    //     console.log(`changed to red`);
    // }else{
    //     btnColor.style.background = 'red';
    //     console.log(`changed to green`);
    // }

    // Using Switch() statement
    switch(btnColor.style.background){
        case 'greenyellow':
            btnColor.style.background = 'blue';
            console.log(`changed to blue`);
            break;
        case 'red':
            btnColor.style.background = 'green';
            console.log(`changed to green`);
            break;
        case 'blue':
            btnColor.style.background = 'yellow';
            console.log(`changed to yellow`);
            break;
        case 'yellow':
            btnColor.style.background = 'red';
            console.log(`changed to red again`);
            break;
        default:
            btnColor.style.background = 'greenyellow';
            console.log('Color is NOT Red or Blue');
        break;
    }
};

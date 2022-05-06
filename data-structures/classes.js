//Classes are one of the important concepts in Data Structures and this will make the job more easier.
//Understanding Classes will help you to define your own methods to handle fetch and output the values.

//Here's a basic example of a Class -> Note, based on naming convention, the classes and contructor should always be in Camel Case.

class Cookie{
    constructor(color){
        this.color = color
    }

    //Defining new methods under Classes

    getColor(){
        return this.color
    };

    setColor(newValue){
        this.color = newValue
    };
};

let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('red');

/* OUTPUT */

/* 

When you pass,

cookieOne.getColor();
'green'

Now, if you do -> cookieOne.sertColor("yellow");

Then, check again.

cookieOne.getColor();
'yellow'

The cookieOne is updated. 

*/
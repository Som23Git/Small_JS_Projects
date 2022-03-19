class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){

    }

    appendNumber(number){
        console.log("Entered apendnumber")
        this.currentOperand = number;
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        console.log("Entered UpdateDisaply")
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}

const numButtons = document.querySelectorAll('[data-number]')
const operButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Entered forEach")
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

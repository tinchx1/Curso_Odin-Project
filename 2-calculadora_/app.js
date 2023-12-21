let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(operation) {
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function calculateResult() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

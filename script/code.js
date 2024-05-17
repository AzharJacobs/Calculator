// script.js

let currentOperand = '';
let previousOperand = '';
let operator = null;

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operator = null;
    updateDisplay();
}

function appendNumber(number) {
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentOperand === '') return;
    if (operator !== null) calculate();
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function appendDecimal() {
    if (currentOperand.includes('.')) return;
    currentOperand += '.';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentOperand || '0';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operator = null;
    previousOperand = '';
    updateDisplay();
}

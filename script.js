let number1 = "";
let number2 = "";
let operator = "";
let displayValue;
let operationValue;
let currentOperationResult;

let display = document.querySelector("#display");
let buttonClear = document
  .querySelector("#buttonClear")
  .addEventListener("click", function () {
    location.reload();
  });

function tapNumberButton(numberOnButton) {
  if (operator) {
    number2 += numberOnButton;
    displayValue = number2;
  } else {
    number1 += numberOnButton;
    displayValue = number1;
  }
  display.textContent = displayValue;
}

let button1 = document
  .querySelector("#button1")
  .addEventListener("click", () => tapNumberButton("1"));
let button2 = document
  .querySelector("#button2")
  .addEventListener("click", () => tapNumberButton("2"));
let button3 = document
  .querySelector("#button3")
  .addEventListener("click", () => tapNumberButton("3"));
let button4 = document
  .querySelector("#button4")
  .addEventListener("click", () => tapNumberButton("4"));
let button5 = document
  .querySelector("#button5")
  .addEventListener("click", () => tapNumberButton("5"));
let button6 = document
  .querySelector("#button6")
  .addEventListener("click", () => tapNumberButton("6"));
let button7 = document
  .querySelector("#button7")
  .addEventListener("click", () => tapNumberButton("7"));
let button8 = document
  .querySelector("#button8")
  .addEventListener("click", () => tapNumberButton("8"));
let button9 = document
  .querySelector("#button9")
  .addEventListener("click", () => tapNumberButton("9"));
let button0 = document
  .querySelector("#button0")
  .addEventListener("click", () => tapNumberButton("0"));

function tapOperatorButton(operatorOnButton) {
  if (operator) {
    operate(number1, number2, operator);
    number2 = "";
    number1 = parseInt(currentOperationResult);
  }
  operator = operatorOnButton;
}

let buttonAdd = document
  .querySelector("#buttonAdd")
  .addEventListener("click", () => tapOperatorButton("+"));

let buttonSubtract = document
  .querySelector("#buttonSubtract")
  .addEventListener("click", () => tapOperatorButton("-"));
let buttonMultiply = document
  .querySelector("#buttonMultiply")
  .addEventListener("click", () => tapOperatorButton("*"));
let buttonDivide = document
  .querySelector("#buttonDivide")
  .addEventListener("click", () => tapOperatorButton("/"));

let buttonSum = document
  .querySelector("#buttonSum")
  .addEventListener("click", function () {
    operate(number1, number2, operator);
    number2 = "";
    operator = "";
    display.textContent = Math.round(currentOperationResult * 100) / 100;
    number1 = parseInt(currentOperationResult);
  });

function add(a, b) {
  return parseInt(a) + parseInt(b);
}
function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}
function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}
function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function operate(number1, number2, operator) {
  let operation;
  switch (operator) {
    case "+":
      operation = add;
      break;
    case "-":
      operation = subtract;
      break;
    case "*":
      operation = multiply;
      break;
    case "/":
      operation = divide;
      break;
  }
  return (currentOperationResult = operation(number1, number2));
}

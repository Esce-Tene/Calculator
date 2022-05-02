const buttons = document.querySelectorAll(`button`);
const operateButton = document.getElementById(`operate`);
const clear = document.getElementById(`clear-button`);
const screen = document.getElementById(`screen`);
const display = document.querySelector(`#display`);
const displayAll = document.querySelector(`#displayAll`);
let currentNumber = 0;
let num1 = 0;
let num2 = 0;
let operator = ``;
let operation = 0;

function subtract(num1,num2) {
  return num1 - num2;
}

function add(num1,num2) {
  return num1 + num2;
}

function multiply(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2) {
  return num1 / num2; 
}

function operate() {
  switch(operator) {
    case `+`:
      operation = add(num1,num2);
      break;
      
    case `-`:
      operation = subtract(num1,num2);
      break;
      
    case `*`:
      operation = multiply(num1,num2);
      break;

    case `/`: 
      operation = divide(num1,num2);
      break;  
      
  };
  return operation
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number') && operator === '') {
      display.textContent += button.value.toString();
      currentNumber = parseFloat(display.textContent);
      displayAll.textContent += button.value;
    } 
    else if (button.classList.contains('number') && operator !== ''){
      display.textContent += button.value.toString();
      displayAll.textContent += button.value;
    } 
    else if (button.classList.contains(`big-button`)) {
      display.textContent = button.value;
      displayAll.textContent = button.value;
      currentNumber = 0;
      num1 = 0;
      num2 = 0;
      operator = '';
    }
    else if (button.classList.contains(`operator`) && currentNumber > 0) {
      num1 = currentNumber;
      display.textContent = button.value;
      operator = button.value
      displayAll.textContent += button.value;
    }
    else if (button.classList.contains(`equals`)) {
      currentNumber = display.textContent.substring(1);
      num2 = parseFloat(currentNumber);
      operate();
      display.textContent = operation;
      currentNumber = operation;
    }
    else if (button.classList.contains(`decimal`)) {
      display.textContent += `.`;
      currentNumber = parseFloat(display.textContent);
      displayAll.textContent += button.value;
    }
  })
})


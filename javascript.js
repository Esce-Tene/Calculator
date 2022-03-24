const buttons = document.querySelectorAll(`button`);
const operateButton = document.getElementById(`operate`);
const clear = document.getElementById(`clear-button`);
const screen = document.getElementById(`screen`);
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
    if (button.classList.contains('number')) {
      screen.textContent += button.value.toString();
      currentNumber = parseInt(screen.textContent);
    }  
    else if (button.classList.contains(`big-button`)) {
      screen.textContent = button.value;
      currentNumber = 0;
      num1 = 0;
      num2 = 0;
      operator = '';
    }
    else if (button.classList.contains(`operator`)) {
      num1 = currentNumber;
      screen.textContent = operator;
      operator = button.value;
      
    }
    else if (button.classList.contains(`equals`)) {
      currentNumber = parseInt(screen.textContent);
      num2 = currentNumber;
      operate();
      screen.textContent = operation;
    }
  })
})


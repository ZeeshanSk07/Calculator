let display = document.getElementById("inp");
let string = "";

function isOperator(char) {
  const operators = ["+", "-", "*", "/"];
  return operators.includes(char);
}

function myfun(input) {
    let currentValue = display.value;
  
    // If the input is 'x', treat it as '*'
  
    // Check if the input is an operator and the last character is also an operator
    if (isOperator(input) && isOperator(currentValue[currentValue.length - 1])) {
      // If true, replace the last operator with the new one
      string = currentValue.slice(0, -1);
    } else {
      string = currentValue;
    }
  
    // Append the input to the display
    string += input;
    display.value = string;
  }

function mydelete() {
  string = string.substring(0, string.length - 1);
  display.value = string;
}

function myclear() {
  display.value = "";
}

function calculate() {
  string = eval(string.replace('x', '*'));
  display.value = string;
}


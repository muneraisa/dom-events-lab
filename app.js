/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstNo = "";
let secondNo = "";
let operator = "";
let resultDisplayed = false;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

/*-------------------------------- Functions --------------------------------*/

function handleClick(event) {
  const value = event.target.innerText;

  if (value >= "0" && value <= "9") {
    handleNumber(value);
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    handleOperator(value);
  } else if (value === "=") {
    handleEquals();
  } else if (value === "C") {
    clearDisplay();
  }
}

function handleNumber(value) {
  if (resultDisplayed) {
    clearDisplay();
  }

  if (operator === "") {
    firstNo += value;
    display.innerText = firstNo;
  } else {
    secondNo += value;
    display.innerText = secondNo;
  }
}

function handleOperator(op) {
  if (firstNo === "") return; // Do nothing if no first number yet

  if (secondNo !== "") {
    const result = calculate();
    display.innerText = result;
    firstNo = result.toString();
    secondNo = "";
  }

  operator = op;
  resultDisplayed = false;
}

function handleEquals() {
  if (firstNo === "" || operator === "" || secondNo === "") return;

  const result = calculate();
  display.innerText = result;
  firstNo = result.toString();
  secondNo = "";
  operator = "";
  resultDisplayed = true;
}

function calculate() {
  const a = parseFloat(firstNo);
  const b = parseFloat(secondNo);
  let result;

  if (a == null || b == null) return "Error";

  if (operator === "+") result = a + b;
  else if (operator === "-") result = a - b;
  else if (operator === "*") result = a * b;
  else if (operator === "/") result = b !== 0 ? a / b : "Error";

  return result;
}

function clearDisplay() {
  firstNo = "";
  secondNo = "";
  operator = "";
  resultDisplayed = false;
  display.innerText = "0";
}

const display = document.getElementById("display");
let expression = "";

function append(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
  expression = display.innerText;
}

function clearDisplay() {
  display.innerText = "0";
  expression = "";
}

function backspace() {
  expression = expression.slice(0, -1);
  display.innerText = expression || "0";
}

function calculate() {
  try {
    const result = eval(expression);
    display.innerText = result;
    expression = result.toString();
  } catch {
    display.innerText = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (!isNaN(key) || "+-*/().".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

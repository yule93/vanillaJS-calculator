// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const resultValueSpace = document.querySelector(".result-value-space");

function clickNumber(event) {
  const targetNumber = event.target;
  const value = targetNumber.value;
  let resultExpression = "";
  if (isNaN(value)) {
    switch (value) {
      case "+":
        resultExpression += "+";
        break;
      case "-":
        resultExpression += "-";
        break;
      case "*":
        resultExpression += "*";
        break;
      case "/":
        resultExpression += "/";
        break;
      case "C":
        resultValueSpace.value = "";
        resultExpression = "";
        break;
      default:
        resultValueSpace.value = "";
    }
  } else {
    console.log(value);
    resultValueSpace.value += value;
  }
}

document.addEventListener("click", clickNumber);

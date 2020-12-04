// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const resultValueSpace = document.querySelector(".result-value-space");
let resultExpression = "";
let flag = false; // 이전 입력 값이 연산자인지 확인하는 flag, 연산자였으면 false

function clickButton(event) {
  const targetNumber = event.target;
  const value = targetNumber.value;

  if (!isNaN(value)) {
    // 지금 입력된 값이 숫자일 때,
    if (!flag) {
      // 이전 입력된 값이 연산자일 때,
      resultExpression += value;
      resultValueSpace.value = value;
    } else {
      // 이전 입력된 값이 숫자일 때,
      resultExpression += value;
      resultValueSpace.value += value;
    }
    flag = true;
  } else {
    // 지금 입력된 값이 연산자일 때,
    if (flag) {
      // 이전 입력값이 숫자일 때,
      if (value === "C") {
        resultValueSpace.value = "";
        resultExpression = "";
        flag = true;
      } else if (value === "=") {
        resultExpression = eval(resultExpression);
        resultValueSpace.value = resultExpression;
        flag = true;
      } else {
        // 입력된 값이 사칙연산일 때,
        resultExpression = eval(resultExpression);
        resultExpression += value;
        flag = false;
      }
    } else {
      // 이전 입력 값이 연산자일 때,
      if (value === "C") {
        resultValueSpace.value = "";
        resultExpression = "";
      } else if (value === "=") {
        resultExpression += resultValueSpace.value;
        resultExpression = eval(resultExpression);
        resultValueSpace.value = resultExpression;
      } else {
        // 지금 입력 값이 사칙연산일 때, 아무것도 하지 말아야 함.
      }
    }
  }
}

document.addEventListener("click", clickButton);

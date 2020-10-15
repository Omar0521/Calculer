let result = document.querySelector('.wrapper--result');
let plusOperator = document.querySelector('.wrapper--plus');
let timeOperator = document.querySelector('.wrapper--times');
let minusOperator = document.querySelector('.wrapper--minus');
let divideOperator = document.querySelector('.wrapper--divide');
let equalOperator = document.querySelector('.wrapper--equal');
let operator = document.querySelector('.operand');
let sin = document.querySelector('.wrapper--sin');
let cos = document.querySelector('.wrapper--cos');
let tan = document.querySelector('.wrapper--tan');
let cot = document.querySelector('.wrapper--cot');
let log = document.querySelector('.wrapper--log');
let mod = document.querySelector('.wrapper--mod');
let dot = document.querySelector('.wrapper--dot');
let currentOperator = '';
let total = [];

// Convert to Radian
const toRadian = (degree) => {
  return degree * (Math.PI / 180);
};

// Delete all
document.querySelector('.wrapper--deleteAll').addEventListener('click', () => {
  if (result.innerText) {
    result.innerText = '';
    total = [];
  }
});

// Remove one digit in output
document.querySelector('.wrapper--backspace').addEventListener('click', () => {
  if (result.innerText) {
    result.innerText = result.innerText.slice(0, result.innerText.length - 1);
  }
});

// Add dot to output

dot.addEventListener('click', (e) => {
  currentText = result.innerText;
  if (!currentText.includes('.')) {
    result.innerHTML = currentText + e.target.value;
  }
});

// Get items, add numbers to result element
for (let i = 0; i < 10; i++) {
  document.querySelector(`#number--${i}`).addEventListener('click', (el) => {
    let currentText = result.innerText;
    result.innerHTML = currentText + el.target.value;
  });
}

// Plus Operator (Sum)
plusOperator.addEventListener('click', (el) => {
  operator.innerHTML = el.target.value;
  let currentValue = result.innerText;
  total.push(currentValue);
  result.innerHTML = '';
  result.innerHTML = el.target.value;
  total.push(el.target.value);

  result.innerHTML = '';
  return total;
});

// Multiply function
timeOperator.addEventListener('click', (el) => {
  operator.innerHTML = el.target.value;
  let currentValue = result.innerText;
  total.push(currentValue);
  result.innerHTML = '';
  result.innerHTML = el.target.value;
  total.push(el.target.value);

  result.innerHTML = '';
  return total;
});

// Minus function
minusOperator.addEventListener('click', (el) => {
  operator.innerHTML = el.target.value;
  let currentValue = result.innerText;
  total.push(currentValue);
  result.innerHTML = '';
  result.innerHTML = el.target.value;
  total.push(el.target.value);

  result.innerHTML = '';
  return total;
});

// Divide function
divideOperator.addEventListener('click', (el) => {
  operator.innerHTML = el.target.value;
  let currentValue = result.innerText;
  total.push(currentValue);
  result.innerHTML = '';
  result.innerHTML = el.target.value;
  total.push(el.target.value);

  result.innerHTML = '';
  return total;
});

// Modular of two number
mod.addEventListener('click', (el) => {
  operator.innerHTML = el.target.value;
  let currentValue = result.innerText;
  total.push(currentValue);
  result.innerHTML = '';
  result.innerHTML = el.target.value;
  total.push(el.target.value);

  result.innerHTML = '';
  return total;
});

// Log of number in base of 10

log.addEventListener('click', (el) => {
  if (!result.innerText) {
    result.innerText = el.target.value;
  } else {
    let numericalresult = result.innerText;
    result.innerText = `${el.target.value}${numericalresult}`;
  }
});

// trigonometric functions

// Get Sinos of number in degree
sin.addEventListener('click', function (el) {
  if (!result.innerText) {
    result.innerText = el.target.value;
  } else {
    let numericalresult = result.innerText;
    result.innerText = `${el.target.value}${numericalresult}`;
  }
});

// Get Cosinos of number in degree
cos.addEventListener('click', function (el) {
  if (!result.innerText) {
    result.innerText = el.target.value;
  } else {
    let numericalresult = result.innerText;
    result.innerText = `${el.target.value}${numericalresult}`;
  }
});

// Get Tangent of number in degree
tan.addEventListener('click', function (el) {
  if (!result.innerText) {
    result.innerText = el.target.value;
  } else {
    let numericalresult = result.innerText;
    result.innerText = `${el.target.value}${numericalresult}`;
  }
});

// Get Cotangent of number in degree

cot.addEventListener('click', function (el) {
  if (!result.innerText) {
    result.innerText = el.target.value;
  } else {
    let numericalresult = result.innerText;
    result.innerText = `${el.target.value}${numericalresult}`;
  }
});

// Equal operator to make output
equalOperator.addEventListener('click', function () {
  operator.innerHTML = '';
  total.push(result.innerHTML);

  // trigonometric functions

  if (result.innerText[0] === 'S') {
    currentText = result.innerText;
    let number = currentText.slice(3);
    radian = toRadian(parseFloat(number));
    resultRadian = Math.sin(radian).toFixed(10);
    result.innerHTML = resultRadian;
  } else if (result.innerText[2] === 's') {
    currentText = result.innerText;
    let number = currentText.slice(3);
    radian = toRadian(parseFloat(number));
    resultRadian = Math.cos(radian).toFixed(10);
    result.innerHTML = resultRadian;
  } else if (result.innerText[0] === 'T') {
    currentText = result.innerText;
    let number = currentText.slice(3);
    radian = toRadian(parseFloat(number));
    resultRadian = Math.tan(radian).toFixed(10);
    result.innerHTML = resultRadian;
  } else if (result.innerText[2] === 't') {
    currentText = result.innerText;
    let number = currentText.slice(3);
    radian = toRadian(parseFloat(number));
    resultRadian = (1 / Math.tan(radian)).toFixed(10);
    result.innerHTML = resultRadian;
  }

  // Logarithm

  if (result.innerText[0] === 'l') {
    let numericalValue = parseFloat(result.innerText.slice(3));
    result.innerHTML = Math.log10(numericalValue).toFixed(10);
  }

  // Four main actions goes here
  if (total.length === 3) {
    if (total[1] === '+') {
      result.innerHTML = parseFloat(total[0]) + parseFloat(total[2]);
    } else if (total[1] === '/') {
      parseFloat(total[2]) === 0
        ? (result.innerHTML = 'Infinity')
        : (result.innerHTML = parseFloat(total[0]) / parseFloat(total[2]));
    } else if (total[1] === '-') {
      result.innerHTML = parseFloat(total[0]) - parseFloat(total[2]);
    } else if (total[1] === '*') {
      result.innerHTML = parseFloat(total[0]) * parseFloat(total[2]);
    } else if (total[1] === '%') {
      parseFloat(total[2]) === 0
        ? (result.innerHTML = 'Error')
        : (result.innerHTML = parseFloat(total[0]) % parseFloat(total[2]));
    }
    return (total = []);
  } else if (typeof parseFloat(total[2]) === NaN) result.innerHTML = 'Error';
  total = [];
});

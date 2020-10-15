let result = document.querySelector('.wrapper--result');
let plusOperator = document.querySelector('.wrapper--plus');
let timeOperator = document.querySelector('.wrapper--times');
let minusOperator = document.querySelector('.wrapper--minus');
let divideOperator = document.querySelector('.wrapper--divide');
let equalOperator = document.querySelector('.wrapper--equal');
let total = [];

document
  .querySelector('.wrapper--deleteAll')
  .addEventListener('click', function () {
      if (result.innerText) {
          result.innerText = '';
          total = []
    }
  });

document
  .querySelector('.wrapper--backspace')
  .addEventListener('click', function () {
    if (result.innerText) {
      result.innerText = result.innerText.slice(0, result.innerText.length - 1);
    }
  });


for (let i = 0; i < 10; i++) {
  document
    .querySelector(`#number--${i}`)
      .addEventListener('click', function (el) {
          let currentText = result.innerText;
          result.innerHTML = currentText + el.target.value ;
    });
}

plusOperator.addEventListener('click', function (el) {
    let currentValue = result.innerText;
    total.push(currentValue);
    result.innerHTML = '';
    result.innerHTML = el.target.value;
    total.push(el.target.value);
    // result.innerHTML = ''
    return total;
});

console.log(total);

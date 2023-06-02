const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let currentValue = 0;

buttonIncrement.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});

buttonDecrement.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

console.log(buttonDecrement);
console.log(buttonIncrement);
console.log(currentValue);

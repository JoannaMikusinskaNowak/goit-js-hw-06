function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChange = document.querySelector(".change-color");
console.log(buttonChange);
const spanColor = document.querySelector(".color");
console.log(spanColor);

buttonChange.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanColor.innerHTML = randomColor;
});

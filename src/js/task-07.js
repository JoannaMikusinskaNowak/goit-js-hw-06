const fontInput = document.querySelector("#font-size-control");
console.log(fontInput);

const spanInput = document.querySelector("#text");
console.log(spanInput);

fontInput.addEventListener("input", () => {
  const fontSize = fontInput.value + "px";
  spanInput.style.fontSize = fontSize;
  console.log(fontSize);
});

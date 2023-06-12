const fontInput = document.querySelector("#font-size-control");

const spanInput = document.querySelector("#text");

fontInput.addEventListener("input", () => {
  const fontSize = fontInput.value + "px";
  spanInput.style.fontSize = fontSize;
});

const inputForm = document.querySelector("#name-input");
const outputForm = document.querySelector("#name-output");

inputForm.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    outputForm.textContent = "Anonymous";
  } else {
    outputForm.textContent = event.currentTarget.value;
  }
});

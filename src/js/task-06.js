function validateInput() {
  const inputForm = document.getElementById("validation-input");
  const inputValue = inputForm.value;
  const expectedLength = parseInt(inputForm.getAttribute("data-length"));

  inputForm.addEventListener("blur", (e) => {
    let value = e.currentTarget.value;
    if (value.length === expectedLength) {
      inputForm.classList.add("valid");
      inputForm.classList.remove("invalid");
    } else {
      inputForm.classList.add("invalid");
      inputForm.classList.remove("valid");
    }

    console.log(inputForm);
    console.log(inputValue);
    console.log(expectedLength);
  });
}
validateInput();

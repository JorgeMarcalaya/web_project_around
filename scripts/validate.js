let inputList = [];
let buttonElement;

function hasInvalidInput(inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
}
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__add-btn_inactive");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__add-btn_inactive");
    buttonElement.disabled = false;
  }
}
function enableValidation() {
  const forms = document.querySelectorAll(".form");
  forms.forEach(function (form) {
    inputList = Array.from(form.querySelectorAll(".form__input"));
    buttonElement = form.querySelector(".popup__add-btn");

    inputList.forEach(function (inputElement) {
      inputElement.addEventListener("input", function () {
        toggleButtonState(inputList, buttonElement);
      });
    });
    toggleButtonState(inputList, buttonElement);
  });
}

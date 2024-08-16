export const form = document.querySelector(".form");

export const forms = {
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__add-btn",
  inactiveButtonClass: "popup__add-btn_inactive",
};

export class FormValidator {
  constructor(forms, formElement) {
    this._forms = forms;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._forms.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._forms.submitButtonSelector
    );
  }
  // Metodo privado para verificar si hay inputs invalidos
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //Metodo privado para alternar el estado del boton
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._forms.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._forms.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
  //Metodo publico para disparar los eventos
  enableValidation() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }
}

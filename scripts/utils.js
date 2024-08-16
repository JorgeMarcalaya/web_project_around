import { FormValidator, forms, form } from "./FormValidator.js";
import {
  buttonOpenEditProfile,
  buttonOpenAddCard,
  buttonCloseEditProfile,
  buttonCloseAddCard,
  overlayFormProfile,
  overlayFormCard,
  formElement,
  formCard,
  profileName,
  profileAbout,
  popupProfile,
  nameProfile,
  aboutProfie,
  popupAddCard,
} from "./script.js";

// Eventos
buttonOpenEditProfile.addEventListener("click", popup__open_edit);
buttonOpenAddCard.addEventListener("click", popup__open_add);
buttonCloseEditProfile.addEventListener("click", popup__close_profile);
buttonCloseAddCard.addEventListener("click", popup__close_add);
overlayFormProfile.addEventListener("click", popup__close_profile);
overlayFormCard.addEventListener("click", popup__close_add);

//Variables
const formValidatorPopupEdit = new FormValidator(forms, formElement);
const formValidatorPopupAdd = new FormValidator(forms, formCard);

//Funciones
function popup__open_edit() {
  profileName.value = nameProfile.textContent;
  profileAbout.value = aboutProfie.textContent;
  formValidatorPopupEdit.enableValidation();
  popupProfile.classList.add("popup__opened");
  document.addEventListener("keydown", keyEscCloseFormProfile);
}
function popup__open_add() {
  document.addEventListener("keydown", keyEscCloseFormCard);
  formValidatorPopupAdd.enableValidation();
  popupAddCard.classList.add("popup__opened");
}
function popup__close_profile() {
  popupProfile.classList.remove("popup__opened");
  document.removeEventListener("keydown", keyEscCloseFormProfile);
}
function popup__close_add() {
  popupAddCard.classList.remove("popup__opened");
  document.removeEventListener("keydown", keyEscCloseFormCard);
}
function keyEscCloseFormProfile(event) {
  if (event.key === "Escape") {
    popup__close_profile();
  }
}
function keyEscCloseFormCard(event) {
  if (event.key === "Escape") {
    popup__close_add();
  }
}

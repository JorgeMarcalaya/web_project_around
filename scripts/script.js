//Variables
const buttonOpenEditProfile = document.querySelector("#btnedit");
const buttonOpenAddCard = document.querySelector("#btnadd");
const buttonCloseEditProfile = document.querySelector("#profile");
const buttonCloseAddCard = document.querySelector("#add");
const profileName = document.querySelector("#name");
const profileAbout = document.querySelector("#about");
const popupProfile = document.querySelector(".popup-content-profile");
const nameProfile = document.querySelector(".nav__profile-nombre");
const aboutProfie = document.querySelector(".nav__profile-about");
const popupAddCard = document.querySelector(".popup-content-add-card");
let formElement = document.querySelector("#form__edit");

// Eventos
buttonOpenEditProfile.addEventListener("click", popup__open_edit);
buttonOpenAddCard.addEventListener("click", popup__open_add);
buttonCloseEditProfile.addEventListener("click", popup__close_profile);
buttonCloseAddCard.addEventListener("click", popup__close_add);
formElement.addEventListener("submit", handleProfileFormSubmit);

//Funciones
function popup__open_edit() {
  profileName.placeholder = nameProfile.textContent;
  profileAbout.placeholder = aboutProfie.textContent;
  popupProfile.classList.add("popup__opened");
}
function popup__open_add() {
  popupAddCard.classList.add("popup__opened");
}
function popup__close_profile() {
  popupProfile.classList.remove("popup__opened");
}
function popup__close_add() {
  popupAddCard.classList.remove("popup__opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let namevalue = document.querySelector("#name");
  let aboutvalue = document.querySelector("#about");
  nameProfile.textContent = namevalue.value;
  aboutProfie.textContent = aboutvalue.value;
  popupProfile.classList.remove("popup__opened");
}

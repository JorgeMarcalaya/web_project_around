//Variables
const button1 = document.querySelector("#btnedit");
const button2 = document.querySelector("#btnadd");
const button3 = document.querySelector("#profile");
const button4 = document.querySelector("#add");
const profileName = document.querySelector("#name");
const profileAbout = document.querySelector("#about");
const popupProfile = document.querySelector(".popup-content-profile");
const nameProfile = document.querySelector(".nav__profile-nombre");
const aboutProfie = document.querySelector(".nav__profile-about");
const popupAddCard = document.querySelector(".popup-content-add-card");
let formElement = document.querySelector("#form__edit");

// Eventos
button1.addEventListener("click", popup__open_edit);
button2.addEventListener("click", popup__open_add);
button3.addEventListener("click", popup__close_profile);
button4.addEventListener("click", popup__close_add);
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

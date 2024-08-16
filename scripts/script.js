//Importaciones
import { Card } from "./Card.js";

//Variables
export const buttonOpenEditProfile = document.querySelector("#btnedit");
export const buttonOpenAddCard = document.querySelector("#btnadd");
export const buttonCloseEditProfile = document.querySelector("#profile");
export const buttonCloseAddCard = document.querySelector("#add");
export const overlayFormProfile = document.querySelector(
  "#overlay-formprofile"
);
export const overlayFormCard = document.querySelector("#overlay-formcard");
export let formElement = document.querySelector("#form__edit");
export let formCard = document.querySelector("#popup-content-add-card");
export const profileName = document.querySelector("#name");
export const profileAbout = document.querySelector("#about");
export const popupProfile = document.querySelector(".popup-content-profile");
export const nameProfile = document.querySelector(".nav__profile-nombre");
export const aboutProfie = document.querySelector(".nav__profile-about");
export const popupAddCard = document.querySelector(".popup-content-add-card");
export const template = document.querySelector(".template-cards");
export const cardArea = document.querySelector(".elements");

//Cards
const initialCards = [
  {
    name: "Chicago",
    link: "https://images.unsplash.com/photo-1596250410216-1ac77dc208e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "New York",
    link: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG51ZXZhJTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Brooklyn",
    link: "https://images.unsplash.com/photo-1562809878-e7b278388ab5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJyb29reWxufGVufDB8fDB8fHww",
  },
  {
    name: "Las Vegas",
    link: "https://images.unsplash.com/photo-1577334928618-2ff2bf09e827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Texas",
    link: "https://plus.unsplash.com/premium_photo-1690522330262-5bdf16b17e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRleGFzfGVufDB8fDB8fHww",
  },
  {
    name: "Nebraska",
    link: "https://images.unsplash.com/photo-1574189937485-b94ae177a5fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmVicmFza2F8ZW58MHx8MHx8fDA%3D",
  },
];

//Eventos
formElement.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach((item) => {
  const card = new Card(item, ".template-cards");
  const cardNewElement = card.generateCard();
  cardArea.append(cardNewElement);
});

//Funciones
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let namevalue = document.querySelector("#name");
  let aboutvalue = document.querySelector("#about");
  nameProfile.textContent = namevalue.value;
  aboutProfie.textContent = aboutvalue.value;
  popupProfile.classList.remove("popup__opened");
}
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const placeValue = document.querySelector("#place");
  const linkValue = document.querySelector("#link");
  initialCards.push({
    name: placeValue.value,
    link: linkValue.value,
  });
  const newCard = new Card(
    {
      name: placeValue.value,
      link: linkValue.value,
    },
    ".template-cards"
  );
  const cardToAdd = newCard.generateCard();
  cardArea.prepend(cardToAdd);
  popupAddCard.classList.remove("popup__opened");
}

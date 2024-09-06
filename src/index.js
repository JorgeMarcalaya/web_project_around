//Importaciones
import "./index.css";
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { FormValidator, forms } from "./FormValidator.js";
import { UserInfo } from "./UserInfo.js";
import { Popup } from "./Popup.js";
// Declaracion de Variables
const buttonOpenEditProfile = document.querySelector("#btnedit");
const buttonOpenAddCard = document.querySelector("#btnadd");
let formElement = document.querySelector("#form__edit");
let formCard = document.querySelector("#form__add");
const profileName = document.querySelector("#name");
const profileAbout = document.querySelector("#about");
const popupProfile = document.querySelector(".popup-content-profile");
const nameProfile = document.querySelector(".nav__profile-nombre");
const aboutProfie = document.querySelector(".nav__profile-about");
const popupAddCard = document.querySelector(".popup-content-add-card");
const cardArea = document.querySelector(".elements");
const contentPopupImagen = document.querySelector(".popup-content-imagen");
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
const formValidatorPopupEdit = new FormValidator(forms, formElement);
const formValidatorPopupAdd = new FormValidator(forms, formCard);
const PopupProfile = new Popup(popupProfile);
const PopupCard = new Popup(popupAddCard);
const closePopup = new PopupWithImage(contentPopupImagen);
const userInfo = new UserInfo(nameProfile, aboutProfie);
const popupWithImage = new PopupWithImage(contentPopupImagen);
const submitCard = new PopupWithForm(formCard, handleCardFormSubmit);
const cardsList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const card = new Card(cardItem, ".template-cards", handleCardClick);
      const cardNewElement = card.generateCard();
      cardsList.addItem(cardNewElement);
    },
  },
  cardArea
);

//Funciones
function handleCardClick(imagen, title) {
  popupWithImage.open(imagen, title);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let setname = profileName.value;
  let setabout = profileAbout.value;
  userInfo.setUserInfo({
    name: setname,
    about: setabout,
  });
  popupProfile.classList.remove("popup__opened");
}

function handleCardFormSubmit() {
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
    ".template-cards",
    handleCardClick
  );
  const cardToAdd = newCard.generateCard();
  cardArea.prepend(cardToAdd);
  popupAddCard.classList.remove("popup__opened");
}

function popup__open_edit() {
  profileName.value = userInfo.getUserInfo().name;
  profileAbout.value = userInfo.getUserInfo().about;
  formValidatorPopupEdit.enableValidation();
  PopupProfile.open();
}
function popup__open_add() {
  formValidatorPopupAdd.enableValidation();
  PopupCard.open();
}

//Eventos y lista
cardsList.renderItems();
submitCard.setEventListeners();
PopupProfile.setEventListeners();
PopupCard.setEventListeners();
closePopup.setEventListeners();

buttonOpenEditProfile.addEventListener("click", popup__open_edit);
buttonOpenAddCard.addEventListener("click", popup__open_add);
formElement.addEventListener("submit", handleProfileFormSubmit);

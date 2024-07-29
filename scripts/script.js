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
let formCard = document.querySelector("#popup-content-add-card");
const template = document.querySelector(".template-cards");
const cardArea = document.querySelector(".elements");
const overlayFormProfile = document.querySelector("#overlay-formprofile");
const overlayFormCard = document.querySelector("#overlay-formcard");
const overlayCard = document.querySelector("#overlay-card");

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
// Eventos
buttonOpenEditProfile.addEventListener("click", popup__open_edit);
buttonOpenAddCard.addEventListener("click", popup__open_add);
buttonCloseEditProfile.addEventListener("click", popup__close_profile);
buttonCloseAddCard.addEventListener("click", popup__close_add);
formElement.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", handleCardFormSubmit);
overlayFormProfile.addEventListener("click", popup__close_profile);
overlayFormCard.addEventListener("click", popup__close_add);

//Funciones
function popup__open_edit() {
  profileName.value = nameProfile.textContent;
  profileAbout.value = aboutProfie.textContent;
  popupProfile.classList.add("popup__opened");
  document.addEventListener("keydown", keyEscCloseFormProfile);
  enableValidation();
}
function popup__open_add() {
  popupAddCard.classList.add("popup__opened");
  enableValidation();
  document.addEventListener("keydown", keyEscCloseFormCard);
}
function popup__close_profile() {
  popupProfile.classList.remove("popup__opened");
  document.removeEventListener("keydown", keyEscCloseFormProfile);
}
function popup__close_add() {
  popupAddCard.classList.remove("popup__opened");
  document.removeEventListener("keydown", keyEscCloseFormCard);
}
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
  const elementPlace = placeValue.value;
  const elementLink = linkValue.value;
  const cardToAdd = cardGenerator(elementPlace, elementLink);
  cardArea.prepend(cardToAdd);
  popupAddCard.classList.remove("popup__opened");
}
function cardGenerator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".element");
  const popup = document.querySelector(".popup-content-imagen");
  const cardImagen = card.querySelector(".element__imagen");
  const cardTitle = card.querySelector(".element__title");
  const btnDelete = card.querySelector(".element__icon-delete");
  const btnLike = card.querySelector(".element__icon-like");
  const btnImagen = card.querySelector(".element__popup-image");
  const btnImagenClose = popup.querySelector("#imagen");
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("element__icon-like_active");
  });
  btnDelete.addEventListener("click", function () {
    card.remove();
  });
  btnImagen.addEventListener("click", function () {
    const popupImagen = popup.querySelector(".popup__body-imagen");
    const popupTitle = popup.querySelector(".popup__body-title");
    popupImagen.src = link;
    popupImagen.alt = name;
    popupTitle.textContent = name;
    popup.classList.add("popup__opened");
  });
  btnImagenClose.addEventListener("click", function () {
    popup.classList.remove("popup__opened");
  });
  overlayCard.addEventListener("click", function () {
    popup.classList.remove("popup__opened");
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      popup.classList.remove("popup__opened");
    }
  });
  document.removeEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      popup.classList.remove("popup__opened");
    }
  });
  cardImagen.src = link;
  cardTitle.textContent = name;
  cardImagen.alt = name;
  return card;
}
initialCards.forEach(function (element) {
  const newCard = cardGenerator(element.name, element.link);
  cardArea.append(newCard);
});

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

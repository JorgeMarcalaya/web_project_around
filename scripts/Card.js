export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    // Almacenar el marcado en el campo privado _element para que otros elementos puedan acceder a él
    this._element = this._getTemplate();
    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__imagen").src = this._link;
    this._element.querySelector(
      ".element__imagen"
    ).alt = `Imagen de ${this._name}`;
    // Buttton like
    this._element
      .querySelector(".element__icon-like")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("element__icon-like_active");
      });
    // Button delete
    this._element
      .querySelector(".element__icon-delete")
      .addEventListener("click", function (evt) {
        evt.target.closest(".element").remove();
      });
    // Open popup image
    this._element
      .querySelector(".element__popup-image")
      .addEventListener("click", () => {
        const popup = document.querySelector(".popup-content-imagen");
        // Funcion asingar info al popup
        const popupImagen = popup.querySelector(".popup__body-imagen");
        const popupTitle = popup.querySelector(".popup__body-title");
        const btnImagenClose = popup.querySelector("#imagen");
        const overlayCard = document.querySelector("#overlay-card");
        popupImagen.src = this._link;
        popupTitle.textContent = this._name;
        popupImagen.alt = `Imagen de ${this._name}`;
        popup.classList.add("popup__opened");
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
      });
    return this._element;
  }
}

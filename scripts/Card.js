export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
        this._handleCardClick(this._link, this._name);
      });

    return this._element;
  }
}

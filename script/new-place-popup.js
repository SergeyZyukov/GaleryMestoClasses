/* eslint-disable no-undef */
class NewPlacePopup extends Popup {
  constructor(element) {
    super(element);
    this.placePopupOpen = this.placePopupOpen.bind(this);
    this.errorStrings = document.querySelectorAll('.errors');    
    this.form = this.element.querySelector('.popup__form');
    this.buttonEdit = document.querySelector('.button-user-info__set');
    this.buttonEdit.addEventListener('click', this.placePopupOpen);
  }

  placePopupOpen() {
    this.form.reset();
    super.open();
  } 
}
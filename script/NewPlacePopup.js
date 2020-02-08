/* eslint-disable no-undef */
class NewPlacePopup extends Popup {
  constructor(element, placeFormValidator) {
    super(element);   
    this.placeFormValidator = placeFormValidator;
    this.placePopupOpen = this.placePopupOpen.bind(this);
    this.form = document.newPlace;
    this.button = document.querySelector('.button-user-info__set');
    this.button.addEventListener('click', this.placePopupOpen);
  }

  placePopupOpen() {
    this.placeFormValidator.inputListenerHanger(this.form);
    this.form.reset();
    super.open();
  } 
}
class NewPlacePopup extends Popup {
  constructor(element) {
    super(element);
    this.placePopupOpen = this.placePopupOpen.bind(this);
    this.buttonEdit = document.querySelector('.button-user-info__set');
    this.buttonEdit.addEventListener('click', this.placePopupOpen);
  }

  placePopupOpen() {
    super.open(super.element);
  }

  placePopupClose() {
    super.close(super.element);
  }
}
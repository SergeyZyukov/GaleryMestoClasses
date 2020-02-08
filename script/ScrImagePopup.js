/* eslint-disable no-undef */
class ScrImagePopup extends Popup {
  constructor(element) {
    super(element);
    this.closePopup = this.element.querySelector('.popup__close');
    this.scrPopupOpen = this.scrPopupOpen.bind(this);
    this.imagelink = document.querySelector('.imagelink');
  }
  
  scrPopupOpen(evt) {
    this.elem = evt.target;
    if (this.elem.classList.contains('place-card__image')) {
      super.open();     
      this.imagelink.setAttribute('src', this.elem.style.backgroundImage.slice(5, -2));
    }    
  }  
}
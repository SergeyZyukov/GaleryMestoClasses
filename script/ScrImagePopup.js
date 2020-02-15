/* eslint-disable no-undef */
class ScrImagePopup extends Popup {
  constructor({ popupScr, container }) {
    super(popupScr);
    this.container = container;    
    this.scrPopupOpen = this.scrPopupOpen.bind(this);
    this.imagelink = document.querySelector('.imagelink');
    this.container.addEventListener('click', this.scrPopupOpen);
  }
  
  scrPopupOpen(evt) {
    this.elem = evt.target;
    if (this.elem.classList.contains('place-card__image')) {
      super.open();     
      this.imagelink.setAttribute('src', this.elem.style.backgroundImage.slice(5, -2));
    }    
  }  
}
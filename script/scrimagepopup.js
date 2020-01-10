class ScrImagePopup extends Popup {
  constructor(element) {
    super(element);
    this.closePopup = this.element.querySelector('.popup__close');
    this.scrPopupOpen = this.scrPopupOpen.bind(this);
    this.placesList = document.querySelector('.places-list');
    this.imagelink = document.querySelector('.imagelink');
    this.placesList.addEventListener('click', this.scrPopupOpen);
  }
  
  scrPopupOpen(evt) {
    this.elem = evt.target;
    if (this.elem.classList.contains('place-card__image')) {
      super.open(super.element);     
      this.imagelink.setAttribute('src', this.elem.style.backgroundImage.slice(5, -2));
    }    
  }
  
  scrPopupClose() {
    super.close(super.element);
  }
}
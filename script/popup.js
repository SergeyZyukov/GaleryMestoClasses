// eslint-disable-next-line no-unused-vars
class Popup {
  constructor(element) {
    this.element = element;     
    this.close = this.close.bind(this); 
    this.closeButton = this.element.querySelector('.popup__close');
    this.closeButton.addEventListener('click', this.close);
  }

  open() {
    this.element.classList.add('popup_is-opened');
  }

  close() {
    this.element.classList.remove('popup_is-opened');
  }
}
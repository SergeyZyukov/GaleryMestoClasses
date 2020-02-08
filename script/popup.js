class Popup {
  constructor(element) {
    this.element = element;     
    this.close = this.close.bind(this); 
    this.errorStrings = document.querySelectorAll('.errors');
    this.closeButton = this.element.querySelector('.popup__close');    
    this.closeButton.addEventListener('click', this.close);
  }

  open() {
    this.element.classList.add('popup_is-opened');
  }

  close() {     
    this.errorStrings.forEach((item) => {
      item.textContent = '';
    });  
    this.element.classList.remove('popup_is-opened');    
  }
}
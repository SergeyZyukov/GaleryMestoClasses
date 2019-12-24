class Popup {
  constructor(popupcontainer) {
    this.popupcontainer = popupcontainer;
      
    const buttonPlace = document.querySelector('.button-user-info__set');
    const buttonEdit = document.querySelector('.button-edit__set');
    const buttonPlaceClose = document.querySelector('.popup-place__close');
    const buttonPersonalClose = document.querySelector('.popup_personal__close');
    const buttonScrClose = document.querySelector('.popup-scrplacecard__close');
    const placesList = document.querySelector('.places-list'); 
             
    buttonScrClose.addEventListener('click', this.popupsClose);
    buttonEdit.addEventListener('click', this.editpopupOpen);
    buttonPlaceClose.addEventListener('click', this.popupsClose);
    buttonPersonalClose.addEventListener('click', this.popupsClose);
    placesList.addEventListener('click', this.scrPopupOpen);
    buttonPlace.addEventListener('click', this.placePopupOpen);
  }
  
  scrPopupOpen(evt) {
    this.elem = evt.target;
    const imagelink = document.querySelector('.imagelink');
    const screenPlaceCard = document.querySelector('.popup__scrplacecard'); 
    if (this.elem.classList.contains('place-card__image')) {
      screenPlaceCard.classList.toggle('popup_is-opened');
      imagelink.setAttribute('src', this.elem.style.backgroundImage.slice(5, -2));
    }
  } 
  
  placePopupOpen() {  
    const parentNewPlace = document.forms.newPlace.closest('.popup');
    if (this.classList.contains('button-user-info__set')) {
      parentNewPlace.classList.toggle('popup_is-opened');
    } 
  }
  
  editpopupOpen() {
    const parentPersonal = document.forms.personal.closest('.popup');
    if (this.classList.contains('button-edit__set')) {
      parentPersonal.classList.toggle('popup_is-opened');
      onInputButton(parentPersonal.querySelector('.popup__button'), true);
    } 
  }
  
  popupsClose() {    
    this.parentPopup = this.closest('.popup');
    const screenPlaceCard = document.querySelector('.popup__scrplacecard');
    const forma = this.parentPopup.querySelector('.popup__form');
    const formValidator = new FormValidator(forma);
    if (this.classList.contains('popup__close')) {
      if (this.parentPopup.classList.contains('popup__scrplacecard')) {
        screenPlaceCard.classList.remove('popup_is-opened');
      } else {
        formValidator.resetErrors(forma);
        this.parentPopup.querySelector('.popup__form').reset();
        this.parentPopup.classList.remove('popup_is-opened');
      }
    }
  }
}
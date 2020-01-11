/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const formValidatorForUser = (...args) => new FormValidator(...args);
const formValidator = new FormValidator();
const createCard = (...args) => new Card(...args);
const fotoSet = new PlacesList(document.querySelector('.places-list'), createCard);
fotoSet.render(initialCards);
const userInfo = new UserInfo({});
const popupUserProfile = new UserProfilePopup(document.querySelector('.popup__personal'), formValidatorForUser);
const popupNewPlace = new NewPlacePopup(document.querySelector('.popup__place'));
const popupScrImage = new ScrImagePopup(document.querySelector('.popup__scrplacecard'));

/* Обработчик submit на формах */
function submitHandlerForm(event) {
  event.preventDefault();
  const childButton = event.target.querySelector('.button');
  const parent = event.target.closest('.popup');
  const forma = event.target.closest('.popup__form');
  const name = event.target.elements.name.value;
  const link = event.target.elements.linkabout.value;
  const userData = {
    name,
    link
  };
  
  if (forma === document.newPlace) {
    fotoSet.addCard(userData);
    popupNewPlace.close(parent);
    parent.classList.remove('popup_is-opened');
    formValidator.setSubmitButtonState(childButton, false);
    forma.reset();
  }
  if (forma === document.personal) {
    userInfo.setUserInfo(userData);
    userInfo.updateUserInfo(userData);    
    popupUserProfile.close(parent);
    formValidator.setSubmitButtonState(childButton, false);
  }  
} 

document.forms.personal.addEventListener('submit', submitHandlerForm);
document.forms.newPlace.addEventListener('submit', submitHandlerForm);

const fotoSet = new PlacesList(document.querySelector('.places-list'), initialCards);
const popup = new Popup(document.querySelector('.popup-list'));
const formValidator = new FormValidator(document.forms);

/* Кнопка актив/дизактив */
function onInputButton(button, onOff) {
  if (onOff) {
    button.removeAttribute('disabled');
    button.classList.add('popup__button_isactiv');
  } else {
    button.setAttribute('disabled', false);
    button.classList.remove('popup__button_isactiv');
  }
}

/* Обработчик submit на формах */
function submitHandlerForm(event) {
  event.preventDefault();
  const childButton = event.target.querySelector('.button');
  const parent = event.target.closest('.popup');
  const forma = event.target.closest('.popup__form');
  const name = event.target.elements.name.value;
  const linkabout = event.target.elements.linkabout.value;
  const userInfo = new UserInfo(name, linkabout);
    
  if (forma === document.newPlace) {
    fotoSet.addCard(name, linkabout);
    parent.classList.remove('popup_is-opened');
    onInputButton(childButton, false);
  }
  if (forma === document.personal) {
    userInfo.updateUserInfo();
    userInfo.setUserInfo();
    parent.classList.remove('popup_is-opened');
    onInputButton(childButton, false);
  }  
} 

function defineOutputErrorString(lineValue) {
  const errorOutPutName = document.querySelector('.error__name');
  const errorOutPutPersonal = document.querySelector('.error__personal');
  const errorOutPutLink = document.querySelector('.error__link');
  const errorOutPutAbout = document.querySelector('.error__about');

  if (lineValue.classList.contains('popup__input_type_name')) {
    return errorOutPutName;
  }
  if (lineValue.classList.contains('popup__input_type_link-url')) {
    return errorOutPutLink;
  }
  if (lineValue.classList.contains('popup__input_type_personal')) {
    return errorOutPutPersonal;
  }
  if (lineValue.classList.contains('popup__input_type_about')) {
    return errorOutPutAbout;
  }
  return false;
}

function validationEmptyAndLength(errorOut, inputstringvalueForm) {
  if (formValidator.validInputStringEmpty(inputstringvalueForm, errorOut) && formValidator.validInputStringLength(inputstringvalueForm, errorOut)) {
    return true;
  }
  return false;
}

function validationFormPlace(errorOut, formButton, inputstringvalueForm) {
  if (errorOut.classList.contains('error__name')) {
    if (validationEmptyAndLength(errorOut, inputstringvalueForm)) {
      onInputButton(formButton, false);
    }
  } else if (errorOut.classList.contains('error__link')) {
    onInputButton(formButton, false);
    if (formValidator.validInputStringIsLink(inputstringvalueForm)) {
      onInputButton(formButton, true);      
    }
  }
}

function validationFormPersonal(errorOut, formButton, inputstringvalueForm) {
  if (errorOut.classList.contains('error__personal')) {
    if (validationEmptyAndLength(errorOut, inputstringvalueForm)) {
      onInputButton(formButton, false);
    }
  } else if (errorOut.classList.contains('error__about')) {
    if (validationEmptyAndLength(errorOut, inputstringvalueForm)) {
      onInputButton(formButton, true);
    }
  }
}

/* обработчик input в формах */
function inputHandlerForms(event) {
  event.preventDefault();
  const inputLine = event.target;
  const forma = inputLine.closest('.popup__form');
  const button = forma.querySelector('.popup__button');
  const inputstringvalue = inputLine.value;
  const errorOutPut = defineOutputErrorString(inputLine);

  onInputButton(button, false);
  if (forma === document.newPlace) {
    validationFormPlace(errorOutPut, button, inputstringvalue);
  }
  if (forma === document.personal) {
    validationFormPersonal(errorOutPut, button, inputstringvalue);
  }
}

const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputLinkUrl = document.querySelector('.popup__input_type_link-url');
const popupInputPersonal = document.querySelector('.popup__input_type_personal');
const popupInputAbout = document.querySelector('.popup__input_type_about');

document.forms.personal.addEventListener('submit', submitHandlerForm);
document.forms.newPlace.addEventListener('submit', submitHandlerForm);
popupInputPersonal.addEventListener('input', inputHandlerForms);
popupInputAbout.addEventListener('input', inputHandlerForms);
popupInputName.addEventListener('input', inputHandlerForms);
popupInputLinkUrl.addEventListener('input', inputHandlerForms);

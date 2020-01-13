class FormValidator {
  constructor() {   
    this.inputHandlerForms = this.inputHandlerForms.bind(this);
    this.errorLink = document.querySelector('.error__link');
    this.errorName = document.querySelector('.error__name');
    this.errorPersonal = document.querySelector('.error__personal');
    this.errorAbout = document.querySelector('.error__about');
    this.errorOutputStrings = {
      validationLenght: 'Должно быть от 2 до 30 символов',
      validationEmpty: 'Это обязательное поле',
      validationLink: 'Здесь должна быть ссылка'
    }; 
    this.personal = document.querySelector('.popup__input_type_personal');
    this.about = document.querySelector('.popup__input_type_about');
    this.name = document.querySelector('.popup__input_type_name');
    this.linkurl = document.querySelector('.popup__input_type_link-url');
    
    this.personal.addEventListener('input', this.inputHandlerForms);
    this.about.addEventListener('input', this.inputHandlerForms);
    this.name.addEventListener('input', this.inputHandlerForms);
    this.linkurl.addEventListener('input', this.inputHandlerForms);  
  }

  _defineOutputErrorString(lineValue) {
    this.lineValue = lineValue;
  
    if (this.lineValue.classList.contains('popup__input_type_name')) {
      return this.errorName;
    }
    if (this.lineValue.classList.contains('popup__input_type_link-url')) {
      return this.errorLink;
    }
    if (this.lineValue.classList.contains('popup__input_type_personal')) {
      return this.errorPersonal;
    }
    if (this.lineValue.classList.contains('popup__input_type_about')) {
      return this.errorAbout;
    }
    return false;
  } 

  inputHandlerForms(event) {
    event.preventDefault();
    this.inputLine = event.target; 
    this.forma = this.inputLine.closest('.popup__form');
    this.button = this.forma.querySelector('.popup__button');
    this.inputstringvalue = this.inputLine.value; 
    this.errorOutPut = this._defineOutputErrorString(this.inputLine);
    this.checkInputValidity(this.errorOutPut, this.button, this.inputstringvalue);  
  } 

  setSubmitButtonState(button, onOff) {
    this.button = button;
    this.onOff = onOff;
    if (this.onOff) {
      this.button.removeAttribute('disabled');
      this.button.classList.add('popup__button_isactiv');
    } else {
      this.button.setAttribute('disabled', false);
      this.button.classList.remove('popup__button_isactiv');
    }
  }  

  validInputStringIsLink(inputString) {
    this.inputString = inputString;
    const teststr = /(^https?:\/\/)/;
    if (!teststr.test(this.inputString)) {
      this.errorLink.textContent = this.errorOutputStrings.validationLink;
      return false;
    }
    this.errorLink.textContent = '';
    return true;
  }

  validInputStringLength(inputString, outPutError) {
    this.outPutError = outPutError;
    this.inputString = inputString;
    if ((this.inputString.length <= 1) || (this.inputString.length > 30)) {
      this.outPutError.textContent = this.errorOutputStrings.validationLenght;
      return false;
    }
    this.outPutError.textContent = '';
    return true;
  }

  validInputStringEmpty(inputString, outPutError) {
    this.outPutError = outPutError;
    this.inputString = inputString;
    if (this.inputString !== '') {
      return true;
    }
    this.outPutError.textContent = this.errorOutputStrings.validationEmpty;
    return false;
  }

  validationEmptyAndLength(errorOut, inputstringvalueForm) {
    this.inputstringvalueForm = inputstringvalueForm;
    this.errorOut = errorOut;
    if (this.validInputStringEmpty(this.inputstringvalueForm, this.errorOut) && this.validInputStringLength(this.inputstringvalueForm, this.errorOut)) {
      return true;
    }
    return false;
  }

  checkInputValidity(errorOut, formButton, inputstringvalueForm) {
    this.errorOut = errorOut;
    this.formButton = formButton;
    this.inputstringvalueForm = inputstringvalueForm;
    const buttonOn = !!((this.errorOut.classList.contains('error__personal') || this.errorOut.classList.contains('error__about')));
    if (this.errorOut.classList.contains('error__name') || this.errorOut.classList.contains('error__personal') || this.errorOut.classList.contains('error__about')) {
      if (this.validationEmptyAndLength(this.errorOut, this.inputstringvalueForm)) {        
        this.setSubmitButtonState(this.formButton, buttonOn);
      } else this.setSubmitButtonState(this.formButton, false);
    } 
    if (this.errorOut.classList.contains('error__link')) {
      if (this.validInputStringIsLink(this.inputstringvalueForm)) {
        this.setSubmitButtonState(this.formButton, true);
      } else this.setSubmitButtonState(this.formButton, false);
    } 
  }  
}
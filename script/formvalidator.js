/* eslint-disable no-unused-vars */
class FormValidator {
  constructor() {   
    this.errorStrings = document.querySelectorAll('.errors');
    this.errorlink = document.querySelector('.error__link');
    this.errorOutputStrings = {
      validationLenght: 'Должно быть от 2 до 30 символов',
      validationEmpty: 'Это обязательное поле',
      validationLink: 'Здесь должна быть ссылка'
    };    
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

  resetErrors() {
    this.errorStrings.forEach((item) => {
      item.textContent = '';
    });
  }

  validInputStringIsLink(inputString) {
    this.inputString = inputString;
    const teststr = /(^https?:\/\/)/;
    if (!teststr.test(this.inputString)) {
      this.errorlink.textContent = this.errorOutputStrings.validationLink;
      return false;
    }
    this.errorlink.textContent = '';
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
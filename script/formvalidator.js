class FormValidator {
  constructor(formElement) {
    this.formElement = formElement;
    this.errorStrings = document.querySelectorAll('.errors');
    this.errorOutputStrings = {
      validationLenght: 'Должно быть от 2 до 30 символов',
      validationEmpty: 'Это обязательное поле',
      validationLink: 'Здесь должна быть ссылка'
    }; 
  } 

  resetErrors() {    
    this.errorStrings.forEach((item) => {
      item.textContent = '';
    });
  }

  validInputStringIsLink(inputString) {
    this.inputString = inputString;
    this.errorlink = document.querySelector('.error__link');
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
}
class FormValidator {
  constructor(errorWarnings) { 
    this.checkInputValidity = this.checkInputValidity.bind(this);
    this.errorWarnings = errorWarnings;    
  }

  inputListenerHanger(elem) {
    this.elem = elem;
    this.elem.addEventListener('input', this.checkInputValidity);   
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

  _validInputStringIsLink(inputString, errorLink) {
    this.errorLink = errorLink;
    this.inputString = inputString;
    const teststr = /(^https?:\/\/)/;
    if (!teststr.test(this.inputString)) {
      this.errorLink.textContent = this.errorWarnings.validationLink;
      return false;
    }
    this.errorLink.textContent = '';
    return true;
  }

  _validInputStringLength(inputString, outPutError) {
    this.outPutError = outPutError;
    this.inputString = inputString;
    if ((this.inputString.length <= 1) || (this.inputString.length > 30)) {
      this.outPutError.textContent = this.errorWarnings.validationLenght;
      return false;
    }
    this.outPutError.textContent = '';
    return true;
  }

  _validInputStringEmpty(inputString, outPutError) {
    this.outPutError = outPutError;
    this.inputString = inputString;
    if (this.inputString !== '') {
      return true;
    }
    this.outPutError.textContent = this.errorWarnings.validationEmpty;
    return false;
  }

  _validationEmptyAndLength(errorOut, inputstringvalueForm) {
    this.inputstringvalueForm = inputstringvalueForm;
    this.errorOut = errorOut;
    if (this._validInputStringEmpty(this.inputstringvalueForm, this.errorOut) && this._validInputStringLength(this.inputstringvalueForm, this.errorOut)) {
      return true;
    }
    return false;
  }

  checkInputValidity(evnt) {
    this.elementEvent = evnt.target;
    this.elementError = this.elementEvent.nextElementSibling; 
    this.formSubmitButton = this.elementEvent.closest('form').querySelector('button');        
    this.inputstringvalueForm = this.elementEvent.value;        
    const buttonOn = !!(this.elementEvent.closest('form') === document.forms.personal);    

    if (this.elementError.classList.contains('error__words')) {
      if (this._validationEmptyAndLength(this.elementError, this.inputstringvalueForm)) {        
        this.setSubmitButtonState(this.formSubmitButton, buttonOn);
      } else this.setSubmitButtonState(this.formSubmitButton, false);
    } 
    if (this.elementError.classList.contains('error__link')) {
      if (this._validInputStringIsLink(this.inputstringvalueForm, this.elementError)) {        
        this.setSubmitButtonState(this.formSubmitButton, true);
      } else this.setSubmitButtonState(this.formSubmitButton, false);
    } 
  }  
}
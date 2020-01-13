/* eslint-disable no-undef */
class UserProfilePopup extends Popup {
  constructor(element, formValidatorUser) {
    super(element);
    this.formValidatorUser = formValidatorUser; 
    this.editpopupOpen = this.editPopupOpen.bind(this);
    this.buttonEdit = document.querySelector('.button-edit__set');   
    this.submitButton = this.element.querySelector('.save__button');
    this.buttonEdit.addEventListener('click', this.editpopupOpen);
  }  

  editPopupOpen() {
    const formValid = this.formValidatorUser();
    formValid.setSubmitButtonState(this.submitButton, true);     
    super.open();     
  } 
}
/* eslint-disable no-undef */
class UserProfilePopup extends Popup {
  constructor(element, formValidatorUser, getData) {
    super(element);
    this.element = element;
    this.getData = getData;
    this.formValidatorUser = formValidatorUser; 
    this.editpopupOpen = this.editPopupOpen.bind(this);
    this.buttonEdit = document.querySelector('.button-edit__set');   
    this.submitButton = this.element.querySelector('.save__button'); 
    this.buttonEdit.addEventListener('click', this.editpopupOpen);
  }  

  editPopupOpen() {
    this.formValidatorUser.inputListenerHanger(this.element);
    this.formValidatorUser.setSubmitButtonState(this.submitButton, true);
    this.getData.updateUserInfo();
    super.open();     
  }
}
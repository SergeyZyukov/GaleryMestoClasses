class UserProfilePopup extends Popup {
  constructor(element, formValidatorUser) {
    super(element);
    this.formValidatorUser = formValidatorUser;    
    this.closePopup = this.element.querySelector('.popup__close');
    this.editpopupOpen = this.editPopupOpen.bind(this);
    this.buttonEdit = document.querySelector('.button-edit__set');   
    this.submitButton = this.element.querySelector('.save__button');
    this.buttonEdit.addEventListener('click', this.editpopupOpen);
  }  

  editPopupOpen() {
    const formValid = this.formValidatorUser();
    formValid.setSubmitButtonState(this.submitButton, true);     
    super.open(super.element);     
  }

  editPopupClose() {
    super.close(super.element);
  }
}
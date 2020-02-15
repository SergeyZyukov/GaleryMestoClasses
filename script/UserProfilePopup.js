/* eslint-disable no-undef */
class UserProfilePopup extends Popup {
  constructor({ popupPersonal, formValidator, userInformation }) {
    super(popupPersonal);
    this.element = popupPersonal;
    this.userInfo = userInformation;
    this.formValidator = formValidator; 
    this.editpopupOpen = this.editPopupOpen.bind(this);
    this.submitHandlerPersonal = this.submitHandlerPersonal.bind(this);
    this.buttonEdit = document.querySelector('.button-edit__set');   
    this.submitButton = this.element.querySelector('.save__button'); 
    this.buttonEdit.addEventListener('click', this.editpopupOpen);
  }  

  editPopupOpen() {
    const validator = this.formValidator();
    validator.inputListenerHanger(this.element);
    validator.setSubmitButtonState(this.submitButton, true);
    const userInfo = this.userInfo();
    userInfo.updateUserInfo();
    super.open();
    document.forms.personal.addEventListener('submit', this.submitHandlerPersonal);    
  }

  submitHandlerPersonal(event) {
    event.preventDefault();
    const validator = this.formValidator();
    const userInfo = this.userInfo(); 
    const childButton = event.target.querySelector('.button');
    const name = event.target.elements.name.value;
    const about = event.target.elements.linkabout.value;
    const userData = {
      name,
      about
    };
       
    userInfo.setUserInfo(userData);
    userInfo.updateUserInfo(userData);    
    super.close();
    validator.setSubmitButtonState(childButton, false);
  }   
}
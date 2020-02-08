// eslint-disable-next-line no-undef
class Avatar extends Popup {
  constructor(element, formValidatorUser, apiAvatar) {
    super(element);
    this.element = element;
    this.apiAvatar = apiAvatar;
    this.formValidatorUser = formValidatorUser; 
    this.avatarPopupOpen = this.avatarPopupOpen.bind(this);
    this.setNewAvatar = this.setNewAvatar.bind(this);
    this.submitAvatar = this.submitAvatar.bind(this);
    this.button = document.querySelector('.user-info__photo');   
    this.submitButton = this.element.querySelector('.popup__button'); 
    this.button.addEventListener('click', this.avatarPopupOpen);
  }  
  
  avatarPopupOpen() {
    this.formValidatorUser.inputListenerHanger(this.element);
    this.formValidatorUser.setSubmitButtonState(this.submitButton, false);
    super.open();     
  }

  setNewAvatar(avaRef) {
    this.avaRef = avaRef;
    this.apiAvatar.setAvatar(this.avaRef)
      .then((data) => {          
        this.button.setAttribute('style', `background-image:url(${data.avatar})`); 
      });
  }

  submitAvatar(inputEvent) {
    inputEvent.preventDefault();
    this.forma = inputEvent.target;
    this.reffer = inputEvent.target.linkabout.value;    
    this.setNewAvatar(this.reffer);
    super.close(); 
    this.forma.reset();     
  }
}
// eslint-disable-next-line no-undef
class Avatar extends Popup {
  constructor({ popupAvatar, formValidator, api }) {
    super(popupAvatar);
    this.popupAvatar = popupAvatar;
    this.apiAvatar = api;
    this.validator = formValidator; 
    this.avatarPopupOpen = this.avatarPopupOpen.bind(this);
    this.setNewAvatar = this.setNewAvatar.bind(this);
    this.submitAvatar = this.submitAvatar.bind(this);
    this.button = document.querySelector('.user-info__photo');   
    this.submitButton = this.popupAvatar.querySelector('.popup__button'); 
    this.button.addEventListener('click', this.avatarPopupOpen);    
  }  
  
  avatarPopupOpen() {
    const validator = this.validator();
    validator.inputListenerHanger(this.popupAvatar);
    validator.setSubmitButtonState(this.submitButton, false);
    super.open();
    this.popupAvatar.addEventListener('submit', this.submitAvatar);    
  }

  setNewAvatar(avaRef) {
    this.avaRef = avaRef;   
    this.apiAvatar.setAvatar(this.avaRef)
      .then((data) => this.button.setAttribute('style', `background-image:url(${data})`));     
  }

  submitAvatar(inputEvent) {
    inputEvent.preventDefault();
    this.forma = inputEvent.target;
    this.reffer = this.forma.linkabout.value;    
    this.setNewAvatar(this.reffer);
    super.close(); 
    this.forma.reset();     
  }
}
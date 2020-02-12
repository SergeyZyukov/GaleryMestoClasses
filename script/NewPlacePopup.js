/* eslint-disable no-undef */
class NewPlacePopup extends Popup {
  constructor(element, placeFormValidator, api, fotoSet) {
    super(element);
    this.fotoSet = fotoSet; 
    this.api = api;  
    this.placeFormValidator = placeFormValidator;
    this.placePopupOpen = this.placePopupOpen.bind(this);
    this.form = document.newPlace;
    this.submitHandlerNewPlace = this.submitHandlerNewPlace.bind(this);
    this.button = document.querySelector('.button-user-info__set');
    this.button.addEventListener('click', this.placePopupOpen);
  }

  placePopupOpen() {
    this.placeFormValidator.inputListenerHanger(this.form);
    this.form.reset();
    super.open();
    this.form.addEventListener('submit', this.submitHandlerNewPlace);
  } 

  postNewCard(userData) {
    this.userData = userData;    
    this.name = this.userData.name;
    this.link = this.userData.link;
    this.api.setNewCard(this.name, this.link)
      .then((data) => {
        this.fotoSet.addCard(data);
      });      
  } 

  submitHandlerNewPlace(event) {
    event.preventDefault();
    this.event = event;
    this.childButton = this.form.querySelector('.button');
    this.name = this.event.target.elements.name.value;
    this.link = this.event.target.elements.linkabout.value;
    this.userData = {
      name: this.name,
      link: this.link
    };
    this.postNewCard(this.userData);   
    super.close();    
    this.placeFormValidator.setSubmitButtonState(this.childButton, false);
    this.form.reset();    
  }   
}
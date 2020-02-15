/* eslint-disable no-undef */
class NewPlacePopup extends Popup {
  constructor({
    popupPlace, formValidator, api, cardList 
  }) {
    super(popupPlace);
    this.cardList = cardList; 
    this.api = api;  
    this.validator = formValidator;
    this.placePopupOpen = this.placePopupOpen.bind(this);
    this.form = document.newPlace;
    this.submitHandlerNewPlace = this.submitHandlerNewPlace.bind(this);
    this.button = document.querySelector('.button-user-info__set');
    this.button.addEventListener('click', this.placePopupOpen);
  }

  placePopupOpen() {
    const validator = this.validator();
    validator.inputListenerHanger(this.form);
    this.form.reset();
    super.open();
    this.form.addEventListener('submit', this.submitHandlerNewPlace);
  } 

  postNewCard(userDataCard) {
    this.userDataCard = userDataCard;   
    this.api.setNewCard(this.userDataCard)
      .then((dataCard) => {
        const cardList = this.cardList();
        cardList.addCard(dataCard);
      });      
  } 

  submitHandlerNewPlace(event) {
    event.preventDefault();
    const validator = this.validator();
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
    validator.setSubmitButtonState(this.childButton, false);
    this.form.reset();    
  }   
}
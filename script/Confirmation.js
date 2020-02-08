// eslint-disable-next-line no-undef
class Confirmation extends Popup {
  constructor(element) {
    super(element);
    this.confirmPopupOpen = this.confirmPopupOpen.bind(this);
    this.yesButtonHandler = this.yesButtonHandler.bind(this);
    this.yesButton = document.confirmation.yes;
    this.noButton = document.confirmation.no;
    this.yesButton.addEventListener('click', this.yesButtonHandler); 
  }

  yesButtonHandler(evt) {
    this.evt = evt;
    console.log('evt', this.evt.target);
    
    if (this.yesButton === this.evt) {return true;}
  }

  confirmPopupOpen() {
            
    super.open();
    
    
    // this.noButton.addEventListener('click', );
  }
}
// eslint-disable-next-line no-undef
class Confirmation extends Popup {
  constructor(element) {
    super(element);
    this.confirmPopupOpen = this.confirmPopupOpen.bind(this);       
  }  
  
  confirmPopupOpen() {
    super.open();   
  }
}
// eslint-disable-next-line no-unused-vars
class PlacesList {
  constructor(container, createCard) {
    this.createCard = createCard;
    this.container = container; 
    this.render = this.render.bind(this); 
    this.addCard = this.addCard.bind(this); 
  }  
  
  addCard(userData) {
    this.userData = userData;
    const card = this.createCard(this.userData); 
    const cardElement = card.create();
    this.container.appendChild(cardElement);
    card.installHandlers(cardElement);    
  }
  
  render(initialCards) {
    initialCards.forEach((item) => {
      this.addCard(item);
    });
  }
}
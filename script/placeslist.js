class PlacesList {
  constructor(container, createCard) {
    this.createCard = createCard;
    //console.log('PlacesList createCard', this.createCard);
    this.container = container;    
  }  
  
  addCard(name, link) {
    //console.log('name and link===>', name, link);
    const card = this.createCard({ name, link }); 
    const cardElement = card.create();
    //console.log('cardElement ==>', cardElement);
    this.container.appendChild(cardElement);
    card._installHandlers(cardElement);    
  }
  
  render(initialCards) {
    initialCards.forEach((item) => {
      this.addCard(item.name, item.link); 
    });
  }
}
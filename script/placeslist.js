class PlacesList {
  constructor(container, startSet) {
    this.startSet = startSet;
    this.container = container;
    this.cards = [];
    this.render(startSet);
  }  
  
  addCard(imgName, imgLink) {
    const {
      cardElement
    } = new Card(imgName, imgLink, this.container);
    this.cards.push(cardElement);
    this.container.appendChild(cardElement);
  }
  
  render(startSet) {
    startSet.forEach((item) => this.addCard(item.name, item.link));
  }
}
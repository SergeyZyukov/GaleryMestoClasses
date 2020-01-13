class Card {  
  constructor(cardData) { 
    this.cardData = cardData;  
    this.link = this.cardData.link;
    this.name = this.cardData.name;
    this.like = this.like.bind(this);
    this.remove = this.remove.bind(this);    
  }
  
  create() {
    const placeCard = document.createElement('div');
    const htmlBlock = `<div class="place-card__image">
        <button class = "place-card__delete-icon"></button>
        </div>
        <div class = "place-card__description">
        <h3 class = "place-card__name"></h3>
        <button class = "place-card__like-icon"></button>
        </div>`;
    
    placeCard.classList.add('place-card');
    placeCard.insertAdjacentHTML('beforeend', htmlBlock);
    const placeCardimage = placeCard.querySelector('.place-card__image');
    const placeCardname = placeCard.querySelector('.place-card__name');
    placeCardimage.style.backgroundImage = `url(${this.link})`;
    placeCardname.textContent = this.name;
    return placeCard;
  }
 
  installHandlers(targetCard) {
    targetCard.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    targetCard.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
  }
  
  like(evt) {
    this.eventLike = evt.currentTarget;
    this.eventLike.classList.toggle('place-card__like-icon_liked');
  }  
  
  remove(evt) {   
    this.cardToRemove = evt.target.parentElement.parentElement;
    this.cardToRemove.parentElement.removeChild(this.cardToRemove);  
  } 
}
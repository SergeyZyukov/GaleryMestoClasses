class Card {  
  constructor(cardData) {
    this.cardData = cardData;  
    this.link = this.cardData.link;
    this.name = this.cardData.name;
    this.id = this.cardData._id;
    this.owner = this.cardData.owner;
    this.likecount = this.cardData.likes;
    this.like = this.like.bind(this);    
    this.userInfoName = document.querySelector('.user-info__name');
  }
  
  create() {
    const placeCard = document.createElement('div');
    const deleteButton = '<button class = "place-card__delete-icon"></button>';
    const htmlBlock = `<div class="place-card__image">     
        </div>
        <div class = "place-card__description">
        <h3 class = "place-card__name"></h3>
        <div class = "place-card__like-icon">        
        </div>       
        </div>`;    
    placeCard.classList.add('place-card');
    placeCard.setAttribute('data-ID', `${this.id}`);
    placeCard.insertAdjacentHTML('beforeend', htmlBlock);      
    const placeCardimage = placeCard.querySelector('.place-card__image');

    if (this.owner.name === this.userInfoName.textContent) {
      placeCardimage.insertAdjacentHTML('beforeend', deleteButton);
    }   
    placeCard.querySelector('.place-card__like-icon')
      .textContent = this.likecount.length;
    const placeCardname = placeCard.querySelector('.place-card__name');
    placeCardimage.style.backgroundImage = `url(${this.link})`;
    placeCardname.textContent = this.name;
    return placeCard;
  }
 
  installHandlers(targetCard) {
    this.targetCard = targetCard;
    this.targetCard.querySelector('.place-card__like-icon').addEventListener('click', this.like);    
  }
  
  like(cardToLike, likes) {
    this.likes = likes;
    this.cardToLike = cardToLike;
    this.cardToLike.classList.toggle('place-card__like-icon_liked');   
    this.cardToLike.textContent = this.likes;
  }  
  
  remove(cardToRemove) {   
    this.cardToRemove = cardToRemove;       
    this.cardToRemove.parentElement.removeChild(this.cardToRemove);  
  } 
}

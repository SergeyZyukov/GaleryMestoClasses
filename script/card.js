class Card {
  constructor(imgName, imgLink) {
    this.imgName = imgName;
    this.imgLink = imgLink;
    this.cardElement = this.create(this.imgName, this.imgLink);
    this.cardElement.querySelector('.place-card__like-icon').addEventListener('click', this.like);
    this.cardElement.querySelector('.place-card__delete-icon').addEventListener('click', this.remove);
  }
  
  create() {
    const placeCard = document.createElement('div');
    const htmlBlock = '<div class="place-card__image">'
        + '<button class = "place-card__delete-icon"></button>'
        + '</div>'
        + '<div class = "place-card__description">'
        + '<h3 class = "place-card__name"></h3>'
        + '<button class = "place-card__like-icon"></button>'
        + '</div>';
    placeCard.classList.add('place-card');
    placeCard.insertAdjacentHTML('beforeend', htmlBlock);
    const placeCardimage = placeCard.querySelector('.place-card__image');
    const placeCardname = placeCard.querySelector('.place-card__name');
    placeCardimage.style.backgroundImage = `url(${this.imgLink})`;
    placeCardname.textContent = this.imgName;
    return placeCard;
  }
  
  like() { this.classList.toggle('place-card__like-icon_liked'); }  
  
  remove() {
    const parent = this.closest('.place-card');
    document.querySelector('.places-list').removeChild(parent);
  }
}
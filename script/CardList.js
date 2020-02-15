class CardList {
  constructor({
    container, createCard, api, confirm 
  }) {
    this.apiInitialCards = api;
    this.createCard = createCard;
    this.confirmDelCard = confirm;// кастомное модальное окно подтверждения удаления
    this.container = container; 
    this._render = this._render.bind(this); 
    this.confirmDelete = this.confirmDelete.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.likeCard = this.likeCard.bind(this);     
    this.userInfoName = document.querySelector('.user-info__name');
    this.cardToRemove = {};
  } 
  
  _setDeleteListener(targetCard) {
    this.targetCard = targetCard;       
    if (targetCard.querySelector('.place-card__delete-icon') !== null) { 
      targetCard.querySelector('.place-card__delete-icon').addEventListener('click', this.confirmDelete);
    }   
  }

  _setLikeListener(targetCard) {
    this.targetCard = targetCard;
    if (targetCard.querySelector('.place-card__like-icon') !== null) { 
      targetCard.querySelector('.place-card__like-icon').addEventListener('click', this.likeCard);
    }   
  }

  likeCard(isEvent) {
    this.cardToLike = isEvent.target;
    this.parentCard = this.cardToLike.closest('.place-card');
    this.id = this.parentCard.getAttribute('data-id');
    const card = this.createCard({});
    if (this.cardToLike.classList.contains('place-card__like-icon_liked')) {
      this.apiInitialCards.delLike(this.id)
        .then((count) => {                        
          card.like(this.cardToLike, count); 
        });
    } else {
      this.apiInitialCards.setLike(this.id)
        .then((likes) => card.like(this.cardToLike, likes));
    }        
  }
  
  confirmDelete(onEvent) {   
    this.onEventTarget = onEvent.target;   
    this.cardToRemove = this.onEventTarget.parentElement.parentElement;     
    this.yesDelete = document.querySelector('.popup__confirmation button');
    const confirmDel = this.confirmDelCard();    
    confirmDel.confirmPopupOpen();    
    this.yesDelete.addEventListener('click', this.deleteCard);
  }
  
  deleteCard(onEvent) {
    onEvent.preventDefault();          
    const card = this.createCard({});
    this.id = this.cardToRemove.getAttribute('data-id'); 
    this.apiInitialCards.delCard(this.id)
      .then(() => {
        const confirmDel = this.confirmDelCard();
        confirmDel.close();         
        card.remove(this.cardToRemove); 
      });    
  }

  addCard(userDataCards) {
    this.userDataCards = userDataCards;   
    const card = this.createCard(this.userDataCards);// экзкмпляр класса Card
    const cardElement = card.create(); // создаем карточку и пишем ее в cardElement
    this.container.appendChild(cardElement);   
    this.name = card.userInfoName.textContent;
    /* render my own likes */ 
    this.userDataCards.likes.forEach((item) => {
      if (item.name.includes(this.name)) {        
        card.like(cardElement.querySelector('.place-card__like-icon'), this.userDataCards.likes.length);
      }
    });    
    this._setLikeListener(cardElement);
    this._setDeleteListener(cardElement);   
  }
  
  _render(initialCards) {
    this.initialCards = initialCards;
    this.initialCards.forEach((item) => {      
      this.addCard(item);
    });  
  }

  firstSetCards() {
    this.apiInitialCards.getInitialCards()
      .then((data) => {
        this._render(data);
      });
  }
}
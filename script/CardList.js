class CardList {
  constructor(container, createCard, apiInitialCards, confirmDelCard) {
    this.apiInitialCards = apiInitialCards;
    this.createCard = createCard;
    this.confirmDelCard = confirmDelCard;
    this.container = container; 
    this._render = this._render.bind(this); 
    this.confirmDelete = this.confirmDelete.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.likeCard = this.likeCard.bind(this);
    this.initialCards = []; 
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

  _arrayHandler(params) {
    this.params = params;
    this.params.forEach((item) => {      
      const {
        name, link, _id, owner, likes 
      } = item; 
      const obj = {};
      obj.name = name;
      obj.link = link;
      obj._id = _id;
      obj.owner = owner;
      obj.likes = likes;
      this.initialCards.push(obj);       
    });      
    return this.initialCards;
  }

  likeCard(isEvent) {
    this.cardToLike = isEvent.target;
    this.parentCard = this.cardToLike.closest('.place-card');
    this.id = this.parentCard.getAttribute('data-id');
    const card = this.createCard({});
    if (this.cardToLike.classList.contains('place-card__like-icon_liked')) {
      this.apiInitialCards.delLike(this.id)
        .then((data) => {
          const count = data.likes.length;                
          card.like(this.cardToLike, count); 
        });
    } else {
      this.apiInitialCards.setLike(this.id)
        .then((data) => {                            
          card.like(this.cardToLike, data.likes.length);      
        });
    }        
  }
  
  confirmDelete(onEvent) {   
    this.onEvent = onEvent.target;   
    this.cardToRemove = this.onEvent.parentElement.parentElement;     
    this.yesDelete = document.querySelector('.popup__confirmation button');    
    this.confirmDelCard.confirmPopupOpen();    
    this.yesDelete.addEventListener('click', this.deleteCard);
  }
  
  deleteCard(onEvent) {
    onEvent.preventDefault();    
    /*  if (window.confirm('Вы действительно хотите удалить эту карточку?')) { */
    /* this.cardToRemove = isEvent.target.parentElement.parentElement;   */          
    const card = this.createCard({});
    this.id = this.cardToRemove.getAttribute('data-id'); 
    this.apiInitialCards.delCard(this.id)
      .then(() => {
        this.confirmDelCard.close();         
        card.remove(this.cardToRemove); 
      });              
    /*  } */ 
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

  /* postNewCard(userData) {
    this.userData = userData;    
    this.name = this.userData.name;
    this.link = this.userData.link;
    this.apiInitialCards.setNewCard(this.name, this.link)
      .then((data) => {
        this.addCard(data);
      });      
  }  */ 
  
  _render(initialCards) {
    this.initialCards = this._arrayHandler(initialCards);    
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
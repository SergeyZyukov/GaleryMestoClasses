/* eslint-disable prefer-promise-reject-errors */
class Api {
  constructor(options) {
    this.options = options;
  }

  _arrayHandler(params) {
    this.params = params;
    this.initialCards = [];
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
    
  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      headers: this.options.headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => this._arrayHandler(data))
      .catch((err) => {
        console.log(err);
      });  
  }
    
  getUserInfo() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: this.options.headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {       
        const { name, about, avatar } = data; 
        const obj = {};
        obj.name = name;
        obj.about = about;
        obj.avatar = avatar;                
        return obj;
      })
      .catch((err) => {
        console.log(err);
      }); 
  }

  setUserInfo(dataInfo) {
    this.dataInfo = dataInfo;
    this.nameInfo = this.dataInfo.name;
    this.jobInfo = this.dataInfo.about;
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({
        name: `${this.nameInfo}`,
        about: `${this.jobInfo}`
      }) 
    }) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => {       
        const { name, about, avatar } = data; 
        const obj = {};
        obj.name = name;
        obj.about = about; 
        obj.avatar = avatar;               
        return obj;
      })
      .catch((err) => {
        console.log(err);
      });   
  }  

  setNewCard(dataCard) {
    this.dataCard = dataCard;   
    return fetch(`${this.options.baseUrl}/cards`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify({
        name: `${this.dataCard.name}`,
        link: `${this.dataCard.link}`
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      /* using resolve data for render. Get ID, owner and likes for further use */
      .then((data) => {
        const obj = {};
        const {
          name, link, _id, owner, likes 
        } = data;         
        obj.name = name;
        obj.link = link;
        obj._id = _id;
        obj.owner = owner;
        obj.likes = likes;         
        return obj;
      })
      .catch((err) => {
        console.log(err);
      });      
  }

  delCard(cardID) {
    this.cardID = cardID;
    return fetch(`${this.options.baseUrl}/cards/${this.cardID}`, {
      method: 'DELETE',
      headers: this.options.headers
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(res);
      })
      // dont need resolve data for using
      .catch((err) => {
        console.log(err);
      });            
  }

  setLike(cardID) {
    this.cardID = cardID;
    return fetch(`${this.options.baseUrl}/cards/like/${this.cardID}`, {
      method: 'PUT',
      headers: this.options.headers      
    }) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => data.likes.length) // length for counter
      .catch((err) => {
        console.log(err);
      });   
  }

  delLike(cardID) {
    this.cardID = cardID;
    return fetch(`${this.options.baseUrl}/cards/like/${this.cardID}`, {
      method: 'DELETE',
      headers: this.options.headers      
    }) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => data.likes.length) // length for counter
      .catch((err) => {
        console.log(err);
      });   
  }

  setAvatar(avatarRef) {       
    this.avatarRef = avatarRef;
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({      
        avatar: `${this.avatarRef}`
      }) 
    }) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((data) => data.avatar) // avatar reference
      .catch((err) => {
        console.log(err);
      });
  }
}
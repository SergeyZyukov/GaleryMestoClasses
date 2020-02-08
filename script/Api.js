/* eslint-disable prefer-promise-reject-errors */
class Api {
  constructor(options) {
    this.options = options;
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
      .catch((err) => {
        console.log(err);
      }); 
  }

  setUserInfo(name, job) {
    this.name = name;
    this.job = job;
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({
        name: `${this.name}`,
        about: `${this.job}`
      }) 
    }) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });   
  }  

  setNewCard(name, link) {
    this.name = name;
    this.link = link;
    return fetch(`${this.options.baseUrl}/cards`, {
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify({
        name: `${this.name}`,
        link: `${this.link}`
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
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
      .catch((err) => {
        console.log(err);
      });   
  }

  setAvatar(avaRef) {
    this.avaRef = avaRef;
    return fetch(`${this.options.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({      
        avatar: `${this.avaRef}`
      }) 
    }) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        }         
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
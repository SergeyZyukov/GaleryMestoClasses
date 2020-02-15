class UserInfo {
  constructor(userData, api) {
    this.api = api;
    this.userData = userData;   
    this.userInfoName = document.querySelector('.user-info__name');
    this.userInfoJob = document.querySelector('.user-info__job');
    this.about = document.querySelector('.popup__input_type_about');
    this.name = document.querySelector('.popup__input_type_personal');
    this.userInfoFoto = document.querySelector('.user-info__photo');
  }  

  _dataRender(dataObj) {       
    this.name.value = dataObj.name;
    this.about.value = dataObj.about;  
    this.avatar = dataObj.avatar;
    this.userInfoName.textContent = dataObj.name;
    this.userInfoJob.textContent = dataObj.about;
    this.userInfoFoto.setAttribute('style', `background-image:url(${this.avatar})`);
  }  
  
  setUserInfo(userData) {      
    this.userData = userData;
    this.api.setUserInfo(this.userData)
      .then((data) => {        
        this._dataRender(data);              
      });         
  }   
  
  updateUserInfo() {
    this.api.getUserInfo()
      .then((data) => {        
        this._dataRender(data);                            
      });
  }
} 

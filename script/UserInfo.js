class UserInfo {
  constructor(userData, apiUserInfo) {
    this.apiUserInfo = apiUserInfo;
    this.userData = userData;   
    this.userInfoName = document.querySelector('.user-info__name');
    this.userInfoJob = document.querySelector('.user-info__job');
    this.job = document.querySelector('.popup__input_type_about');
    this.name = document.querySelector('.popup__input_type_personal');
    this.userInfoFoto = document.querySelector('.user-info__photo');
  }  

  _dataRender(dataObj) {
    this.name.value = dataObj.name;
    this.job.value = dataObj.about;  
    this.avatar = dataObj.avatar;
    this.userInfoName.textContent = dataObj.name;
    this.userInfoJob.textContent = dataObj.about;
    this.userInfoFoto.setAttribute('style', `background-image:url(${this.avatar})`);
  }  
  
  setUserInfo(userData) {      
    this.userData = userData;
    this.apiUserInfo.setUserInfo(this.userData.name, this.userData.link)
      .then((data) => {
        this._dataRender(data);              
      })
      .finally(() => {
            
      });    
  }   
  
  updateUserInfo() {
    this.apiUserInfo.getUserInfo()
      .then((data) => {
        this._dataRender(data);                            
      });
  }
} 

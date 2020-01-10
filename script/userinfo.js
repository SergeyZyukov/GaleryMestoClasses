// eslint-disable-next-line no-unused-vars
class UserInfo {
  constructor(userData) {
    this.userData = userData;
    this.userInfoName = document.querySelector('.user-info__name');
    this.userInfoJob = document.querySelector('.user-info__job');
  } 
  
  setUserInfo(userData) { 
    this.userData = userData;
  } 
  
  updateUserInfo() {
    this.userInfoJob.textContent = this.userData.link;
    this.userInfoName.textContent = this.userData.name;  
  }
} 

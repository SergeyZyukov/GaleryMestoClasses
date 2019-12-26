class UserInfo {
  constructor(userData) {
    this.userData = userData;
    this.userData.userName = userData.userName;
    this.userData.userAbout = userData.userAbout;
    this.userInfoName = document.querySelector('.user-info__name');
    this.userInfoJob = document.querySelector('.user-info__job');
  } 
  
  setUserInfo(userData) { 
    this.userData = userData;
  } 
  
  updateUserInfo(userData) {
    this.userData = userData;   
    this.userInfoJob.textContent = this.userData.userAbout;
    this.userInfoName.textContent = this.userData.userName;  
  }
} 

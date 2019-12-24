class UserInfo {
  constructor(userName, userAbout) {
    this.userName = userName;
    this.userAbout = userAbout;
    this.topSecret = [];
  }
  
  setUserInfo() {    
    this.topSecret.push(this.userName, this.userAbout);
  }
  
  updateUserInfo() {
    const userInfoName = document.querySelector('.user-info__name');
    const userInfoJob = document.querySelector('.user-info__job');
    userInfoJob.textContent = this.userAbout;
    userInfoName.textContent = this.userName;
  }
} 


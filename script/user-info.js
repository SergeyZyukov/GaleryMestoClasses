class UserInfo {
  constructor(userData) {
    this.userData = userData;
    this.userInfoName = document.querySelector('.user-info__name');
    this.userInfoJob = document.querySelector('.user-info__job');
  } 
  
  setUserInfo(userData) { 
    this.userData = userData;/* передаем в параметрах объект userData, содержащий данные пользователя */
  } 
  
  updateUserInfo() {
    this.userInfoJob.textContent = this.userData.link; /* выводим данные пользователя из объекта userData */
    this.userInfoName.textContent = this.userData.name;     
  }
} 

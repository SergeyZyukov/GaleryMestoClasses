/* eslint-disable no-undef */
const formValidatorForUser = (...args) => new FormValidator(...args);
const formValidator = new FormValidator();
const createCard = (...args) => new Card(...args);
const fotoSet = new PlacesList(document.querySelector('.places-list'), createCard);
fotoSet.render(initialCards);
const userInfo = new UserInfo({});
const popupUserProfile = new UserProfilePopup(document.querySelector('.popup__personal'), formValidatorForUser);
const popupNewPlace = new NewPlacePopup(document.querySelector('.popup__place'));
const popupScrImage = new ScrImagePopup(document.querySelector('.popup__scrplacecard'));

/* Обработчик submit на формах */
function submitHandlerForm(event) {
  event.preventDefault();
  const childButton = event.target.querySelector('.button');
  const parent = event.target.closest('.popup');
  const forma = event.target.closest('.popup__form');
  const name = event.target.elements.name.value;
  const link = event.target.elements.linkabout.value;
  const userData = {
    name,
    link
  };
  
  if (forma === document.newPlace) {
    fotoSet.addCard(userData);
    popupNewPlace.close(parent);
    parent.classList.remove('popup_is-opened');
    formValidator.setSubmitButtonState(childButton, false);
    forma.reset();
  }
  if (forma === document.personal) {
    userInfo.setUserInfo(userData);
    userInfo.updateUserInfo(userData);    
    popupUserProfile.close(parent);
    formValidator.setSubmitButtonState(childButton, false);
  }  
} 


document.forms.personal.addEventListener('submit', submitHandlerForm);
document.forms.newPlace.addEventListener('submit', submitHandlerForm);

/*

  Хорошая работа, большая часть замечаний исправлена, но осталось ещё несколько

  Надо исправить:
  - метод карточки _installHandlers помечен как приватный (нижнее подчеркивание в начале имени)
  но вызывается в классе PlacesList. Приватные методы должны вызываться только внутри класса

  - в отдельных файлах глобальные переменные должны быть скрыты в модули, 
  когда код расположен в разных файлах, его необходимо 
  заключать в модули, т.к. если файлов будет много, то в разных 
  файлах могут появится функции или переменные с одинаковыми именами,
  они будут переопределять друг друга. Модуль должен предоставлять
  наружу только минимально необходимый api
  Для создании модулей можно воспользоваться IIFE, подробнее:
  https://learn.javascript.ru/closures-module
  https://habr.com/ru/company/ruvds/blog/419997/
  как минимум нужно обернуть в IIFE содержимое файлов first-set-cards.js и script.js


  Можно лучше:
  - не делать одну функцию submitHandlerForm для обработки отправки разных форм, а
  сделать в классах UserProfilePopup и NewPlacePopup сделать методы отправки формы, 
  в конструкторы UserProfilePopup и NewPlacePopup передавать userInfo и fotoSet, чтобы
  он могли вызвать их методы для сохранения данных

  - не обязательно привязывать методы к контексту через bind если нет угрозы потери контекста, как
  сейчас это сделано в классе PlacesList

  - класс FormValidator сейчас завязан на конкретные DOM элементы на странице, его невозможно никак 
  переиспользовать, чтобы сделать валидацию если появятся ещё формы
  В его конструктор лучше передавать формы и валидация настраивается для формы переданной в конструктор

*/
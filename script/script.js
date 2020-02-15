(function () {  
  /* eslint-disable no-undef */  
  const container = document.querySelector('.places-list');
  const popupPersonal = document.querySelector('.popup__personal');
  const popupPlace = document.querySelector('.popup__place');
  const popupScr = document.querySelector('.popup__scrplacecard');
  const popupAvatar = document.querySelector('.popup__avatar');
  const popupConfirmation = document.querySelector('.popup__confirmation');
  const scrollElemUp = document.querySelector('.arrowup');
  const scrollElemDown = document.querySelector('.arrowdown');

  const errorWarningsArr = {
    ru: {
      validationLenght: 'Должно быть от 2 до 30 символов',
      validationEmpty: 'Это обязательное поле',
      validationLink: 'Здесь должна быть ссылка'
    }
  };

  const config = {
    baseUrl: 'http://95.216.175.5/cohort8',
    headers: {
      authorization: 'ab1f5d7b-d19e-4687-bf7d-6ba28ced174d',
      'Content-Type': 'application/json' 
    }
  };   
   
  const api = new Api(config);
  const createCard = (...args) => new Card(...args);
  const confirm = () => new Confirmation(popupConfirmation);
  const cardList = () => new CardList({
    container, createCard, api, confirm 
  });
  const firstFotoSet = new CardList({
    container, createCard, api, confirm 
  });  
  const formValidator = () => new FormValidator(errorWarningsArr.ru);     
  const userInfo = new UserInfo({}, api);
  const userInformation = () => new UserInfo({}, api);

  /* have to new all popups */
  const popupUserProfile = new UserProfilePopup({ 
    popupPersonal, formValidator, userInformation 
  });
  const popupNewPlace = new NewPlacePopup({
    popupPlace, formValidator, api, cardList 
  });  
  const popupDisplayImage = new ScrImagePopup({ popupScr, container });
  const popupAva = new Avatar({ popupAvatar, formValidator, api });

  /* start dysplay */
  userInfo.updateUserInfo();
  firstFotoSet.firstSetCards();  
  
  function goUp() {
    window.scrollTo(0, 0);    
  }

  function goDown() {    
    window.scrollTo(0, document.body.scrollHeight);
  }

  scrollElemUp.addEventListener('click', goUp);
  scrollElemDown.addEventListener('click', goDown);
}());

/**
* Здравствуйте.
* Надо исправить: Название файлов должна быть идентично названию класса Например если класс назвается FormValidator, то файл должен называться FormValidator

/* (Здравствуйте! Было замечание по предыдущему спринту 8 - 
  " - для разделения слов в названиях файлов следует использовать знак "-", 
  а не писать слитно, например places-list.js".) */
/*
 *  Надо исправить: Для начала вам необходимо создать класс API в котором каждый метод
 * Все запросы должны быть методами этого класс. Если мы получаем список карточек, то в классе должен быть метод getInitialCards
 * Если профиль пользователя то getUserInfo и так далее
 *  *
  * Самый правильный способ, как пример указан в брифе
  // url лучше передавать при инициализации класса в конструктор
  fetch(`url/cards`, {
    headers: {
   // ключ который надо передавать в параметрах
   authorization: authorization
     }
     })
   .then(res => {
    if (res.ok) {
       return res.json();
     }
     // если ошибка, переходим в catch
     return Promise.reject(`Ошибка: ${res.status
     }`);
     })
   .then((result) => {
     // обрабатываем результат
     // а точнее возвращает результат работы прямо в тот класс откуда вызывали
   })
   .catch((err) => {
   console.log(err); // выведем ошибку в консоль
   });

Хочу заметить что данные авторизации лучше передать при создании класса API в ввиде объекта

  * Вызывать же методы класса Api лучше из других классов
  *
 * Стоит отметить, что реализации в классе API быть не должно. Точнее прямого взаимодействия. Методы могут вызываться
 * из других классов и возвращать данные, а работа с этими данными должны быть непосредственно в классах создаваемых в 8 спринте
 *
 * работа принимается только при исправлении всех "Надо исправить"
 *
*/
/**
 * Здравствуйте.
 * Я же написал как у вас должно быть в методе классе апи
 * Продублирую
 *  * Самый правильный способ, как пример указан в брифе
  // url лучше передавать при инициализации класса в конструктор
  fetch(`url/cards`, {
    headers: {
   // ключ который надо передавать в параметрах
   authorization: authorization
     }
     })
   .then(res => {
    if (res.ok) {
       return res.json();
     }
     // если ошибка, переходим в catch
     return Promise.reject(`Ошибка: ${res.status
     }`);
     })
   .then((result) => {
     // обрабатываем результат
     // а точнее возвращает результат работы прямо в тот класс откуда вызывали
   })
   .catch((err) => {
   console.log(err); // выведем ошибку в консоль
   });

Хочу заметить что данные авторизации лучше передать при создании класса API в ввиде объекта

 *
   * Класс Api это отдельный класс который ничего не знает о других классах и методах
   * Вы можете только получать данные из этого класса и использовать эти данные.
   * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
   * скажу что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
   * Который только возвращает данные, а вы можите получить только обращась к этим методам.
   * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратитьсяк методам.
   * Отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
   * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
   *
 *
 *  Надо исправить: Где класс CardList ???
 *
 * Что будете делать если  название 'Должно быть от 2 до 30 символов' вам понадобится в 4 классах ?
 *
 * Как я вижу правилое взаимодействие между классами
 * * Примерно такое должно получиться:
 const container = document.querySelector('.places-list'); // место куда записывать карточки
 const cards = []; // массив с карточками
 const words = {ru: { validationLenght: 'Должно быть от 2 до 30 символов'}};
 const config = {authorization: "ключ",ip: "http://95.216.175.5/cohort7",}; // настройки
 const api = new Api(config);
 const card = new Card(api);
 const validation = new FormValidator({words:words});
 const cardList = new CardList({card:card, api:api});
 cardList.render(container, cards);
 const popupCard = new PopupCard({ validation:validation,api:api});
 const popupProfile = new PopupProfile({ validation:validation,api:api});
 const popupImage = new PopupImage();
  *
 *
    * работа принимается только при исправлении всех "Надо исправить"
    *
   */

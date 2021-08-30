const modal = document.querySelector('.popup.editProfile');
const textName = document.querySelector('[name="text_name"]');
const textJob = document.querySelector('[name="text_job"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formElement = modal.querySelector('[name="form-edit"]')
const openBtn = document.querySelector('.profile__edit');
const closeBtn = document.querySelector('.popup.editProfile .popup__close');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;
const modalAddCard = document.querySelector('.popup.addCard');
const btnAddCard = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('[name="card_title"]');
const cardLink = document.querySelector('[name="card_link"]');
const closeAddCard = document.querySelector('.addCard__close');
const formAddCard = document.querySelector('[name="form-addCard"]')
const elementTitle = document.querySelector('.element__title');
const elementImg = document.querySelector('.element__img');
const imgModalOpen = document.querySelector('.popup-img');
const popupImg = document.querySelector('.popup-img__img');
const popupImgTitle = document.querySelector('.popup-img__title');
const popupImgClose = document.querySelector('.popup-img__close');



//функция открывает popup
function popupOpen (popup, cb) {
  popup.classList.add('popup_open');
  if (typeof cb === 'function') {
    cb();
  }
}


//функция закрывает popup
function popupClose (popup) {
  popup.classList.remove('popup_open')
}


//функция колбэк для открытия попапа редактирования формы
//передает значения в форму
function editProfileModalOpenCB() { 
  textName.value = profileName.textContent;
  textJob.value = profileJob.textContent
}

//функция отправки формы редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = textName.value;
  profileJob.textContent = textJob.value;
  popupClose(modal);
}


//передача данных из формы
formElement.addEventListener('submit', formSubmitHandler);
//открытие попапа редактирования профиля
openBtn.addEventListener('click', function (){
  popupOpen(modal, editProfileModalOpenCB)
});
//закрытие попапа редактирования профиля
closeBtn.addEventListener('click', function (){
  popupClose(modal);
});


//добавление новых карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
]; 

//функция открытия картинки
function openModalImg(src, title) {
  imgModalOpen.classList.add('popup-img_open');
  popupImg.src = src;
  popupImgTitle.textContent = title;  
}

//функция закрывает модалку картинки
function modalImgClose() {
  imgModalOpen.classList.remove('popup-img_open');
}

popupImgClose.addEventListener('click', modalImgClose);

//функция добавления карточки
function addCard(name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const img = element.querySelector('.element__img');
  img.src = link;
  img.alt = `Фотография ${name}`;
  img.title = name;
  img.addEventListener('click', function (evt) {
    const openImg = evt.target
    openModalImg(openImg.src, openImg.title);
  })
  
  element.querySelector('.element__title').textContent = name;
  elements.append(element);

  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  //удаление карточки
  const deleteElement = element.querySelector('.element__dlt');
  deleteElement.addEventListener('click', function (evt) {
    const elementItem = evt.target.closest('.element');
    elementItem.remove();
  }); 

  
}

initialCards.forEach(item => {
  addCard(item.name, item.link, item.alt);
});


//функция колбэк очищения полей формы добавления карточки
function clearValueCard () {
    cardTitle.value = '';
    cardLink.value = '';
};


//функция отправки формы добавления карточки
function formSubmitAddCard(evt) {
  evt.preventDefault();
  addCard(cardTitle.value, cardLink.value);
  popupClose(modalAddCard);
}

//передача данных из формы добавления карточки
formAddCard.addEventListener('submit', formSubmitAddCard);
//открытие попапа добавления новой карточки
btnAddCard.addEventListener('click', function(){
  popupOpen(modalAddCard, clearValueCard)
});
//закрытие попапа добавления новой карточки
closeAddCard.addEventListener('click', function(){
  popupClose(modalAddCard);
});


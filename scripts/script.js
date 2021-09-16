const popupEditProfile = document.querySelector('[name="edit_profile"]');
const inputName = document.querySelector('[name="text_name"]');
const inputJob = document.querySelector('[name="text_job"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const formEditProfile = popupEditProfile.querySelector('[name="form-edit"]')
const openBtnPopupEditProfile = document.querySelector('.profile__edit');
const closeBtnPopupEditProfile = popupEditProfile.querySelector('.popup__close');
const container = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;
const modalAddCard = document.querySelector('.popup.addCard');
const btnAddCard = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('[name="card_title"]');
const cardLink = document.querySelector('[name="card_link"]');
const closeAddCard = document.querySelector('.addCard__close');
const formAddCard = document.querySelector('[name="form-addCard"]')
const popupImg = document.querySelector('.popup-img');
const popupImgImage = document.querySelector('.popup-img__img');
const popupImgTitle = document.querySelector('.popup-img__title');
const popupImgClose = document.querySelector('.popup-img__close');
const cardSubmitBtn = document.querySelector('[name="submit_card"]');



//функция открывает popup
function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEsc);
}

//функция закрывает popup
function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEsc);
}

//функция закрытия popup по нажатию Esc
function closePopupEsc(evt) {
  if (evt.key == "Escape") {
    const popup = document.querySelector('.popup_open');
    closePopup(popup);
  }
}


//функция закрытия popup по overlay
function closePopupOverlay(evt) {
  if (evt.target == evt.currentTarget) {
    const popup = document.querySelector('.popup_open');
    closePopup(popup);
  }
}

//функция передает значения в форму при открытии попапа
function passValueModalEditProfile() {
  inputName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
}

//функция обработчик отправки формы редактирования профиля
function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupEditProfile);
}


//передача данных из формы
formEditProfile.addEventListener('submit', editProfileFormSubmitHandler);

//открытие попапа редактирования профиля
function openPopupEditProfile() {
  openPopup(popupEditProfile);
  passValueModalEditProfile();
}
openBtnPopupEditProfile.addEventListener('click', openPopupEditProfile);

//закрытие попапа редактирования профиля по клику на кнопку закрытия
function closePopupEditProfile() {
  closePopup(popupEditProfile);
}
closeBtnPopupEditProfile.addEventListener('click', closePopupEditProfile);

//закрытие попапа редактирования профиля по overlay
popupEditProfile.addEventListener('click', closePopupOverlay);


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



//функция передает значения при открытии картинки
function passValueModalImg(img) {
  popupImgImage.src = img.src;
  popupImgTitle.textContent = img.title;
}


//функция создания карточки
function createCard(name, link) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const img = element.querySelector('.element__img');
  img.src = link;
  img.alt = `Фотография ${name}`;
  img.title = name;

  element.querySelector('.element__title').textContent = name;

  //обработчик лайков
  element.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });

  //открытие картинки
  img.addEventListener('click', function popupOpenImg(evt) {
    openPopup(popupImg);
    passValueModalImg(evt.target);
  })

  //удаление карточки
  const deleteElement = element.querySelector('.element__dlt');
  deleteElement.addEventListener('click', function (evt) {
    const elementItem = evt.target.closest('.element');
    elementItem.remove();
  });

  return element
}



//функция добавляет карточку в разметку
function renderCard(name, link) {
  const element = createCard(name, link);
  container.prepend(element);
}



//закрытие картинки по кнопке закрытия
function closePopupImg() {
  closePopup(popupImg);
}
popupImgClose.addEventListener('click', closePopupImg);

//закрытие картинки по overlay
popupImg.addEventListener('click', closePopupOverlay);



initialCards.forEach(item => {
  renderCard(item.name, item.link, item.alt);
});


//функция очищения полей формы добавления карточки
function clearValueCard() {
  cardTitle.value = '';
  cardLink.value = '';
  cardSubmitBtn.setAttribute('disabled', true);
  cardSubmitBtn.classList.add('form__submit_disabled');
};


//функция отправки формы добавления карточки
function submitFormAddCard(evt) {
  evt.preventDefault();
  renderCard(cardTitle.value, cardLink.value);
  closePopup(modalAddCard);
}



//передача данных из формы добавления карточки
formAddCard.addEventListener('submit', submitFormAddCard);

//открытие попапа добавления новой карточки
function openPopupAddCard() {
  openPopup(modalAddCard);
  clearValueCard();
}
btnAddCard.addEventListener('click', openPopupAddCard);

//закрытие попапа добавления новой карточки
function closePopupAddCard() {
  closePopup(modalAddCard);
}
closeAddCard.addEventListener('click', closePopupAddCard);

//закрытие попапа добавления новой карточки по overlay
modalAddCard.addEventListener('click', closePopupOverlay);
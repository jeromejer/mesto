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
const modalAddCard = document.querySelector('[name="add_card"]');
const btnAddCard = document.querySelector('.profile__add-button');
const cardTitle = document.querySelector('[name="card_title"]');
const cardLink = document.querySelector('[name="card_link"]');
const closeAddCard = document.querySelector('[name="add_card_close"]');
const formAddCard = document.querySelector('[name="form-add-сard"]')
export const popupImg = document.querySelector('.popup-img');
export const popupImgImage = document.querySelector('.popup-img__img');
export const popupImgTitle = document.querySelector('.popup-img__title');
const popupImgClose = document.querySelector('.popup-img__close');
import Card from "./Сard.js";
import FormValidator from "./FormValidator.js";




//функция открывает popup
export function openPopup(popup) {
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
    const popup = evt.target;
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


//данные новых карточек
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



//функция добавляет карточку в разметку
function renderCard(data) {
  const card = new Card(data, '#element-template')
  
  const element = card.generateCard()
  container.prepend(element);
}

//создаем карточки в разметке 
initialCards.forEach(renderCard)


//закрытие картинки по кнопке закрытия
function closePopupImg() {
  closePopup(popupImg);
}
popupImgClose.addEventListener('click', closePopupImg);

//закрытие картинки по overlay
popupImg.addEventListener('click', closePopupOverlay);



//функция очищения полей формы добавления карточки
function clearValueCard() {
  formAddCard.reset();
  formAddCardValidator._submiClassBtnDisabled();
};


//функция отправки формы добавления карточки
function submitFormAddCard(evt) {
  evt.preventDefault();
  const data = {
    name: cardTitle.value, 
    link: cardLink.value
  }
  renderCard(data);
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




//элементы валидации формы
const objForm = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitBtnSelector: '.form__submit',
  errorTextClass: 'form__error_active',
  errorInputClass: 'form__text_error',
  formSubmitClassDisabled: 'form__submit_disabled'
}

//валидация формы редактирования профиля
const formEditValidator = new FormValidator(objForm, formEditProfile)
formEditValidator.enableValidation()

//валидация формы добавления новой карточки
const formAddCardValidator = new FormValidator(objForm, formAddCard)
formAddCardValidator.enableValidation()
import {
  openBtnPopupEditProfile,
  objForm,
  initialCards
} from "../utils/constants.js"
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css"



//-----форма редактирования профиля-----/

//создаём инфо пользователя
const userInfo = new UserInfo({
  userName: '.profile__name',
  userJob: '.profile__job'
});

//создаем попап формы редактирования профиля
const popupWithFormEditProfile = new PopupWithForm('#popupEditProfile',

  (data) => {
    userInfo.setUserInfo(data);
  });

popupWithFormEditProfile.setEventListeners()

//валидация формы редактирования профиля
const formEditValidator = new FormValidator(objForm, popupWithFormEditProfile.form)
formEditValidator.enableValidation()


//обработчик, который при открытии попапа редактирования профиля
//передает инфо пльзователя со страницы в форму
const openEditProfilePopupHandler = () => {
  const data = userInfo.getUserInfo()
  for (let key in data) {
    popupWithFormEditProfile.form.elements[key].value = data[key]
  }
  formEditValidator.resetValidation();
  popupWithFormEditProfile.open()
}
//слушатель клика по кнокпи редактирования профиля
openBtnPopupEditProfile.addEventListener('click', openEditProfilePopupHandler)


//-----создание новой карточки-----/

//создаём попап с картинкой
const popupWithImage = new PopupWithImage('.popup-img')
popupWithImage.setEventListeners()


//функция создаёт карточку
function createCard(data) {
  const handleCardClick = popupWithImage.open.bind(popupWithImage);
  const card = new Card({ data, handleCardClick }, '#element-template');
  return card.generateCard()
}

//функция добавляет карточку в разметку
function renderCard(data) {
  const element = createCard(data);
  return element
}


//создаем новую карточку из класса карт
const section = new Section(
  {
    items: initialCards,
    renderer: renderCard
  },
  '.elements');

section.setItem();


//-----форма создания новой карточки-----/


//создаем попап формы добавления новой карточки
const popupWithFormCard = new PopupWithForm('#popupAddCard',

  ({ card_title, card_link }) => {
    const data = {
      name: card_title,
      link: card_link
    };
    section.addItem(renderCard(data))
  });

popupWithFormCard.setEventListeners()

//валидация формы добавления новой карточки
const formAddCardValidator = new FormValidator(objForm, popupWithFormCard.form)
formAddCardValidator.enableValidation()

const btnAddCard = document.querySelector('.profile__add-button');

btnAddCard.addEventListener('click', () => {
  formAddCardValidator.resetValidation();
  popupWithFormCard.open();
})
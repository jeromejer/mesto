import {
  openBtnPopupEditProfile,
  objForm,
  initialCards,
  avatarImg
} from "../utils/constants.js"
import Card from "../components/Сard.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupDeleteCard from "../components/popupDeleteCard.js";
import Api from "../components/Api.js";
import "./index.css"

//------------API------------/
const api = new Api({
  endpoint: 'https://mesto.nomoreparties.co/v1/cohort-29',
  headers: {
    authorization: '78fb05fc-0800-40e0-9053-b1d17c19d9a5',
    'Content-type': 'application/json'
  }
})




//-----форма редактирования профиля-----/

//создаём инфо пользователя
const userInfo = new UserInfo({
  userName: '.profile__name',
  userJob: '.profile__job',
  avatar: '.profile__avatar-img'
});

api.getUserData()
.then((data) => {
  const {name, about, avatar} = data
  
  userInfo.setUserInfo({text_name: name, text_job: about})
  userInfo.setAvatar(avatar)
})
.catch((err) => {
  console.log(err)
})

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
  
  const card = new Card({ 
    data, 
    handleCardClick, 
    deleteHandler: () => {
      popupConfirmDelete.open(card);
    }
  }, '#element-template');
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
    items: [],
    renderer: renderCard
  },
  '.elements');

section.setItem();

api.getCardsData()
.then((data) => {
  data.forEach((item) => {
    const {link, name} = item;
    section.addItem(renderCard({name, link}))
  }) 
})


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



//-----попап подтверждения удаления карточки-----/
const popupConfirmDelete = new PopupDeleteCard('#popupDltCard',  deleteConfirm)
popupConfirmDelete.setEventListeners()


function deleteConfirm(evt, card) {
  card.deleteCard();
  popupConfirmDelete.close();
}


//-----попап редактирования аватарки----/
const popupEditAvatar = new PopupWithForm('#popupUpdateAvatar', (data) => {
  console.log(data)
  avatarImg.src = data.url_avatar
}
  );

popupEditAvatar.setEventListeners();

//валидация формы добавления аватара
const updateAvatarValidator = new FormValidator(objForm, popupEditAvatar.form);
updateAvatarValidator.enableValidation();

const btnUpdateAvatar= document.querySelector('.profile__avatar');

btnUpdateAvatar.addEventListener('click', () => {
  updateAvatarValidator.resetValidation();
  popupEditAvatar.open();
})
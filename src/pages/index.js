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

let userId;



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




Promise.all([api.getUserData(), api.getCardsData()])
.then(([userData, cardsData]) => {
  // user
  const { name, about, avatar, _id } = userData
  userInfo.setUserInfo({ textName: name, textJob: about})
  userInfo.setAvatar(avatar)
  userId = _id

  // cards
  section.setItems(cardsData)
})
.catch((err) => {
  console.log(err)
})



//создаем попап формы редактирования профиля
const popupWithFormEditProfile = new PopupWithForm('#popupEditProfile',
  (data) => {
    popupWithFormEditProfile.loading(true);
    api.updateUserData({ name: data.text_name, about: data.text_job })
      .then((data) => {
        const { name, about } = data
        userInfo.setUserInfo({ textName: name, textJob: about })
        popupWithFormEditProfile.close();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupWithFormEditProfile.loading(false);
      })
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
    handleLike: () => {
      const status = card.getLikeStatus();
      if (status) {
        api.deleteLike(card.getCardId())
          .then((data) => {
            card.setLikes(data.likes);
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        api.setLike(card.getCardId())
          .then((data) => {
            card.setLikes(data.likes);
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    deleteHandler: () => {
      popupConfirmDelete.open(card);
    }
  },
    '#element-template',
    userId);
  return card.generateCard()
}

//функция добавляет карточку в разметку
function renderCard(data) {
  const element = createCard(data);
  return element
}


//создаем новую карточку из класса карт

const section = new Section(renderCard, '.elements');



//-----форма создания новой карточки-----/


//создаем попап формы добавления новой карточки
const popupWithFormCard = new PopupWithForm('#popupAddCard',
  (data) => {
    popupWithFormCard.loading(true)
    api.addCard({ name: data.card_title, link: data.card_link })
      .then((data) => {
        section.addItem(data)
        popupWithFormCard.close();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupWithFormCard.loading(false);
      })
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
const popupConfirmDelete = new PopupDeleteCard('#popupDltCard', deleteConfirm)
popupConfirmDelete.setEventListeners()


function deleteConfirm(evt, card) {
  api.deleteCard(card.getCardId())
    .then(() => {
      card.deleteCard();
      popupConfirmDelete.close();
    })
    .catch((err) => {
      console.log(err)
    })
}


//-----попап редактирования аватарки----/
const popupEditAvatar = new PopupWithForm('#popupUpdateAvatar', (data) => {
  popupEditAvatar.loading(true)
  api.updateAvatar(data.url_avatar)
    .then((data) => {
      avatarImg.src = data.avatar
      popupEditAvatar.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupEditAvatar.loading(false);
    })
}
);

popupEditAvatar.setEventListeners();

//валидация формы добавления аватара
const updateAvatarValidator = new FormValidator(objForm, popupEditAvatar.form);
updateAvatarValidator.enableValidation();

const btnUpdateAvatar = document.querySelector('.profile__avatar');

btnUpdateAvatar.addEventListener('click', () => {
  updateAvatarValidator.resetValidation();
  popupEditAvatar.open();
})
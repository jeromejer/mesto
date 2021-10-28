const openBtnPopupEditProfile = document.querySelector('.profile__edit');
const popupImg = document.querySelector('.popup-img');
const popupImgImage = document.querySelector('.popup-img__img');
const popupImgTitle = document.querySelector('.popup-img__title');
const avatarImg = document.querySelector('.profile__avatar-img');

//элементы валидации формы
const objForm = {
    formSelector: '.form',
    inputSelector: '.form__text',
    submitBtnSelector: '.form__submit',
    errorTextClass: 'form__error_active',
    errorInputClass: 'form__text_error',
    formSubmitClassDisabled: 'form__submit_disabled'
  }

import arkhyzImage from "../images/cards/arkhyz.jpeg";
import сhelyabinskImage from "../images/cards/chelyabinsk-oblast.jpeg";
import ivanovo from "../images/cards/ivanovo.jpeg";
import camchatka from "../images/cards/kamchatka.jpeg";
import cholmogorsk from "../images/cards/kholmogorsky-rayon.jpeg";
import baykal from "../images/cards/baikal.jpeg";


//данные новых карточек
const initialCards = [
    {
      name: 'Архыз',
      link: arkhyzImage,
    },
    {
      name: 'Челябинская область',
      link: сhelyabinskImage,
    },
    {
      name: 'Иваново',
      link: ivanovo,
    },
    {
      name: 'Камчатка',
      link: camchatka,
    },
    {
      name: 'Холмогорский район',
      link: cholmogorsk,
    },
    {
      name: 'Байкал',
      link: baykal,
    }
  ];

 export {
     openBtnPopupEditProfile, 
     popupImg,
     popupImgImage,
     popupImgTitle,
     objForm,
     initialCards,
     avatarImg

} 
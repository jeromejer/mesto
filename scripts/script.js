let modal = document.querySelector('.popup.editProfile');
let textName = document.querySelector('[name="text_name"]');
let textJob = document.querySelector('[name="text_job"]');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = modal.querySelector('[name="form-edit"]')
let openBtn = document.querySelector('.profile__edit');
let closeBtn = document.querySelector('.popup.editProfile .popup__close');
let elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element-template').content;
let modalAddCard = document.querySelector('.popup.addCard');
let btnAddCard = document.querySelector('.profile__add-button');
let cardTitle = document.querySelector('[name="card_title"]');
let cardLink = document.querySelector('[name="card_link"]');
let closeAddCard = document.querySelector('.addCard__close');
let formAddCard = document.querySelector('[name="form-addCard"]')
let elementTitle = document.querySelector('.element__title');
let elementImg = document.querySelector('.element__img');
let imgModalOpen = document.querySelector('.popup-img');
let popupImg = document.querySelector('.popup-img__img');
let popupImgTitle = document.querySelector('.popup-img__title');
let popupImgClose = document.querySelector('.popup-img__close');



//функция открывает popup
function openModal() { 
  modal.classList.add('popup_open');
  textName.value = profileName.textContent;
  textJob.value = profileJob.textContent
}

//функция закрывает popup
function modalClose() {
  modal.classList.remove('popup_open');
}

//функция отправки формы
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = textName.value;
  profileJob.textContent = textJob.value;
  modalClose();
}

formElement.addEventListener('submit', formSubmitHandler);
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', modalClose);


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

  const deleteElement = element.querySelector('.element__dlt');
  deleteElement.addEventListener('click', function (evt) {
    const elementItem = evt.target.closest('.element');
    elementItem.remove();
  }); 

  
}

initialCards.forEach(item => {
  addCard(item.name, item.link, item.alt);
});



//функция открытия формы добавления карточки

function openAddCard() { 
  modalAddCard.classList.add('popup_open');
  cardTitle.value = '';
  cardLink.value = '';
}

//функция закрывает окно добавления новой карточки
function modalCloseAddCard() {
  modalAddCard.classList.remove('popup_open');
}

//функция отправки формы добавления карточки
function formSubmitAddCard(evt) {
  evt.preventDefault();
  addCard(cardTitle.value, cardLink.value);
  modalCloseAddCard();

}

formAddCard.addEventListener('submit', formSubmitAddCard);
btnAddCard.addEventListener('click', openAddCard);
closeAddCard.addEventListener('click', modalCloseAddCard);

//функция удаления элемента

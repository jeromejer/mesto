let modal = document.querySelector('.popup');
let textName = document.querySelector('[name="text_name"]');
let textJob = document.querySelector('[name="text_job"]');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let formElement = modal.querySelector('.form')
let openBtn = document.querySelector('.profile__edit');
let closeBtn = document.querySelector('.popup__close');

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
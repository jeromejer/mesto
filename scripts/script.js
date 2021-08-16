let modal = document.querySelector('.popup');

let openBtn = document.querySelector('.profile__edit');
openBtn.addEventListener('click', function () {
  modal.classList.add('popup_open');
})

function modalClose() {
  modal.classList.remove('popup_open');
}

let closeBtn = document.querySelector('.popup__close');
closeBtn.addEventListener('click', modalClose)

let formElement = modal.querySelector('.form')
let textName = document.querySelector('.form__text_name');
let textJob = document.querySelector('.form__text_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = textName.value;
  profileJob.textContent = textJob.value; 
  modalClose();
}

formElement.addEventListener('submit', formSubmitHandler);
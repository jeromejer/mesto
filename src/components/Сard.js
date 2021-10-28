export default class Card {
    constructor({ data, handleCardClick, deleteHandler, handleLike}, cardSelector, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likesArray = data.likes;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._deleteHandler = deleteHandler;
        this._handleLike = handleLike;
        this._ownerId = data.owner._id;
        this._userId = userId
        this._cardId = data._id

    }


    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }

    //обработчик лайков
    _like(evt) {
      evt.target.classList.toggle('element__like_active');
    }

    //подсчет лайков
    _updateLikes() {
        this._likes.textContent = this._likesArray.length || 0
    }

    setLikes(likes) {
        this._likesArray = likes;
        this._updateLikes();
        this._updateLikeStatus();
    }

    getLikeStatus() {
        return this._likesArray.find((user) => {
            return user._id === this._userId
        })
    }

    _updateLikeStatus() {
        const status = this.getLikeStatus();

        this._likesBtn.classList.remove('element__like_active');

        if (status) {
            this._likesBtn.classList.add('element__like_active')
        } 

    }

    //удаление карточки
    deleteCard() {
        this._element.remove()
    }

    //функция открытия картинки
    _handleOpenPopup() {
        this._handleCardClick({
            src: this._img.src,
            title: this._img.title
        })
    }

    getCardId() {
        return this._cardId
    }
    
    //установка слушателей 
    _setEventListeners() {
        //открытие картинки
        this._img.addEventListener('click', () => {
            this._handleOpenPopup();
        });

        //удаление карточки
        this._element.querySelector('.element__dlt').addEventListener('click', (evt) => {
           this._deleteHandler(evt);
        });


        //лайк
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._handleLike();
        });
    }

    //делаем невидимой иконку удаления карточи, добавленной другими юзерами 
    _displayIconDltCard() {
        if (this._ownerId !== this._userId) {
          this._iconDltCard.style.display = 'none'
          }
      };


    generateCard() {
        //создаем карточку из шаблона
        this._element = this._getTemplate();
        this._img = this._element.querySelector('.element__img');
        this._likes = this._element.querySelector('.element__number-likes');
        this._iconDltCard = this._element.querySelector('.element__dlt');
        this._likesBtn = this._element.querySelector('.element__like');

        this._displayIconDltCard();

        //передаем данные в карточку
        this._img.src = this._link;
        this._img.alt = `Фотография ${this._name}`;
        this._img.title = this._name;
        this.setLikes(this._likesArray)

        this._element.querySelector('.element__title').textContent = this._name;

        //вызов слушателей 
        this._setEventListeners();

        return this._element;
    }


}
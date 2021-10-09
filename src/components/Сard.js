export default class Card {
    constructor({ data, handleCardClick }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;

    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .cloneNode(true);

        return cardElement;
    }

    //обработчик лайков
    _like(evt) {
        evt.target.classList.toggle('element__like_active');
    }

    //удаление карточки
    _deleteCard(evt) {
        evt.target.closest('.element').remove();
    }

    //функция открытия картинки
    _handleOpenPopup() {
        this._handleCardClick({
            src: this._img.src,
            title: this._img.title
        })
    }

    //установка слушателей 
    _setEventListeners() {
        //открытие картинки
        this._img.addEventListener('click', () => {
            this._handleOpenPopup();
        });

        //удаление карточки
        this._element.querySelector('.element__dlt').addEventListener('click', (evt) => {
            this._deleteCard(evt);
        });

        //лайк
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            this._like(evt);
        });
    }



    generateCard() {
        //создаем карточку из шаблона
        this._element = this._getTemplate();
        this._img = this._element.querySelector('.element__img');

        //передаем данные в карточку
        this._img.src = this._link;
        this._img.alt = `Фотография ${this._name}`;
        this._img.title = this._name;

        this._element.querySelector('.element__title').textContent = this._name;

        //вызов слушателей 
        this._setEventListeners();

        return this._element;


    }


}
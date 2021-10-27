import Popup from "./Popup.js";
export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, cbFormSubmit) {
        super(popupSelector)
        this._cbFormSubmit = cbFormSubmit;
        this._submitBtnDelete = this._popup.querySelector('.popup__submit');
        

    }


    //добавляем обработчик сабмита формы при закрытии
    setEventListeners() {
        super.setEventListeners();
        this._submitBtnDelete.addEventListener('click', (evt) => {
            
            evt.preventDefault();
            this._cbFormSubmit(evt, this._card);
            this.close();
        })
    }

    open(card) {
        this._card = card;
        super.open();
    }

}

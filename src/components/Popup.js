export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupOpenClass = 'popup_open';
        this._popupCloseBtnClass = 'popup__close'

        this._closeHandle = this._handleEscClose.bind(this)
    }

    open() {
        this._popup.classList.add(this._popupOpenClass);
        document.addEventListener('keydown', this._closeHandle);
    }

    close() {
        this._popup.classList.remove(this._popupOpenClass);
        document.removeEventListener('keydown', this._closeHandle);
    }

    _handleEscClose(evt) {
        if (evt.key == "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains(this._popupOpenClass)) {
                this.close();
            }
            if (evt.target.classList.contains(this._popupCloseBtnClass)) {
                this.close()
            }
        })
    }
}
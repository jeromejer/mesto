import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor(popupSelector, cbFormSubmit) {
        super(popupSelector)
        this._cbFormSubmit = cbFormSubmit;
        this.form = this._popup.querySelector('.form');
        this._inputs = Array.from(this.form.querySelectorAll('.form__text'));
        this._popupBtn = this._popup.querySelector('.form__submit');
        this._popupBtnText = this._popupBtn.textContent;
    }

    //получаем данные из всех инпутов формы
    _getInputValues() {
        const formValues = {};
        this._inputs.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }


    //добавляем обработчик сабмита формы при закрытии
    setEventListeners() {
        super.setEventListeners();
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._cbFormSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this.form.reset();
    }

    loading(isLoading, message = 'Сохранение...') {
        if(isLoading) {
            this._popupBtn.textContent = message
        } else {
            this._popupBtn.textContent = this._popupBtnText
        }
    }
}

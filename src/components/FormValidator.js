export default class FormValidator {
  constructor(obj, formElement) {

    this._formSelector = obj.formSelector;
    this._inputSelector = obj.inputSelector;
    this._submitBtnSelector = obj.submitBtnSelector;
    this._errorTextClass = obj.errorTextClass;
    this._errorInputClass = obj.errorInputClass;
    this._formSubmitClassDisabled = obj.formSubmitClassDisabled;
    this._formElement = formElement;

    this._inputs = this._searchInputsForm();
    this._submitBtn =  this._searchBtnForm(); 
  }



  //если инпут не прошел валидацию, появляется сообщение об ошибке
  _showInputError(input) {
    const inputName = input.getAttribute('name');
    const errorPlace = document.getElementById(`${inputName}-error`);
    errorPlace.textContent = input.validationMessage;
    errorPlace.classList.add(this._errorTextClass);
    input.classList.add(this._errorInputClass);
  }


  //если инпут валидирован, сообщение об ошибке убирается
  _hideInputError(input) {
    const inputName = input.name;
    const errorPlace = document.getElementById(`${inputName}-error`);
    errorPlace.textContent = '';
    errorPlace.classList.remove(this._errorTextClass);
    input.classList.remove(this._errorInputClass);
  }


  //функция сброса ошибок с полей формы
  resetValidation() {
    this._toggleButtonStatus();

    this._inputs.forEach((input) => {
      this._hideInputError(input)
    });
    

  }

  //функция валидации инпутов
  _validateInput(input) {
    if (input.validity.valid) {
      this._hideInputError(input);

    } else {
      this._showInputError(input);
    }
  }

  //функция находит все инпуты в форме
  _searchInputsForm() {
    return Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  //функция находит кнопку в форме 
  _searchBtnForm() {
    return this._formElement.querySelector(this._submitBtnSelector)
  }

  //функция наложения валидаций на все формы 
  _validateForm() {
    this._formElement.addEventListener('submit', (evt) => evt.preventDefault())


    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._validateInput(input);

        this._toggleButtonStatus();
      })
    })
  }

  //функция валидации формы
  _hasInvalidInput() {
    return this._inputs.every(function (input) {
      return input.validity.valid
    })
  }

  //функция делает кнопку неактивной
  _submiClassBtnDisabled() {
    this._submitBtn.setAttribute('disabled', true);
    this._submitBtn.classList.add(this._formSubmitClassDisabled);
  }

  //функция удаляет класс неактивной кнопки и делает ее активной
  _enableSubmitButton() {
    this._submitBtn.removeAttribute('disabled');
    this._submitBtn.classList.remove(this._formSubmitClassDisabled);
  }

  //функция делает кнопку активной или неактивной 
  _toggleButtonStatus() {
    if (this._hasInvalidInput()) {
      this._enableSubmitButton();
    } else {
      this._submiClassBtnDisabled();
    }
  }


  enableValidation() {
    this._validateForm();
  }


}





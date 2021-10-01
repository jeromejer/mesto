export default class FormValidator {
    constructor(obj, formElement) {

        this._formSelector = obj.formSelector;
        this._inputSelector = obj.inputSelector;
        this._submitBtnSelector = obj.submitBtnSelector;
        this._errorTextClass = obj.errorTextClass;
        this._errorInputClass = obj.errorInputClass;
        this._formSubmitClassDisabled = obj.formSubmitClassDisabled;
        this._formElement = formElement;
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
  
    const inputs = this._searchInputsForm(this._formElement);
  
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._validateInput(input);
  
        this._toggleButtonStatus(this._formElement);
      })
    })
  }

  //функция валидации формы
_hasInvalidInput(inputs) {
    return inputs.every(function (input) {
      return input.validity.valid
    })
  }

  //функция делает кнопку неактивной
_submiClassBtnDisabled() {
    const submitBtn = this._formElement.querySelector(this._submitBtnSelector)
    submitBtn.setAttribute('disabled', true);
    submitBtn.classList.add(this._formSubmitClassDisabled);
  }

  //функция удаляет класс неактивной кнопки и делает ее активной
_enableSubmitButton() {
    const submitBtn = this._formElement.querySelector(this._submitBtnSelector);
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.remove(this._formSubmitClassDisabled);
  }

  //функция делает кнопку активной или неактивной 
_toggleButtonStatus() {
    const inputs = this._searchInputsForm(this._formElement);
    if (this._hasInvalidInput(inputs)) {
      this._enableSubmitButton(this._formElement);
    } else {
      this._submiClassBtnDisabled(this._formElement);
    }
  }


  enableValidation(){
    this._validateForm(this._formElement)
  }


}





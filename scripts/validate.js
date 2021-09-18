const objForm = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitBtnSelector: '.form__submit',
  errorTextClass: 'form__error_active',
  errorInputClass: 'form__text_error',
  formSubmitClassDisabled: 'form__submit_disabled'
}


enableValidation(objForm);


function enableValidation({ formSelector, inputSelector, submitBtnSelector, errorTextClass, errorInputClass, formSubmitClassDisabled }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    validateForm(form, inputSelector, submitBtnSelector, errorTextClass, errorInputClass, formSubmitClassDisabled)
  });
}



//если инпут валидирован, сообщение об ошибке убирается
function hideInputError(input, errorTextClass, errorInputClass) {
  const inputName = input.name;
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.textContent = '';
  errorPlace.classList.remove(errorTextClass);
  input.classList.remove(errorInputClass);
}

//если инпут не прошел валидацию, появляется сообщение об ошибке
function showInputError(input, errorTextClass, errorInputClass) {
  const inputName = input.getAttribute('name');
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.textContent = input.validationMessage;
  errorPlace.classList.add(errorTextClass);
  input.classList.add(errorInputClass);
}

//функция валидации инпутов
function validateInput(input, errorTextClass, errorInputClass) {
  if (input.validity.valid) {
    hideInputError(input, errorTextClass, errorInputClass);

  } else {
    showInputError(input, errorTextClass, errorInputClass);
  }
}

//функция находит все инпуты в форме
function searchInputsForm(form, inputSelector) {
  return Array.from(form.querySelectorAll(inputSelector));
}

//функция находит кнопку в форме 
function searchBtnForm(form, submitBtnSelector) {
  return form.querySelector(submitBtnSelector)
}

//функция наложения валидаций на все формы 
function validateForm(form, inputSelector, submitBtnSelector, errorTextClass, errorInputClass, formSubmitClassDisabled) {
  form.addEventListener('submit', (evt) => evt.preventDefault())

  const inputs = searchInputsForm(form, inputSelector);

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      validateInput(input, errorTextClass, errorInputClass);

      toggleButtonStatus(form, inputSelector, submitBtnSelector, formSubmitClassDisabled);
    })
  })
}

//функция валидации формы
function hasInvalidInput(inputs) {
  return inputs.every(function (input) {
    return input.validity.valid
  })
}



//функция делает кнопку неактивной
function disableSubmitButton(form, submitBtnSelector, formSubmitClassDisabled) {
  const submitBtn = form.querySelector(submitBtnSelector)
  submitBtn.setAttribute('disabled', true);
  submitBtn.classList.add(formSubmitClassDisabled);
}

//функция удаляет класс неактивной кнопки и делает ее активной
function enableSubmitButton(form, submitBtnSelector, formSubmitClassDisabled) {
  const submitBtn = form.querySelector(submitBtnSelector);
  submitBtn.removeAttribute('disabled');
  submitBtn.classList.remove(formSubmitClassDisabled);
}



//функция делает кнопку активной или неактивной 
function toggleButtonStatus(form, inputSelector, submitBtnSelector, formSubmitClassDisabled) {
  const inputs = searchInputsForm(form, inputSelector);
  if (hasInvalidInput(inputs)) {
    enableSubmitButton(form, submitBtnSelector, formSubmitClassDisabled);
  } else {
    disableSubmitButton(form, submitBtnSelector, formSubmitClassDisabled);
  }
}


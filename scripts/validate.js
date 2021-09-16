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
function hideValidInputError(input, errorTextClass, errorInputClass) {
  const inputName = input.name;
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.textContent = '';
  errorPlace.classList.remove(errorTextClass);
  input.classList.remove(errorInputClass);
}

//если инпут не прошел валидацию, появляется сообщение об ошибке
function showValidInputError(input, errorTextClass, errorInputClass) {
  const inputName = input.getAttribute('name');
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.textContent = input.validationMessage;
  errorPlace.classList.add(errorTextClass);
  input.classList.add(errorInputClass);
}

//функция валидации инпутов
function validateInput(input, errorTextClass, errorInputClass) {
  if (input.validity.valid) {
    hideValidInputError(input, errorTextClass, errorInputClass);

  } else {
    showValidInputError(input, errorTextClass, errorInputClass);
  }
}


//функция наложения валидаций на все формы 
function validateForm(form, inputSelector, submitBtnSelector, errorTextClass, errorInputClass, formSubmitClassDisabled) {
  form.addEventListener('submit', (evt) => evt.preventDefault())

  const inputs = Array.from(form.querySelectorAll(inputSelector));

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      validateInput(input, errorTextClass, errorInputClass);

      submitBtnStatus(form, inputSelector, submitBtnSelector, formSubmitClassDisabled)
    })
  })
}

//функция валидации формы
function validateSubmit(inputs) {
  return inputs.every(function (input) {
    return input.validity.valid
  })
}

//функция делает кнопку неактивной 
function submitBtnStatus(form, inputSelector, submitBtnSelector, formSubmitClassDisabled) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const submitBtn = form.querySelector(submitBtnSelector)

  if (validateSubmit(inputs)) {
    submitBtn.removeAttribute('disabled');
    submitBtn.classList.remove(formSubmitClassDisabled);
  } else {
    submitBtn.setAttribute('disabled', true);
    submitBtn.classList.add(formSubmitClassDisabled);
  }
}
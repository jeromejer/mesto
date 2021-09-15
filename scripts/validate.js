const objForm = {
  formSelector: '.form',
  inputSelector: '.form__text',
  submitBtnSelector: '.form__submit',
  errorTextClass: 'form__error_active',
  errorInputClass: 'form__text_error',
  formSubmit: 'form__submit_disabled'
}

enableValidation(objForm);


function enableValidation({ formSelector, inputSelector, submitBtnSelector, errorTextClass, errorInputClass, formSubmit }) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach(form => {
    validateForm(form, inputSelector, submitBtnSelector, errorTextClass, errorInputClass, formSubmit)
  });
}

//если инпут валидирован, сообщение об ошибке убирается
function inputValid(input, errorTextClass, errorInputClass) {
  const inputName = input.getAttribute('name');
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.textContent = '';
  errorPlace.classList.remove(errorTextClass);
  input.classList.remove(errorInputClass);
}

//если инпут не прошел валидацию, появляется сообщение об ошибке
function inputInValid(input, errorTextClass, errorInputClass) {
  const inputName = input.getAttribute('name');
  const errorPlace = document.getElementById(`${inputName}-error`);
  errorPlace.textContent = input.validationMessage;
  errorPlace.classList.add(errorTextClass);
  input.classList.add(errorInputClass);
}

//функция валидации инпутов
function validateInput(input, errorTextClass, errorInputClass) {
  if (input.validity.valid) {
      inputValid(input, errorTextClass, errorInputClass);

  } else {
      inputInValid(input, errorTextClass, errorInputClass);
  }
}


//функция наложения валидаций на все формы 
function validateForm(form, inputSelector, submitBtnSelector, errorTextClass, errorInputClass, formSubmit) {
  form.addEventListener('submit', (evt) => evt.preventDefault())

  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const submitBtn = form.querySelector(submitBtnSelector)

  inputs.forEach(input => {
      input.addEventListener('input', () => {
          validateInput(input, errorTextClass, errorInputClass);

          const formValid = validateSubmit(inputs);
          submitBtnStatus(submitBtn, formValid, formSubmit)
      })
  })
}

//функция валидации формы
function validateSubmit(inputs) {
  return inputs.every(function(input) {
      return input.validity.valid
  })
}

//функция делает кнопку неактивной 
function submitBtnStatus(submitBtn, formValid, formSubmit) {
  if (formValid) {
      submitBtn.removeAttribute('disabled');
      submitBtn.classList.remove(formSubmit);
  } else {
      submitBtn.setAttribute('disabled', true);
      submitBtn.classList.add(formSubmit);
  }
}
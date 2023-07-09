var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const textFormElements = formEl.querySelectorAll('[name]');

const USER_FEEDBACK_STORAGE = 'feedback-form-state';
let userFeedback = {};

checkedLocalStorage();

formEl.addEventListener('input', throttle(onChangeInput, 500));
formEl.addEventListener('submit', onSubmitForm);

function onChangeInput(e) {
  userFeedback[e.target.name] = e.target.value;

  localStorage.setItem(USER_FEEDBACK_STORAGE, JSON.stringify(userFeedback));
}

function checkedLocalStorage() {
  if (localStorage.getItem(USER_FEEDBACK_STORAGE)) {
    userFeedback = JSON.parse(localStorage.getItem(USER_FEEDBACK_STORAGE));

    for (const element of textFormElements) {
      if (userFeedback[element.name]) {
        element.value = userFeedback[element.name];
      }
    }
  }
}

function onSubmitForm(e) {
  e.preventDefault();

  for (const element of textFormElements) {
    if (element.value.trim() === '') {
      alert('Please, fill in all fields');
      return;
    }
  }

  formEl.reset();
  localStorage.removeItem(USER_FEEDBACK_STORAGE);

  console.log(userFeedback);
}

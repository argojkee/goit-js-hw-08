var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('[name="email"]');
const messageEl = formEl.querySelector('[name="message');

const USER_FEEDBACK_STORAGE = 'feedback-form-state';
let userFeedback = {};

checkedLocalStorage();

formEl.addEventListener('input', throttle(onChangeInput, 1000));
formEl.addEventListener('submit', throttle(onSubmitForm, 1000));

function onChangeInput(e) {
  userFeedback[e.target.name] = e.target.value;

  localStorage.setItem(USER_FEEDBACK_STORAGE, JSON.stringify(userFeedback));
}

function checkedLocalStorage() {
  if (localStorage.getItem(USER_FEEDBACK_STORAGE)) {
    userFeedback = JSON.parse(localStorage.getItem(USER_FEEDBACK_STORAGE));

    emailEl.value = userFeedback.email;
    messageEl.value = userFeedback.message;
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  formEl.reset();
  localStorage.removeItem(USER_FEEDBACK_STORAGE);

  console.log(userFeedback);
}

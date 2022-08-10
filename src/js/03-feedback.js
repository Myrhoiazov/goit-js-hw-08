import throttle from 'lodash.throttle';

const USER_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('input', throttle(handleInputForm, 500));

form.addEventListener('submit', onSubForm);

const userData = {};

const key = localStorage.getItem(USER_KEY);

if (key) {
  const keyArr = JSON.parse(key);
  email.value = keyArr.email;
  message.value = keyArr.message;
}

function handleInputForm(event) {

  userData.email = email.value;
  userData.message = message.value;

  localStorage.setItem(USER_KEY, JSON.stringify(userData));
}

function onSubForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(USER_KEY)));

  const { email, message } = event.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    alert('Fill your form');
  } else {
    event.currentTarget.reset();
    localStorage.removeItem(USER_KEY);
  }
}

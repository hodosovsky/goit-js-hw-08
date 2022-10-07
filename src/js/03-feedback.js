import throttle from 'lodash.throttle';
const input = document.querySelector('.feedback-form input');
const textArea = document.querySelector('.feedback-form textarea');
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let data = {};
const myStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
// console.log(myStorage);
if (myStorage) {
  data = JSON.parse(localStorage.getItem(STORAGE_KEY));
}
form.addEventListener('submit', onFormSubmit);
populateForm();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(data);

  event.currentTarget.reset();
  data = {};
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  data[event.target.name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function populateForm(event) {
  const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (storage) {
    if (storage.email) {
      input.value = storage.email;
    }
    if (storage.message) {
      textArea.value = storage.message;
    }
  }
  // console.log(storage);
  // input.value = storage.email;
  // textArea.value = storage.message;
}

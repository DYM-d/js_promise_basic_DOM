'use strict';

const logo = document.querySelector('.logo');
const body = document.querySelector('body');

const promise1 = new Promise((resolve) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const resolved = document.createElement('div');

  resolved.setAttribute('class', 'message');
  resolved.textContent = 'Promise was resolved!';

  body.append(resolved);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

promise2.catch((error) => {
  const rejected = document.createElement('div');

  rejected.setAttribute('class', 'message error-message');
  rejected.textContent = error;

  body.append(rejected);
});
// write your code here

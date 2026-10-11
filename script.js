const html = document.documentElement;
const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', function () {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    themeButton.textContent = 'Dark mode';
  } else {
    html.dataset.theme = 'dark';
    themeButton.textContent = 'Light mode';
  }
});

const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const success = document.getElementById('form-success');

function showError(input, text) {
  document.getElementById(input.id + '-error').textContent = text;
  if (text === '') {
    input.removeAttribute('aria-invalid');
  } else {
    input.setAttribute('aria-invalid', 'true');
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();          
  success.textContent = '';
  let isValid = true;

  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Please enter your name.');
    isValid = false;
  } else {
    showError(nameInput, '');
  }

  const email = emailInput.value.trim();
  if (email === '') {
    showError(emailInput, 'Please enter your email address.');
    isValid = false;
  } else if (!email.includes('@') || !email.includes('.') || email.includes(' ')) {
    showError(emailInput, 'This email looks wrong. Use the format name@example.com.');
    isValid = false;
  } else {
    showError(emailInput, '');
  }

  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Please write a message.');
    isValid = false;
  } else {
    showError(messageInput, '');
  }


  if (isValid) {
    success.textContent = 'Thank you, ' + nameInput.value.trim() + '! Your message was received.';
    form.reset();
  }
});
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close-icon');
const body = document.querySelector('.body');
const menuItem = document.querySelectorAll('.menu__item');

[hamburger, close, overlay, ...menuItem].forEach(elem => {
  elem.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    overlay.classList.toggle('overlay_active');
    body.style.overflow = body.style.overflow ? '' : 'hidden';
  });
})

const form = document.querySelector('.contacts__form');
const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');
const inputPolicy = document.querySelector('input[name="policy"]');
const contactsBtn = document.querySelector('.contacts__button');

function disableBtnForm() {
  if (document.documentElement.clientWidth > 425) {
    if ((!form.elements[0].classList.contains('invalid') && !!form.elements[0].value)
      && (!form.elements[1].classList.contains('invalid') && !!form.elements[1].value)
      && (!form.elements[2].classList.contains('invalid') && !!form.elements[2].value)
    ) {
      contactsBtn.classList.remove('button_disable');
    } else {
      contactsBtn.classList.add('button_disable');
    }
  } else {
    if ((!form.elements[0].classList.contains('invalid') && !!form.elements[0].value)
      && (!form.elements[1].classList.contains('invalid') && !!form.elements[1].value)
      && (!form.elements[2].classList.contains('invalid') && !!form.elements[2].value)
      && inputPolicy.checked
    ) {
      contactsBtn.classList.remove('button_disable');
    } else {
      contactsBtn.classList.add('button_disable');
    }
  }
}

[inputName, inputEmail, inputMessage].forEach(elem => {
  elem.addEventListener('input', () => {
    if (elem.classList.contains('contacts__input-name')) {
      if (!/^[a-zA-Zа-яА-Я-]{2,}$/.test(inputName.value) && inputName.value) {
        elem.classList.add('invalid');
      } else {
        elem.classList.remove('invalid');
      }
    } else if (elem.classList.contains('contacts__input-email')) {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputEmail.value) && inputEmail.value) {
        elem.classList.add('invalid');
      } else {
        elem.classList.remove('invalid');
      }
    } else if (elem.classList.contains('contacts__input-message')) {
      const words = elem.value.split(/\s+/);
      if (words.length < 3 && elem.value) {
        elem.classList.add('invalid');
      } else {
        elem.classList.remove('invalid');
      }
    }
    disableBtnForm();
  });
});

inputPolicy.addEventListener('change', disableBtnForm);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = {
    name: inputName.value,
    email: inputEmail.value,
    message: inputMessage.value,
  };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => { alert(`${formData.name}. Спасибо, ваше сообщение отправлено!`), console.log('Data sent to the server :>> ', json) });
});
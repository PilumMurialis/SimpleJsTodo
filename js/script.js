"use strict";

const input = document.querySelector('.form__input');
const button = document.querySelector('.form__button');
const list = document.querySelector('.form__list');
const createNewListElement = () => {
    button.addEventListener('click', (event) => {
        if (input.value) {
            const newItem = input.value
            const listElement = document.createElement(`li`)
            list.style.visibility = 'visible'
            listElement.classList.add('form__item')
            listElement.textContent = newItem
            document.querySelector('.form__list').append(listElement)
            input.value = ''
        }
    }
)};
createNewListElement();

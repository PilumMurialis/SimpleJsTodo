"use strict";

const todoList = document.querySelector('.list__object'),
      buttonElem = document.querySelector('.block__button'),
      list = document.querySelector('.list__object');

let   blockInput = document.querySelector('.block__input'),
      listItem = document.querySelector('.list__item');


buttonElem.addEventListener('click', (pushTask) => {
    createListItem(listItem);
});

function createListItem(item, i) {
    item.innerHTML = "";
        item.innerHTML +=
            `<li class="list__item">lorem ipsum
                            
              </li>`
}

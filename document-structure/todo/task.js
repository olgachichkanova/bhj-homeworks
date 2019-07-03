const inputField = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const itemList = `<div class="task">
<div class="task__title">
  Сходить в магазин
</div>
<a href="#" class="task__remove">&times;</a>
</div>`;

const list = document.getElementById('tasks__list');

button.addEventListener('click', () => {
    if (inputField.value.length !== 0) {
        list.insertAdjacentHTML('afterbegin', itemList);

        const inputText = document.querySelector('.task__title');
        inputText.innerText = inputField.value;

        const removeTask = document.querySelector('.task__remove');
        removeTask.onclick = function() {
          list.removeChild(this.parentElement);
        };
    }
})
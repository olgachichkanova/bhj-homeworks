const inputField = document.getElementById('task__input');
const button = document.getElementById('tasks__add');

const task = function(taskText) {
  
  const task = document.createElement('div');
  task.classList = 'task';
  
  const taskTitle = document.createElement('div');
  taskTitle.classList = 'task__title';
  taskTitle.innerText = taskText;

  const remove = document.createElement('a');
  remove.href = '#';
  remove.classList = 'task__remove';
  remove.innerHTML = '&times;';

  task.appendChild(taskTitle);
  task.appendChild(remove);

  return task.outerHTML;
}

const list = document.getElementById('tasks__list');

button.addEventListener('click', (e) => {
  e.preventDefault();
    if (inputField.value.length !== 0) {
        list.insertAdjacentHTML('afterbegin', task(inputField.value));

        inputField.value = '';

        const removeTask = document.querySelector('.task__remove');
        removeTask.onclick = function() {
          list.removeChild(this.parentElement);
        };
    }
});


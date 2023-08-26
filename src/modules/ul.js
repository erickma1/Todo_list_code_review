import updateTask from './taskFunctions.js';

export default function addEventListeners(liElement, todoObj, todoList) {
  const dscr = liElement.querySelector('.task-description');
  const checkbox = liElement.querySelector('.completed-checkbox');
  const trash = liElement.querySelector('.trash-icon');

  checkbox.addEventListener('change', function () {
    dscr.style.textDecoration = this.checked ? 'line-through' : 'none';
    updateTask(liElement, todoList);
  });

  dscr.addEventListener('focus', function () {
    liElement.style.backgroundColor = '#ffeea8';
    this.style.cursor = 'text';
  });

  dscr.addEventListener('focusout', function () {
    liElement.style.backgroundColor = 'transparent';
    this.style.cursor = 'default';
    if (this.value.trim() === '') {
      todoObj.removeTask(liElement);
    } else {
      updateTask(liElement, todoList);
    }
  });

  dscr.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  });

  trash.addEventListener('click', () => {
    todoObj.removeTask(liElement);
  });
}
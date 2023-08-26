export function updateTask(liElement, todoList) {
  const taskDesc = liElement.querySelector('.task-description').value;
  const chkState = liElement.querySelector('.completed-checkbox').checked;
  const taskIndex = liElement.value - 1;
  todoList[taskIndex].description = taskDesc;
  todoList[taskIndex].completed = chkState;
  localStorage.setItem('todo-list', JSON.stringify(todoList));
}

export function updateList() {
  const todo = [];
  const liElement = document.querySelectorAll('.draggable-item');
  liElement.forEach((item, index) => {
    const opj = {
      index: index + 1,
      description: item.querySelector('.task-description').value,
      completed: item.querySelector('.completed-checkbox').checked,
    };
    todo.push(opj);
  });
  localStorage.setItem('todo-list', JSON.stringify(todo));
}
// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
const input = document.querySelector('input');
const addButton = document.querySelector('.add-btn');

function displayTodos() {
  ul.innerHTML = '';
  for (const todo of todoList) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `todo-${todo.id}`;
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = checkbox.checked;
      console.log(todoList);
    });

    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = todo.task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      todoList.splice(todoList.indexOf(todo), 1);
      li.parentNode.removeChild(li);
      console.log(todoList);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  }
}

displayTodos();
addButton.addEventListener('click', () => dialog.showModal());
form.addEventListener('submit', event => {
  event.preventDefault();
  todoList.push({
    id: todoList.length + 1,
    task: input.value,
    completed: false,
  });

  console.log(todoList);
  displayTodos();
  input.value = '';
  dialog.close();
});

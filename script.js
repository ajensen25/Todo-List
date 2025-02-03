const todoList = [];

const renderTodoList = () => {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    todoListHTML += 
    `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1); 
    renderTodoList();
    ">Delete</button>
    `;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

renderTodoList();

const addTodo = () => {
  const TODO_INPUT_ELEMENT = document.querySelector('.js-todo-input');
  const TODO_NAME = TODO_INPUT_ELEMENT.value;

  const TODO_DATE_ELEMENT = document.querySelector('.js-todo-date');
  const TODO_DATE = TODO_DATE_ELEMENT.value;

  todoList.push(
    {
    name: TODO_NAME, 
    dueDate: TODO_DATE,
    }
  );
  TODO_INPUT_ELEMENT.value = '';
  renderTodoList();
}
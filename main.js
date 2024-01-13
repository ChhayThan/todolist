const todoList = JSON.parse(localStorage.getItem("todoList"));

let btn = document.querySelector(".add_btn");
let inputElement = document.querySelector(".js-name-input");
let dateInputElement = document.querySelector(".js-date-input");

renderToDoList();

btn.addEventListener("click", (event) => {
  addToDo();
  localStorage.setItem("todoList", JSON.stringify(todoList));
});

inputElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToDo();
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
});

function addToDo() {
  const name = inputElement.value;
  const dueDate = dateInputElement.value;
  todoList.push({
    name,
    dueDate,
  });
  inputElement.value = "";
  console.log(todoList);
  renderToDoList();
}

function renderToDoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onClick="
            todoList.splice(${i}, 1);
            renderToDoList();
        " class="delete-todo-btn">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

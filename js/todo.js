const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDo();
}

function paintTodo(newTodoObj) {
    const elem = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    elem.id = newTodoObj.id;
    const button = document.createElement("button");
    button.innerText = "❎";
    button.addEventListener("click", deleteToDo);

    elem.appendChild(span);
    elem.appendChild(button);
    
    toDoList.appendChild(elem);
}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    
    parsedToDos.forEach((item) => paintTodo(item));
}
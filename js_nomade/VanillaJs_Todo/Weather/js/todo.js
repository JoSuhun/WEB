const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo) => {return toDo.id !== parseInt(li.id)})
    saveToDos()
}

function complete(event){
    const todo = event.target
    todo.classList.toggle('complete')
}

function paintToDo(newTodoObj) {
    const liTag = document.createElement("li");
    liTag.id = newTodoObj.id
    const spanTag = document.createElement("span");
    spanTag.textContent = newTodoObj.text;
    const button = document.createElement("button")
    button.textContent = "✕"
    button.classList.add('xbutton')
    button.classList.add('btn')
    button.classList.add('btn-outline-danger')
    button.classList.add('btn-sm')
    button.addEventListener("click", deleteToDo)
    spanTag.addEventListener('click', complete)

    liTag.appendChild(spanTag);
    liTag.appendChild(button)
    liTag.classList.add('d-flex')
    liTag.classList.add('justify-content-between')
    toDoList.appendChild(liTag)
}

function handleToDoSubmit(event) {
    console.log('wer')
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    }
    toDos.push(newTodoObj)
    paintToDo(newTodoObj);
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos) {
    const parsedToDos = JSON.parse(savedTodos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo);
}

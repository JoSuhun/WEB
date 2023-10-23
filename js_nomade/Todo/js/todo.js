const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const liTag = document.createElement("li");
    const spanTag = document.createElement("span");
    liTag.appendChild(spanTag);
    spanTag.textContent = newTodo;
    console.log(liTag)
    toDoList.appendChild(liTag)

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
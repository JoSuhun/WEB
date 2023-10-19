const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector('a');

function onLoginSubmit(event) {
    event.preventDefault()
    // const username = loginInput.value;
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);


function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

link.addEventListener('click', handleLinkClick)
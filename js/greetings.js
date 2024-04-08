const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "user";

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function onLoginSubmit(event) {
    const userName = loginInput.value;
    event.preventDefault();
    console.log(userName);

    loginForm.classList.add(HIDDEN_CLASS);

    paintGreetings(userName);

    localStorage.setItem(USERNAME_KEY, userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
    
}



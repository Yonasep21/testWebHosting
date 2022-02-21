const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const h1 = document.getElementById("h1");

const HIDDEN = "hidden";
const USER = "user";

function onbtn(tomato) {
  tomato.preventDefault();
  loginForm.classList.add(HIDDEN);
  const user = loginInput.value;
  localStorage.setItem(USER, user);
  paint(user);
}

function paint(user) {
  h1.innerText = `Wellcome ${user}`;
  h1.classList.remove(HIDDEN);
}
//loginForm.addEventListener("submit", onbtn);
//l//inaddEventListener("click", handleClick )

const dbUser = localStorage.getItem(USER);

function onbtn2() {}
if (dbUser === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onbtn);
} else {
  paint(dbUser);
}

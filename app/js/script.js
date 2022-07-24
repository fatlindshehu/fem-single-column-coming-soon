const form = document.querySelector(".header__search");
const email = document.querySelector(".header__input");
const error = document.querySelector(".header__error");
const btn = document.querySelector(".header__button");
var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener("click", function () {
  if (email.value.match(validRegex)) {
    error.style.display = "none";
  } else if (email.value === "") {
    error.style.display = "block";
    error.textContent = "Whoops! It looks like you forgot to add your email";
  } else {
    error.style.display = "block";
    error.textContent = "Please provide a valid email address";
  }
});

const button = document.querySelector(".button");

button.addEventListener("click", () => showMessage());

const showMessage = () => {
  alert("You're doing great, keep it up!");
};

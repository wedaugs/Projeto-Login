const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

const mobileToSignUp = document.getElementById("mobileToSignUp");
const mobileToSignIn = document.getElementById("mobileToSignIn");

function activateRightPanel() {
  container.classList.add("right-panel-active");
}

function deactivateRightPanel() {
  container.classList.remove("right-panel-active");
}

signUpButton.addEventListener("click", activateRightPanel);
signInButton.addEventListener("click", deactivateRightPanel);

mobileToSignUp.addEventListener("click", activateRightPanel);
mobileToSignIn.addEventListener("click", deactivateRightPanel);

document.getElementById("formSignUp").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário de Cadastro enviado! (Demo)");
});

document.getElementById("formSignIn").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário de Login enviado! (Demo)");
});

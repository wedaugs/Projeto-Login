// Selecionando os elementos do DOM
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

// Elementos Mobile
const mobileToSignUp = document.getElementById("mobileToSignUp");
const mobileToSignIn = document.getElementById("mobileToSignIn");

// Função para ativar painel direito (Cadastro)
function activateRightPanel() {
  container.classList.add("right-panel-active");
}

// Função para remover painel direito (Login)
function deactivateRightPanel() {
  container.classList.remove("right-panel-active");
}

// Eventos Desktop (Overlay Buttons)
signUpButton.addEventListener("click", activateRightPanel);
signInButton.addEventListener("click", deactivateRightPanel);

// Eventos Mobile (Links de Texto)
mobileToSignUp.addEventListener("click", activateRightPanel);
mobileToSignIn.addEventListener("click", deactivateRightPanel);

// Prevenir recarregamento da página nos formulários
document.getElementById("formSignUp").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário de Cadastro enviado! (Demo)");
});

document.getElementById("formSignIn").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Formulário de Login enviado! (Demo)");
});

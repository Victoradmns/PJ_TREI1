//Bloco de códigos para mudar a cor com a aproximação do mouse

const inputEmail = document.getElementById("inputEmailH")

inputEmail.addEventListener("mouseenter", () => {
    inputEmail.style.borderBottomColor = "rgba(0, 0, 0)";
});
  inputEmail.addEventListener("mouseleave", () => {
    inputEmail.style.borderBottomColor = "rgba(255, 255, 255, 0.25)";
});

const inputSenha = document.getElementById("inputSenhaH")

inputSenha.addEventListener("mouseenter", () => {
    inputSenha.style.borderBottomColor = "rgba(0, 0, 0)";
});
  inputSenha.addEventListener("mouseleave", () => {
    inputSenha.style.borderBottomColor = "rgba(255, 255, 255, 0.25)";
});

//Final do Bloco

//Manda para a pagina catalogo ao clicar com os valores certos
const botaoLogin = document.getElementById("login");

botaoLogin.addEventListener("click", () => {
  const valEmail = inputEmail.value;
  const valSenha = inputSenha.value;

  if (valSenha.lenght >= 8) {
    if (valEmail === "victoradmns@gmail.com" && valSenha === "senha1234") {
      window.location.href = "pj_TREI1/paginaCatalog.html";
      console.log(valEmail, valSenha);
    } else if (valEmail === "augusto@gmail.com" && valSenha === "senha1234") {
      window.location.href = "pj_TREI1/paginaCatalog.html";
      console.log(valEmail, valSenha);
    } else {
      console.log("Email ou senha inválidos.");
      console.log(valEmail, valSenha);
    }
  } else {
    console.log("Email ou senha inválidos.");
    console.log(valEmail, valSenha);
  }

  inputEmail.value = '';
  inputSenha.value = '';
});

//final do bloco

//popup da ajuda
const abrirPopup = document.getElementById("abrirPopup");
const fecharPopup = document.getElementById("fecharPopup");
const popup = document.getElementById("popup");

abrirPopup.addEventListener("click", () => {
  popup.style.display = "flex";
});

fecharPopup.addEventListener("click", () => {
  popup.style.display = "none";
});
//final do bloco
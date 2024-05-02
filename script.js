let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button0");

let sizeSenha = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let containerSenha = document.querySelector("#container-senha");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizeSenha.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizeSenha.innerHTML = this.value;
}

function generateSenha() {
    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

containerSenha.classList.remove("hide");
    senha.innerHTML = pass;
    novaSenha = pass;

}

function copySenha() {
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}
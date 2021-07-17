document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {

    if (document.getElementById("email").value != "") {

        alert("Prontinho! você receberá as promoções por email.")
    } else {
        alert("Por favor, preencha com o seu email.")
    }
}
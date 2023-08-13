document.addEventListener("DOMContentLoaded", function() {
    const resultados = document.getElementById("results");
    const resultadoDiv = document.getElementById("BOTR");
    const ppt = ["Pedra", "Papel", "Tesoura"];

resultados.onclick = function() {
    const aleatorio = Math.floor(Math.random() * ppt.length)
    const resultadoppt = ppt[aleatorio]
    resultadoDiv.textContent = "Computador: " + resultadoppt
    const inputTexto = document.getElementById("principaltxtb").value;

    resultadojogo.textContent = "";

    if (inputTexto.toLowerCase() !== "pedra" && inputTexto.toLowerCase() !== "papel" && inputTexto.toLowerCase() !== "tesoura") {
        resultadojogo.textContent = "Insira apenas 'Pedra', 'Papel' ou 'Tesoura'"
    }
        else{

    if (inputTexto.toLowerCase() === resultadoppt.toLowerCase()) {
        resultadojogo.textContent = "O jogo terminou em empate."
    }
    else if (inputTexto.toLowerCase() === "pedra" && resultadoppt.toLowerCase() === "papel" || inputTexto.toLowerCase() === "tesoura" && resultadoppt.toLowerCase() === "pedra"  || inputTexto.toLowerCase() === "papel" && resultadoppt.toLowerCase() === "tesoura") {
        resultadojogo.textContent = "O computador ganhou."
    }
    else {
        resultadojogo.textContent = "Você venceu."
    }
}
}
})


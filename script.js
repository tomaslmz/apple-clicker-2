var pontos = 0;

function pontuar() {
    pontos++;
    const qtd = document.getElementById("qtd");
    qtd.innerHTML = "Maças: " + pontos;
}
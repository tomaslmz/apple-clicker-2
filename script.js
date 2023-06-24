// Leitura de cookies
let getCookie = document.cookie.split(";");
var pontos = getCookie[0] == '' ? 0 : parseInt(getCookie[0]);
const qtd = document.getElementById("qtd");
qtd.innerHTML = "Maças: " + parseInt(pontos);
// Declaração de upgrades
var isUpgrade1On = false;
var precoUpgrade1 = 50;
var multiplicador1 = 1;
var isUpgrade2On = false;
var multiplicador2 = 0;

function pontuar(num) {
    switch(num) {
        case 1:
            if(isUpgrade1On) {
                pontos += 1*multiplicador1;
            } else {
                pontos++;
            }
        break;
        case 2:
            pontos = pontos * multiplicador2;
        break;
    }
    const qtd = document.getElementById("qtd");
    qtd.innerHTML = "Maças: " + parseInt(pontos);
}

function upgrade(num) {
    switch(num) {
        case 1:
            if(pontos >= precoUpgrade1) {
                isUpgrade1On = true;
                pontos-=precoUpgrade1;
                precoUpgrade1 = precoUpgrade1*1.75;
                multiplicador1++;
                const qtd = document.getElementById("qtd");
                qtd.innerHTML = "Maças: " + parseInt(pontos);
            } else {
                document.getElementById("erro").style.display = "flex";
            }
        case 2:
            isUpgrade2On = true;
            multiplicador2++;
        break;
    }
}

// setInterval(() => {
//     if(isUpgrade2On) {
//         pontuar(2);
//     }
// }, 5000);

function salvar() {
    let cookieString = pontos;
    document.cookie = cookieString;
}

function fecharTela() {
    document.getElementById("erro").style.display = "none";
}

setInterval(() => {
    let cookieString = pontos;
    document.cookie = cookieString;
}, 60000)
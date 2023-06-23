// Leitura de cookies
let getCookie = document.cookie.split(";");
var pontos = getCookie[0] == '' ? 0 : parseInt(getCookie[0]);
const qtd = document.getElementById("qtd");
qtd.innerHTML = "Maças: " + pontos;
// Declaração de upgrades
var precoUpgrade1 = 50;
var multiplicador1 = 0;
var isUpgrade2On = false;
var multiplicador2 = 0;

function pontuar(num) {
    switch(num) {
        case 1:
            pontos = pontos+1+(1*multiplicador1);
        break;
        case 2:
            pontos = pontos * multiplicador2;
        break;
    }
    const qtd = document.getElementById("qtd");
    qtd.innerHTML = "Maças: " + pontos;
}

function upgrade(num) {
    switch(num) {
        case 1:
            if(pontos >= precoUpgrade1) {
                pontos-=precoUpgrade1;
                precoUpgrade1 = precoUpgrade1*1.75;
                multiplicador1++;
            }
        case 2:
            isUpgrade2On = true;
            multiplicador2++;
        break;
    }
}

setInterval(() => {
    if(isUpgrade2On) {
        pontuar(2);
    }
}, 5000);

function salvar() {
    let cookieString = pontos;
    document.cookie = cookieString;
}

setInterval(() => {
    let cookieString = pontos;
    document.cookie = cookieString;
}, 60000)